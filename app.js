import { initializeStorage } from './js/storage.js';
import { TeamChecker } from './js/components/team-checker.js';
import { Simulator } from './js/components/simulator.js';
import { DbManager } from './js/components/db-manager.js';

document.addEventListener('DOMContentLoaded', async () => {
  // 1. ローカルストレージの初期化
  initializeStorage();

  // 2. PokeAPIの疎通確認
  checkApiStatus();

  // 3. コンポーネントの初期化
  let checkerInstance, simulatorInstance, dbInstance;

  // DB変更時に他の画面を再同期するコールバック
  const onDbChange = () => {
    if (checkerInstance) checkerInstance.updateDb();
    if (simulatorInstance) simulatorInstance.updateData();
  };

  // チーム変更時にシミュレータを同期するコールバック
  const onTeamChange = () => {
    if (simulatorInstance) simulatorInstance.updateData();
  };

  checkerInstance = new TeamChecker('tab-checker', onTeamChange);
  simulatorInstance = new Simulator('tab-simulator');
  dbInstance = new DbManager('tab-database', onDbChange);

  // 初回ロード
  checkerInstance.init();
  simulatorInstance.init();
  dbInstance.init();

  // 4. タブ切り替え処理
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // ナビゲーションのactive切り替え
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // コンテンツセクションの表示切り替え
      const targetTabId = tab.getAttribute('data-tab');
      const contents = document.querySelectorAll('.tab-content');
      contents.forEach(content => {
        content.classList.remove('active');
        if (content.id === `tab-${targetTabId}`) {
          content.classList.add('active');
        }
      });

      // タブ切り替え時に最新データを再読み込み
      if (targetTabId === 'checker') {
        checkerInstance.updateDb();
      } else if (targetTabId === 'simulator') {
        simulatorInstance.updateData();
      } else if (targetTabId === 'database') {
        dbInstance.init(); // 検索フィルタなどもリセットされて綺麗な状態で開く
      }
    });
  });
});

/**
 * PokeAPIにテストリクエストを送信し、疎通を確認する
 */
async function checkApiStatus() {
  const badge = document.getElementById('api-status-badge');
  try {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/1', { method: 'HEAD' });
    if (res.ok) {
      badge.className = 'api-status online';
      badge.innerHTML = `<i class="fa-solid fa-circle-check"></i> PokeAPI 接続中`;
    } else {
      throw new Error();
    }
  } catch (e) {
    badge.className = 'api-status offline';
    badge.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> PokeAPI 接続不可 (ローカルDB動作)`;
  }
}
