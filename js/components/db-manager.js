import { getPokemonDatabase, savePokemonDatabase, resetPokemonDatabase } from '../storage.js';
import { TYPE_NAMES_JA } from '../data/initial-pokemon.js';
import { fetchPokemonFromApi } from '../pokeapi.js';

export class DbManager {
  constructor(containerId, onDbChangeCallback) {
    this.container = document.getElementById(containerId);
    this.onDbChange = onDbChangeCallback; // DBが変更された時に相性チェッカーなどを更新するためのコールバック
    this.searchQuery = '';
    this.typeFilter = '';
    this.editingPokemonId = null; // 編集中のID (nullなら新規作成)
    this.pokemonList = [];
    
    // CSSスタイルを追加（管理画面用）
    this.injectStyles();
  }

  init() {
    this.pokemonList = getPokemonDatabase();
    this.render();
  }

  injectStyles() {
    if (document.getElementById('db-manager-styles')) return;
    const style = document.createElement('style');
    style.id = 'db-manager-styles';
    style.textContent = `
      .db-layout {
        display: grid;
        grid-template-columns: 1fr 380px;
        gap: 20px;
      }
      @media (max-width: 1024px) {
        .db-layout {
          grid-template-columns: 1fr;
        }
      }
      .db-toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
        margin-bottom: 20px;
        flex-wrap: wrap;
      }
      .db-search-box {
        display: flex;
        gap: 10px;
        flex: 1;
        min-width: 300px;
      }
      .db-actions {
        display: flex;
        gap: 10px;
      }
      .pokemon-table-container {
        overflow-x: auto;
        border-radius: var(--radius-md);
        border: 1px solid var(--border-color);
        background: rgba(10, 15, 30, 0.4);
      }
      .pokemon-table {
        width: 100%;
        border-collapse: collapse;
        text-align: left;
        font-size: 14px;
      }
      .pokemon-table th, .pokemon-table td {
        padding: 12px 16px;
        border-bottom: 1px solid var(--border-color);
      }
      .pokemon-table th {
        background: rgba(255, 255, 255, 0.03);
        font-weight: 600;
        color: var(--text-secondary);
      }
      .pokemon-table tr:hover td {
        background: rgba(255, 255, 255, 0.02);
      }
      .stat-badge {
        display: inline-block;
        padding: 2px 6px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.07);
        font-family: monospace;
        font-size: 12px;
      }
      .form-group {
        margin-bottom: 15px;
      }
      .form-group label {
        display: block;
        font-size: 13px;
        font-weight: 600;
        color: var(--text-secondary);
        margin-bottom: 6px;
      }
      .form-row-stats {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        margin-bottom: 15px;
      }
      .api-fetch-box {
        display: flex;
        gap: 8px;
        background: rgba(59, 130, 246, 0.05);
        border: 1px solid rgba(59, 130, 246, 0.2);
        padding: 12px;
        border-radius: var(--radius-sm);
        margin-bottom: 15px;
      }
      .import-export-area {
        display: flex;
        gap: 10px;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid var(--border-color);
      }
      .file-input-wrapper {
        position: relative;
        overflow: hidden;
        display: inline-block;
      }
      .file-input-wrapper input[type=file] {
        position: absolute;
        left: 0;
        top: 0;
        opacity: 0;
        cursor: pointer;
        height: 100%;
        width: 100%;
      }
    `;
    document.head.appendChild(style);
  }

  render() {
    this.container.innerHTML = `
      <div class="db-layout">
        <!-- 左側：ポケモンリストテーブル -->
        <div class="glass-card">
          <h2 class="section-title"><i class="fa-solid fa-list"></i> 登録ポケモン一覧</h2>
          
          <div class="db-toolbar">
            <div class="db-search-box">
              <input type="text" id="db-search-input" placeholder="名前で検索..." value="${this.searchQuery}">
              <select id="db-type-filter">
                <option value="">すべてのタイプ</option>
                ${Object.entries(TYPE_NAMES_JA).map(([key, name]) => `
                  <option value="${key}" ${this.typeFilter === key ? 'selected' : ''}>${name}</option>
                `).join('')}
              </select>
            </div>
            
            <div class="db-actions">
              <button class="btn btn-secondary" id="db-btn-reset"><i class="fa-solid fa-rotate-left"></i> 初期化</button>
            </div>
          </div>

          <div class="pokemon-table-container">
            <table class="pokemon-table">
              <thead>
                <tr>
                  <th>名前</th>
                  <th>タイプ</th>
                  <th>型</th>
                  <th>種族値 (H-A-B-C-D-S)</th>
                  <th style="width: 120px;">操作</th>
                </tr>
              </thead>
              <tbody id="db-table-body">
                ${this.renderTableRows()}
              </tbody>
            </table>
          </div>

          <!-- エクスポート/インポート -->
          <div class="import-export-area">
            <button class="btn btn-secondary" id="db-btn-export"><i class="fa-solid fa-download"></i> JSON書き出し</button>
            <div class="file-input-wrapper">
              <button class="btn btn-secondary"><i class="fa-solid fa-upload"></i> JSON読み込み</button>
              <input type="file" id="db-file-import" accept=".json">
            </div>
          </div>
        </div>

        <!-- 右側：編集・追加フォーム -->
        <div class="glass-card" id="db-form-container">
          ${this.renderForm()}
        </div>
      </div>
    `;

    this.bindEvents();
  }

