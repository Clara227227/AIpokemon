/**
 * PokeAPIとの連携を担当するモジュール
 */

const POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

/**
 * 英語のポケモン名または図鑑番号から、日本語名・タイプ・種族値・覚える技を取得する
 * @param {string|number} identifier 
 * @returns {Promise<Object>} ポケモンデータオブジェクト
 */
export async function fetchPokemonFromApi(identifier) {
  const cleanId = String(identifier).toLowerCase().trim();
  
  try {
    // 1. 基本情報のフェッチ
    const pokemonRes = await fetch(`${POKEAPI_BASE_URL}/pokemon/${cleanId}`);
    if (!pokemonRes.ok) {
      throw new Error(`ポケモンが見つかりませんでした (ID/英語名: ${cleanId})`);
    }
    const pokemonData = await pokemonRes.json();

    // 2. 種族情報（日本語名取得用）のフェッチ
    // メガシンカなど一部のフォルムチェンジはpokemon-speciesが存在しない場合があるためtry-catch
    let jaName = cleanId;
    try {
      // speciesの名前を取得
      const speciesName = pokemonData.species.name;
      const speciesRes = await fetch(`${POKEAPI_BASE_URL}/pokemon-species/${speciesName}`);
      if (speciesRes.ok) {
        const speciesData = await speciesRes.json();
        const jaNameObj = speciesData.names.find(n => n.language.name === 'ja');
        if (jaNameObj) {
          jaName = jaNameObj.name;
        }
      }
    } catch (e) {
      console.warn('日本語名の取得に失敗しました。英語名を使用します:', e);
    }

    // 3. 種族値の解析 [HP, 攻撃, 防御, 特攻, 特防, 素早さ]
    const stats = [0, 0, 0, 0, 0, 0];
    pokemonData.stats.forEach(s => {
      switch (s.stat.name) {
        case 'hp': stats[0] = s.base_stat; break;
        case 'attack': stats[1] = s.base_stat; break;
        case 'defense': stats[2] = s.base_stat; break;
        case 'special-attack': stats[3] = s.base_stat; break;
        case 'special-defense': stats[4] = s.base_stat; break;
        case 'speed': stats[5] = s.base_stat; break;
      }
    });

    // 4. タイプの解析
    const types = pokemonData.types.map(t => t.type.name);

    // 5. 覚える技（初期は英語の技名リスト、主要な10件程度を取得して日本語化）
    const movesLimit = 15;
    const rawMoves = pokemonData.moves.slice(0, movesLimit);
    const moves = [];

    // 技の日本語名を並列でフェッチ
    const movePromises = rawMoves.map(async (m) => {
      try {
        const moveRes = await fetch(m.move.url);
        if (moveRes.ok) {
          const moveData = await moveRes.json();
          const jaMove = moveData.names.find(n => n.language.name === 'ja');
          if (jaMove) {
            return jaMove.name;
          }
        }
      } catch (e) {
        // ignore
      }
      return m.move.name;
    });

    const resolvedMoves = await Promise.all(movePromises);
    // 重複と空文字を除去
    const uniqueMoves = [...new Set(resolvedMoves)].filter(Boolean);

    // 型（物理アタッカー/特殊アタッカー/ディフェンダー）の自動推測
    let role = '物理アタッカー';
    const hp = stats[0], atk = stats[1], def = stats[2], spatk = stats[3], spdef = stats[4], spd = stats[5];
    
    if (def > 105 || spdef > 105 || (hp > 100 && (def > 90 || spdef > 90))) {
      role = def >= spdef ? '物理ディフェンダー' : '特殊ディフェンダー';
    } else if (spatk > atk) {
      role = '特殊アタッカー';
    }

    return {
      name: jaName,
      types: types,
      stats: stats,
      moves: uniqueMoves.slice(0, 8), // 主要な8個を登録
      role: role,
      isMega: pokemonData.name.includes('-mega')
    };

  } catch (error) {
    console.error('PokeAPI取得エラー:', error);
    throw error;
  }
}

/**
 * 英語の技名から日本語名とタイプ、ダメージ分類を取得する
 * @param {string} moveName 
 */
export async function fetchMoveDetail(moveName) {
  try {
    const cleanMove = String(moveName).toLowerCase().replace(/\s+/g, '-');
    const res = await fetch(`${POKEAPI_BASE_URL}/move/${cleanMove}`);
    if (!res.ok) return null;
    const data = await res.json();
    const jaNameObj = data.names.find(n => n.language.name === 'ja');
    return {
      name: jaNameObj ? jaNameObj.name : moveName,
      type: data.type.name,
      damageClass: data.damage_class.name // physical, special, status
    };
  } catch (e) {
    return null;
  }
}
