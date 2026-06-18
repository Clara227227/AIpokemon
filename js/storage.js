import { INITIAL_POKEMON_DATABASE, INITIAL_VIRTUAL_ENEMIES } from './data/initial-pokemon.js';

const STORAGE_KEYS = {
  POKEMON_DB: 'pk_champions_db',
  VIRTUAL_ENEMIES: 'pk_champions_enemies',
  CURRENT_TEAM: 'pk_champions_team'
};

/**
 * 初回起動時などにLocalStorageを初期化する
 */
export function initializeStorage() {
  const storedDb = localStorage.getItem(STORAGE_KEYS.POKEMON_DB);
  let dbNeedsReset = false;
  if (storedDb) {
    try {
      const parsed = JSON.parse(storedDb);
      // 古いデータベース（登録数が少ない、または仕様変更）を検知して自動で最新化する
      if (parsed.length < 100) {
        dbNeedsReset = true;
      }
    } catch (e) {
      dbNeedsReset = true;
    }
  }

  if (!storedDb || dbNeedsReset) {
    localStorage.setItem(STORAGE_KEYS.POKEMON_DB, JSON.stringify(INITIAL_POKEMON_DATABASE));
    // DBを最新化した場合は仮想敵リストも最新のものに同期する
    localStorage.setItem(STORAGE_KEYS.VIRTUAL_ENEMIES, JSON.stringify(INITIAL_VIRTUAL_ENEMIES));
  }

  if (!localStorage.getItem(STORAGE_KEYS.VIRTUAL_ENEMIES)) {
    localStorage.setItem(STORAGE_KEYS.VIRTUAL_ENEMIES, JSON.stringify(INITIAL_VIRTUAL_ENEMIES));
  }
  if (!localStorage.getItem(STORAGE_KEYS.CURRENT_TEAM)) {
    // 空のチーム（6スロット分）
    const emptyTeam = Array(6).fill(null);
    localStorage.setItem(STORAGE_KEYS.CURRENT_TEAM, JSON.stringify(emptyTeam));
  }
}

/**
 * 登録されている全ポケモンを取得
 */
export function getPokemonDatabase() {
  initializeStorage();
  const data = localStorage.getItem(STORAGE_KEYS.POKEMON_DB);
  return data ? JSON.parse(data) : [];
}

/**
 * 登録されているポケモンデータベースを保存
 */
export function savePokemonDatabase(db) {
  localStorage.setItem(STORAGE_KEYS.POKEMON_DB, JSON.stringify(db));
}

/**
 * データベースを初期状態にリセット
 */
export function resetPokemonDatabase() {
  localStorage.setItem(STORAGE_KEYS.POKEMON_DB, JSON.stringify(INITIAL_POKEMON_DATABASE));
  return INITIAL_POKEMON_DATABASE;
}

/**
 * 仮想敵リストを取得
 */
export function getVirtualEnemies() {
  initializeStorage();
  const data = localStorage.getItem(STORAGE_KEYS.VIRTUAL_ENEMIES);
  return data ? JSON.parse(data) : [];
}

/**
 * 仮想敵リストを保存
 */
export function saveVirtualEnemies(enemies) {
  localStorage.setItem(STORAGE_KEYS.VIRTUAL_ENEMIES, JSON.stringify(enemies));
}

/**
 * 仮想敵リストを初期状態にリセット
 */
export function resetVirtualEnemies() {
  localStorage.setItem(STORAGE_KEYS.VIRTUAL_ENEMIES, JSON.stringify(INITIAL_VIRTUAL_ENEMIES));
  return INITIAL_VIRTUAL_ENEMIES;
}

/**
 * 現在編成されている手持ち6匹を取得
 */
export function getCurrentTeam() {
  initializeStorage();
  const data = localStorage.getItem(STORAGE_KEYS.CURRENT_TEAM);
  return data ? JSON.parse(data) : Array(6).fill(null);
}

/**
 * 手持ち6匹のデータを保存
 */
export function saveCurrentTeam(team) {
  localStorage.setItem(STORAGE_KEYS.CURRENT_TEAM, JSON.stringify(team));
}