  renderTableRows() {
    // 検索・フィルタリングの適用
    const filtered = this.pokemonList.filter(p => {
      const matchName = p.name.includes(this.searchQuery);
      const types = Array.isArray(p.types) ? p.types : [p.types];
      const matchType = !this.typeFilter || types.includes(this.typeFilter);
      return matchName && matchType;
    });

    if (filtered.length === 0) {
      return `<tr><td colspan="5" style="text-align: center; color: var(--text-muted);">該当するポケモンがいません。</td></tr>`;
    }

    return filtered.map(p => {
      const types = Array.isArray(p.types) ? p.types : [p.types];
      const typeBadges = types.map(t => `<span class="badge-type ${t}">${TYPE_NAMES_JA[t] || t}</span>`).join(' ');
      const statsStr = p.stats.join('-');
      const isMegaBadge = p.isMega ? ' <span style="font-size: 10px; padding: 2px 4px; border-radius: 3px; background: #8b5cf6; color: white;">MEGA</span>' : '';
      
      return `
        <tr data-id="${p.id}">
          <td style="font-weight: 600;">${p.name}${isMegaBadge}</td>
          <td>${typeBadges}</td>
          <td style="font-size: 12px; color: var(--text-secondary);">${p.role}</td>
          <td><span class="stat-badge">${statsStr}</span></td>
          <td>
            <button class="btn btn-secondary btn-edit-row" style="padding: 4px 8px; font-size: 12px;" data-id="${p.id}"><i class="fa-solid fa-pen"></i></button>
            <button class="btn btn-danger btn-delete-row" style="padding: 4px 8px; font-size: 12px;" data-id="${p.id}"><i class="fa-solid fa-trash"></i></button>
          </td>
        </tr>
      `;
    }).join('');
  }

  renderForm() {
    const isEdit = this.editingPokemonId !== null;
    const pokemon = isEdit 
      ? this.pokemonList.find(p => p.id === this.editingPokemonId) 
      : { name: '', types: ['normal'], stats: [100, 100, 100, 100, 100, 100], moves: [], role: '物理アタッカー', isMega: false };

    if (!pokemon) return '';

    return `
      <h2 class="section-title">
        <i class="fa-solid ${isEdit ? 'fa-pen-to-square' : 'fa-plus'}"></i> 
        ${isEdit ? 'ポケモンデータを編集' : '新しいポケモンを追加'}
      </h2>

      <!-- API自動取得ボックス (新規追加時のみ表示) -->
      ${!isEdit ? `
        <div class="api-fetch-box">
          <input type="text" id="api-fetch-input" placeholder="英語名か図鑑番号 (例: charizard)">
          <button class="btn btn-primary" id="api-fetch-btn" style="white-space: nowrap;"><i class="fa-solid fa-cloud-arrow-down"></i> API取得</button>
        </div>
      ` : ''}

      <form id="pokemon-edit-form">
        <div class="form-group">
          <label for="form-name">ポケモン名 (日本語)</label>
          <input type="text" id="form-name" value="${pokemon.name}" required placeholder="例: リザードン">
        </div>

        <div class="form-group">
          <label>タイプ (最大2つ)</label>
          <div style="display: flex; gap: 10px;">
            <select id="form-type1" required>
              ${Object.entries(TYPE_NAMES_JA).map(([key, name]) => `
                <option value="${key}" ${pokemon.types[0] === key ? 'selected' : ''}>${name}</option>
              `).join('')}
            </select>
            <select id="form-type2">
              <option value="">なし</option>
              ${Object.entries(TYPE_NAMES_JA).map(([key, name]) => `
                <option value="${key}" ${pokemon.types[1] === key ? 'selected' : ''}>${name}</option>
              `).join('')}
            </select>
          </div>
        </div>

        <div class="form-group">
          <label for="form-role">型（役割）</label>
          <select id="form-role">
            <option value="物理アタッカー" ${pokemon.role === '物理アタッカー' ? 'selected' : ''}>物理アタッカー</option>
            <option value="特殊アタッカー" ${pokemon.role === '特殊アタッカー' ? 'selected' : ''}>特殊アタッカー</option>
            <option value="物理ディフェンダー" ${pokemon.role === '物理ディフェンダー' ? 'selected' : ''}>物理ディフェンダー</option>
            <option value="特殊ディフェンダー" ${pokemon.role === '特殊ディフェンダー' ? 'selected' : ''}>特殊ディフェンダー</option>
            <option value="両受け・起点作成など" ${pokemon.role === '両受け・起点作成など' ? 'selected' : ''}>両受け・起点作成など</option>
          </select>
        </div>

        <div class="form-group" style="display: flex; align-items: center; gap: 8px;">
          <input type="checkbox" id="form-ismega" ${pokemon.isMega ? 'checked' : ''} style="width: auto; cursor: pointer;">
          <label for="form-ismega" style="margin-bottom: 0; cursor: pointer;">メガシンカポケモン</label>
        </div>

        <!-- 種族値入力 -->
        <label style="display: block; font-size: 13px; font-weight: 600; color: var(--text-secondary); margin-bottom: 6px;">種族値</label>
        <div class="form-row-stats">
          <div class="form-group">
            <label for="stat-hp" style="font-size:11px;">HP</label>
            <input type="number" id="stat-hp" value="${pokemon.stats[0]}" min="1" max="255" required>
          </div>
          <div class="form-group">
            <label for="stat-atk" style="font-size:11px;">攻撃</label>
            <input type="number" id="stat-atk" value="${pokemon.stats[1]}" min="1" max="255" required>
          </div>
          <div class="form-group">
            <label for="stat-def" style="font-size:11px;">防御</label>
            <input type="number" id="stat-def" value="${pokemon.stats[2]}" min="1" max="255" required>
          </div>
        </div>
        <div class="form-row-stats">
          <div class="form-group">
            <label for="stat-spatk" style="font-size:11px;">特攻</label>
            <input type="number" id="stat-spatk" value="${pokemon.stats[3]}" min="1" max="255" required>
          </div>
          <div class="form-group">
            <label for="stat-spdef" style="font-size:11px;">特防</label>
            <input type="number" id="stat-spdef" value="${pokemon.stats[4]}" min="1" max="255" required>
          </div>
          <div class="form-group">
            <label for="stat-spd" style="font-size:11px;">素早さ</label>
            <input type="number" id="stat-spd" value="${pokemon.stats[5]}" min="1" max="255" required>
          </div>
        </div>

        <div class="form-group">
          <label for="form-moves">技リスト (カンマ区切りで入力)</label>
          <textarea id="form-moves" rows="3" placeholder="しんそく, じしん, りゅうのまい">${pokemon.moves.join(', ')}</textarea>
        </div>

        <div style="display: flex; gap: 10px; margin-top: 20px;">
          <button type="submit" class="btn btn-primary" style="flex: 1;"><i class="fa-solid fa-floppy-disk"></i> 保存する</button>
          ${isEdit ? `
            <button type="button" class="btn btn-secondary" id="form-btn-cancel">キャンセル</button>
          ` : ''}
        </div>
      </form>
    `;
  }

  bindEvents() {
    // 検索入力
    const searchInput = document.getElementById('db-search-input');
    searchInput.addEventListener('input', (e) => {
      this.searchQuery = e.target.value.trim();
      document.getElementById('db-table-body').innerHTML = this.renderTableRows();
      this.bindRowEvents();
    });

    // タイプフィルタ
    const typeFilter = document.getElementById('db-type-filter');
    typeFilter.addEventListener('change', (e) => {
      this.typeFilter = e.target.value;
      document.getElementById('db-table-body').innerHTML = this.renderTableRows();
      this.bindRowEvents();
    });

    // データベース初期化
    const btnReset = document.getElementById('db-btn-reset');
    btnReset.addEventListener('click', () => {
      if (confirm('データベースを初期状態（Pokémon Champions 311匹）にリセットしますか？手動で行った修正は消去されます。')) {
        this.pokemonList = resetPokemonDatabase();
        document.getElementById('db-table-body').innerHTML = this.renderTableRows();
        this.bindRowEvents();
        if (this.onDbChange) this.onDbChange();
        alert('リセットが完了しました。');
      }
    });

    // JSONエクスポート
    const btnExport = document.getElementById('db-btn-export');
    btnExport.addEventListener('click', () => {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.pokemonList, null, 2));
      const downloadAnchor = document.createElement('a');
      downloadAnchor.setAttribute("href", dataStr);
      downloadAnchor.setAttribute("download", "pokemon_db.json");
      document.body.appendChild(downloadAnchor);
      downloadAnchor.click();
      downloadAnchor.remove();
    });

    // JSONインポート
    const fileImport = document.getElementById('db-file-import');
    fileImport.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const imported = JSON.parse(event.target.result);
          if (Array.isArray(imported)) {
            // 最低限のバリデーション
            const isValid = imported.every(p => p.name && Array.isArray(p.types) && Array.isArray(p.stats));
            if (isValid) {
              this.pokemonList = imported;
              savePokemonDatabase(this.pokemonList);
              document.getElementById('db-table-body').innerHTML = this.renderTableRows();
              this.bindRowEvents();
              if (this.onDbChange) this.onDbChange();
              alert('インポートが完了しました！');
            } else {
              alert('JSONファイルの構造が正しくありません。');
            }
          }
        } catch (err) {
          alert('ファイルの読み込みに失敗しました。有効なJSONファイルを選択してください。');
        }
      };
      reader.readAsText(file);
    });

    // API取得ボタン (新規作成時のみ)
    const apiFetchBtn = document.getElementById('api-fetch-btn');
    if (apiFetchBtn) {
      apiFetchBtn.addEventListener('click', async () => {
        const input = document.getElementById('api-fetch-input').value.trim();
        if (!input) {
          alert('英語名または図籍番号を入力してください。 (例: garchomp, 445)');
          return;
        }
        
        apiFetchBtn.disabled = true;
        apiFetchBtn.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i> 取得中...`;
        
        try {
          const data = await fetchPokemonFromApi(input);
          
          // フォームに反映
          document.getElementById('form-name').value = data.name;
          document.getElementById('form-type1').value = data.types[0];
          document.getElementById('form-type2').value = data.types[1] || '';
          document.getElementById('form-role').value = data.role;
          document.getElementById('form-ismega').checked = data.isMega;
          
          document.getElementById('stat-hp').value = data.stats[0];
          document.getElementById('stat-atk').value = data.stats[1];
          document.getElementById('stat-def').value = data.stats[2];
          document.getElementById('stat-spatk').value = data.stats[3];
          document.getElementById('stat-spdef').value = data.stats[4];
          document.getElementById('stat-spd').value = data.stats[5];
          
          document.getElementById('form-moves').value = data.moves.join(', ');
          
          alert(`APIから「${data.name}」のデータを取得しました！内容を確認して保存してください。`);
        } catch (err) {
          alert(`データの取得に失敗しました。英語名や図鑑番号が正しいか確認してください。\nエラー: ${err.message}`);
        } finally {
          apiFetchBtn.disabled = false;
          apiFetchBtn.innerHTML = `<i class="fa-solid fa-cloud-arrow-down"></i> API取得`;
        }
      });
    }

    // フォーム送信（保存）
    const editForm = document.getElementById('pokemon-edit-form');
    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name').value.trim();
      const type1 = document.getElementById('form-type1').value;
      const type2 = document.getElementById('form-type2').value;
      const types = type2 ? [type1, type2] : [type1];
      
      const role = document.getElementById('form-role').value;
      const isMega = document.getElementById('form-ismega').checked;
      
      const stats = [
        parseInt(document.getElementById('stat-hp').value) || 0,
        parseInt(document.getElementById('stat-atk').value) || 0,
        parseInt(document.getElementById('stat-def').value) || 0,
        parseInt(document.getElementById('stat-spatk').value) || 0,
        parseInt(document.getElementById('stat-spdef').value) || 0,
        parseInt(document.getElementById('stat-spd').value) || 0
      ];

      const movesText = document.getElementById('form-moves').value;
      const moves = movesText.split(',').map(m => m.trim()).filter(Boolean);

      if (this.editingPokemonId !== null) {
        // 更新
        const index = this.pokemonList.findIndex(p => p.id === this.editingPokemonId);
        if (index !== -1) {
          this.pokemonList[index] = {
            id: this.editingPokemonId,
            name, types, stats, moves, role, isMega
          };
        }
      } else {
        // 新規追加
        const newId = this.pokemonList.length > 0 ? Math.max(...this.pokemonList.map(p => p.id)) + 1 : 1;
        this.pokemonList.push({
          id: newId,
          name, types, stats, moves, role, isMega
        });
      }

      savePokemonDatabase(this.pokemonList);
      this.editingPokemonId = null; // リセット
      
      // 再描画
      this.render();
      if (this.onDbChange) this.onDbChange();
      alert('保存しました。');
    });

    // キャンセルボタン
    const btnCancel = document.getElementById('form-btn-cancel');
    if (btnCancel) {
      btnCancel.addEventListener('click', () => {
        this.editingPokemonId = null;
        document.getElementById('db-form-container').innerHTML = this.renderForm();
        this.bindFormEvents();
      });
    }

    this.bindRowEvents();
  }

  // テーブル行の中のボタンイベント
  bindRowEvents() {
    // 編集ボタン
    const editButtons = this.container.querySelectorAll('.btn-edit-row');
    editButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        this.editingPokemonId = id;
        
        // フォーム部分だけ再描画
        document.getElementById('db-form-container').innerHTML = this.renderForm();
        this.bindFormEvents();
        
        // フォームへスクロール
        document.getElementById('db-form-container').scrollIntoView({ behavior: 'smooth' });
      });
    });

    // 削除ボタン
    const deleteButtons = this.container.querySelectorAll('.btn-delete-row');
    deleteButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = parseInt(btn.getAttribute('data-id'));
        const pokemon = this.pokemonList.find(p => p.id === id);
        
        if (pokemon && confirm(`「${pokemon.name}」をデータベースから削除しますか？`)) {
          this.pokemonList = this.pokemonList.filter(p => p.id !== id);
          savePokemonDatabase(this.pokemonList);
          
          if (this.editingPokemonId === id) {
            this.editingPokemonId = null;
          }
          
          this.render();
          if (this.onDbChange) this.onDbChange();
        }
      });
    });
  }

  // フォーム単体切り替え用のバインド
  bindFormEvents() {
    const editForm = document.getElementById('pokemon-edit-form');
    if (editForm) {
      editForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('form-name').value.trim();
        const type1 = document.getElementById('form-type1').value;
        const type2 = document.getElementById('form-type2').value;
        const types = type2 ? [type1, type2] : [type1];
        
        const role = document.getElementById('form-role').value;
        const isMega = document.getElementById('form-ismega').checked;
        
        const stats = [
          parseInt(document.getElementById('stat-hp').value) || 0,
          parseInt(document.getElementById('stat-atk').value) || 0,
          parseInt(document.getElementById('stat-def').value) || 0,
          parseInt(document.getElementById('stat-spatk').value) || 0,
          parseInt(document.getElementById('stat-spdef').value) || 0,
          parseInt(document.getElementById('stat-spd').value) || 0
        ];

        const movesText = document.getElementById('form-moves').value;
        const moves = movesText.split(',').map(m => m.trim()).filter(Boolean);

        if (this.editingPokemonId !== null) {
          const index = this.pokemonList.findIndex(p => p.id === this.editingPokemonId);
          if (index !== -1) {
            this.pokemonList[index] = {
              id: this.editingPokemonId,
              name, types, stats, moves, role, isMega
            };
          }
        } else {
          const newId = this.pokemonList.length > 0 ? Math.max(...this.pokemonList.map(p => p.id)) + 1 : 1;
          this.pokemonList.push({
            id: newId,
            name, types, stats, moves, role, isMega
          });
        }

        savePokemonDatabase(this.pokemonList);
        this.editingPokemonId = null;
        
        this.render();
        if (this.onDbChange) this.onDbChange();
        alert('保存しました。');
      });
    }

    const btnCancel = document.getElementById('form-btn-cancel');
    if (btnCancel) {
      btnCancel.addEventListener('click', () => {
        this.editingPokemonId = null;
        document.getElementById('db-form-container').innerHTML = this.renderForm();
        this.bindFormEvents();
      });
    }
  }
}
