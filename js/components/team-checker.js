import { getPokemonDatabase, getCurrentTeam, saveCurrentTeam } from '../storage.js';
import { TYPE_CHART, TYPE_NAMES_JA } from '../data/initial-pokemon.js';

export class TeamChecker {
  constructor(containerId, onTeamChangeCallback) {
    this.container = document.getElementById(containerId);
    this.onTeamChange = onTeamChangeCallback;
    this.pokemonDb = [];
    this.currentTeam = []; // 6つの要素（nullまたは{name, role, moves:[]}）
    
    this.injectStyles();
  }

  init() {
    this.pokemonDb = getPokemonDatabase();
    this.currentTeam = getCurrentTeam();
    this.render();
  }

  // ポケモンデータベースが更新された際に呼び出して再同期する
  updateDb() {
    this.pokemonDb = getPokemonDatabase();
    this.render();
  }

  injectStyles() {
    if (document.getElementById('team-checker-styles')) return;
    const style = document.createElement('style');
    style.id = 'team-checker-styles';
    style.textContent = `
      .checker-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
      }
      @media (max-width: 1100px) {
        .checker-layout {
          grid-template-columns: 1fr;
        }
      }
      .team-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
      }
      @media (max-width: 550px) {
        .team-grid {
          grid-template-columns: 1fr;
        }
      }
      .pokemon-slot {
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
        padding: 15px;
        position: relative;
        transition: all 0.3s ease;
      }
      .pokemon-slot.has-pokemon {
        background: rgba(59, 130, 246, 0.05);
        border-color: rgba(59, 130, 246, 0.3);
      }
      .slot-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
      }
      .slot-number {
        font-size: 11px;
        font-weight: 800;
        text-transform: uppercase;
        color: var(--text-muted);
        letter-spacing: 1px;
      }
      .btn-clear-slot {
        background: none;
        border: none;
        color: var(--text-muted);
        cursor: pointer;
        font-size: 12px;
        transition: color 0.2s;
      }
      .btn-clear-slot:hover {
        color: var(--color-danger);
      }
      .slot-body {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      .pokemon-info-mini {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-top: 5px;
      }
      .pokemon-sprite-container {
        width: 65px;
        height: 65px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 50%;
        border: 1px solid var(--border-color);
      }
      .pokemon-sprite-container img {
        width: 60px;
        height: 60px;
        object-fit: contain;
      }
      .pokemon-desc-mini {
        flex: 1;
      }
      .pokemon-desc-name {
        font-size: 16px;
        font-weight: 700;
      }
      .move-selects {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 6px;
        margin-top: 5px;
      }
      .move-selects select {
        padding: 6px 8px;
        font-size: 12px;
      }

      /* 診断パネル */
      .diagnose-panel {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      .matrix-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 8px;
      }
      @media (max-width: 450px) {
        .matrix-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }
      .matrix-cell {
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-sm);
        padding: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4px;
        font-size: 12px;
        transition: transform 0.2s;
      }
      .matrix-cell:hover {
        transform: translateY(-2px);
        background: rgba(255,255,255,0.05);
      }
      .matrix-cell-val {
        font-family: monospace;
        font-weight: 800;
        font-size: 14px;
        padding: 2px 6px;
        border-radius: 4px;
      }
      .matrix-cell-val.weak {
        background: rgba(244, 63, 94, 0.15);
        color: var(--color-danger);
      }
      .matrix-cell-val.resist {
        background: rgba(16, 185, 129, 0.15);
        color: var(--color-success);
      }
      .matrix-cell-val.neutral {
        color: var(--text-secondary);
      }
      .analysis-section {
        background: rgba(255,255,255,0.01);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
        padding: 16px;
      }
      .analysis-title {
        font-size: 15px;
        font-weight: 700;
        margin-bottom: 12px;
        display: flex;
        align-items: center;
        gap: 8px;
        color: var(--text-primary);
      }
      .analysis-item {
        display: flex;
        align-items: flex-start;
        gap: 8px;
        font-size: 13px;
        line-height: 1.6;
        margin-bottom: 8px;
        color: var(--text-secondary);
      }
      .analysis-item i {
        margin-top: 3px;
      }
      .analysis-item.warning i { color: var(--color-danger); }
      .analysis-item.success i { color: var(--color-success); }
    `;
    document.head.appendChild(style);
  }

  render() {
    this.container.innerHTML = `
      <div class="checker-layout">
        <!-- 左側：手持ち6匹編成 -->
        <div class="glass-card">
          <h2 class="section-title"><i class="fa-solid fa-people-group"></i> 手持ちポケモン (6匹)</h2>
          <div class="team-grid">
            ${this.currentTeam.map((pokemon, index) => this.renderSlot(pokemon, index)).join('')}
          </div>
        </div>

        <!-- 右側：相性診断結果 -->
        <div class="diagnose-panel">
          <div class="glass-card">
            <h2 class="section-title"><i class="fa-solid fa-shield-halved"></i> 防御一貫性（タイプ弱点）</h2>
            <div class="matrix-grid" id="defense-matrix">
              <!-- JSで動的レンダリング -->
            </div>
          </div>

          <div class="glass-card">
            <h2 class="section-title"><i class="fa-solid fa-wand-magic-sparkles"></i> 攻撃一貫性（技範囲）</h2>
            <div class="matrix-grid" id="attack-matrix">
              <!-- JSで動的レンダリング -->
            </div>
          </div>

          <div class="glass-card">
            <h2 class="section-title"><i class="fa-solid fa-chart-pie"></i> チーム総合評価</h2>
            <div class="analysis-section">
              <div class="analysis-title"><i class="fa-solid fa-circle-info"></i> タイプバランスの穴</div>
              <div id="defense-analysis-list"></div>
            </div>
            <div class="analysis-section" style="margin-top: 15px;">
              <div class="analysis-title"><i class="fa-solid fa-bullseye"></i> 攻撃範囲の評価</div>
              <div id="attack-analysis-list"></div>
            </div>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
    this.calculateDiagnostics();
  }

  renderSlot(pokemon, index) {
    const hasPokemon = pokemon !== null;
    const dbPokemon = hasPokemon ? this.pokemonDb.find(p => p.name === pokemon.name) : null;
    
    // サジェスト表示のため、現在選択中の以外のDB内の全ポケモン名を取得
    const allNames = this.pokemonDb.map(p => p.name);

    if (!hasPokemon) {
      return `
        <div class="pokemon-slot" data-index="${index}">
          <div class="slot-header">
            <span class="slot-number">Slot ${index + 1}</span>
          </div>
          <div class="slot-body">
            <div class="suggestion-container">
              <input type="text" class="slot-search-input" placeholder="ポケモンの名前を入力..." data-index="${index}">
              <div class="suggestions-list" id="suggestions-${index}" style="display:none;"></div>
            </div>
          </div>
        </div>
      `;
    }

    let typeBadges = '';
    if (dbPokemon) {
      const types = Array.isArray(dbPokemon.types) ? dbPokemon.types : [dbPokemon.types];
      typeBadges = types.map(t => `<span class="badge-type ${t}" style="font-size:9px; padding:2px 6px;">${TYPE_NAMES_JA[t] || t}</span>`).join(' ');
    }
    
    // 画像URLの生成（PokeAPIのIDに基づく）。もしIDがなければモンスタボール画像やフォールバック
    const spriteUrl = dbPokemon && dbPokemon.id
      ? `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${dbPokemon.id}.png`
      : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png';

    // 技のプルダウンリストの構築
    const availableMoves = dbPokemon ? dbPokemon.moves : [];
    const selectedMoves = pokemon.moves || [];

    return `
      <div class="pokemon-slot has-pokemon" data-index="${index}">
        <div class="slot-header">
          <span class="slot-number">Slot ${index + 1}</span>
          <button class="btn-clear-slot" data-index="${index}"><i class="fa-solid fa-xmark"></i> 解除</button>
        </div>
        <div class="slot-body">
          <div class="pokemon-info-mini">
            <div class="pokemon-sprite-container">
              <img src="${spriteUrl}" alt="${pokemon.name}" onerror="this.src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png'">
            </div>
            <div class="pokemon-desc-mini">
              <div class="pokemon-desc-name">${pokemon.name}</div>
              <div style="margin-top: 4px;">${typeBadges}</div>
            </div>
          </div>
          
          <div class="form-group" style="margin-bottom: 5px;">
            <select class="slot-role-select" data-index="${index}" style="padding: 6px 10px; font-size:12px;">
              <option value="物理アタッカー" ${pokemon.role === '物理アタッカー' ? 'selected' : ''}>物理アタッカー</option>
              <option value="特殊アタッカー" ${pokemon.role === '特殊アタッカー' ? 'selected' : ''}>特殊アタッカー</option>
              <option value="物理ディフェンダー" ${pokemon.role === '物理ディフェンダー' ? 'selected' : ''}>物理ディフェンダー</option>
              <option value="特殊ディフェンダー" ${pokemon.role === '特殊ディフェンダー' ? 'selected' : ''}>特殊ディフェンダー</option>
              <option value="両受け・起点作成など" ${pokemon.role === '両受け・起点作成など' ? 'selected' : ''}>両受け・起点作成など</option>
            </select>
          </div>

          <div class="move-selects">
            ${Array(4).fill(0).map((_, moveIdx) => {
              const currentMove = selectedMoves[moveIdx] || '';
              return `
                <select class="slot-move-select" data-index="${index}" data-move-idx="${moveIdx}">
                  <option value="">技なし</option>
                  ${availableMoves.map(mv => `
                    <option value="${mv}" ${currentMove === mv ? 'selected' : ''}>${mv}</option>
                  `).join('')}
                  ${currentMove && !availableMoves.includes(currentMove) ? `<option value="${currentMove}" selected>${currentMove}</option>` : ''}
                </select>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  bindEvents() {
    // 1. スロット検索サジェスト
    const searchInputs = this.container.querySelectorAll('.slot-search-input');
    searchInputs.forEach(input => {
      const idx = parseInt(input.getAttribute('data-index'));
      const listDiv = document.getElementById(`suggestions-${idx}`);
      
      input.addEventListener('focus', () => this.showSuggestions(input, listDiv, idx));
      input.addEventListener('input', () => this.showSuggestions(input, listDiv, idx));
      
      // フォーカスアウト時の遅延非表示（クリックイベントが間に合うように）
      input.addEventListener('blur', () => {
        setTimeout(() => {
          listDiv.style.display = 'none';
        }, 200);
      });
    });

    // 2. 解除ボタン
    const clearBtns = this.container.querySelectorAll('.btn-clear-slot');
    clearBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const idx = parseInt(btn.getAttribute('data-index'));
        this.currentTeam[idx] = null;
        this.updateTeamAndSave();
      });
    });

    // 3. 役割（型）変更
    const roleSelects = this.container.querySelectorAll('.slot-role-select');
    roleSelects.forEach(select => {
      select.addEventListener('change', (e) => {
        const idx = parseInt(select.getAttribute('data-index'));
        if (this.currentTeam[idx]) {
          this.currentTeam[idx].role = e.target.value;
          this.updateTeamAndSave();
        }
      });
    });

    // 4. 技変更
    const moveSelects = this.container.querySelectorAll('.slot-move-select');
    moveSelects.forEach(select => {
      select.addEventListener('change', (e) => {
        const idx = parseInt(select.getAttribute('data-index'));
        const moveIdx = parseInt(select.getAttribute('data-move-idx'));
        if (this.currentTeam[idx]) {
          if (!this.currentTeam[idx].moves) this.currentTeam[idx].moves = Array(4).fill('');
          this.currentTeam[idx].moves[moveIdx] = e.target.value;
          this.updateTeamAndSave();
        }
      });
    });
  }

  showSuggestions(input, listDiv, idx) {
    const val = input.value.trim().toLowerCase();
    
    // DB内の登録ポケモンかつ、現在チームにまだ選ばれていないポケモンを候補にする
    const chosenNames = this.currentTeam.filter(Boolean).map(p => p.name);
    const candidates = this.pokemonDb.filter(p => {
      const isNotChosen = !chosenNames.includes(p.name);
      const isMatched = !val || p.name.toLowerCase().includes(val);
      return isNotChosen && isMatched;
    });

    if (candidates.length === 0) {
      listDiv.style.display = 'none';
      return;
    }

    listDiv.innerHTML = candidates.map(p => `
      <div class="suggestion-item" data-name="${p.name}">
        <span>${p.name}</span>
        <div>
          ${p.types.map(t => `<span class="badge-type ${t}" style="font-size:9px; padding:1px 4px; scale:0.9;">${TYPE_NAMES_JA[t] || t}</span>`).join('')}
        </div>
      </div>
    `).join('');
    
    listDiv.style.display = 'block';

    // アイテムクリックイベントのバインド
    const items = listDiv.querySelectorAll('.suggestion-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const name = item.getAttribute('data-name');
        const dbPoke = this.pokemonDb.find(p => p.name === name);
        
        // チームに登録
        this.currentTeam[idx] = {
          name: name,
          role: dbPoke ? dbPoke.role : '物理アタッカー',
          // デフォルトで最初の4つの技をセット
          moves: dbPoke ? dbPoke.moves.slice(0, 4) : []
        };
        
        this.updateTeamAndSave();
      });
    });
  }

  updateTeamAndSave() {
    saveCurrentTeam(this.currentTeam);
    this.render();
    if (this.onTeamChange) this.onTeamChange();
  }

  /**
   * タイプ相性の各種診断・分析ロジック
   */
  calculateDiagnostics() {
    const activeTeam = this.currentTeam.filter(Boolean);
    if (activeTeam.length === 0) {
      this.renderEmptyDiagnostics();
      return;
    }

    const types = Object.keys(TYPE_CHART);
    const defenseResults = {};
    const attackResults = {};

    // 1. 防御一貫性の計算
    types.forEach(atkType => {
      defenseResults[atkType] = {
        weakCount: 0,    // 弱点 (x2)
        doubleWeakCount: 0, // 2重弱点 (x4)
        resistCount: 0,  // 半減 (x0.5 / x0.25)
        immuneCount: 0,  // 無効 (x0)
        totalFactor: 1.0 // チーム全体のダメージ期待値
      };

      activeTeam.forEach(member => {
        const dbPoke = this.pokemonDb.find(p => p.name === member.name);
        if (!dbPoke) return;

        let multiplier = 1.0;
        const dbPokeTypes = Array.isArray(dbPoke.types) ? dbPoke.types : [dbPoke.types];
        dbPokeTypes.forEach(defType => {
          const chartVal = TYPE_CHART[atkType] && TYPE_CHART[atkType][defType];
          if (chartVal !== undefined) {
            multiplier *= chartVal;
          }
        });

        if (multiplier >= 4.0) {
          defenseResults[atkType].doubleWeakCount++;
          defenseResults[atkType].weakCount++;
        } else if (multiplier >= 2.0) {
          defenseResults[atkType].weakCount++;
        } else if (multiplier === 0) {
          defenseResults[atkType].immuneCount++;
        } else if (multiplier <= 0.5) {
          defenseResults[atkType].resistCount++;
        }
      });
    });

    // 2. 攻撃一貫性（技範囲）の計算
    // チーム全員の全持ち技から「抜群を取れるタイプ」があるかを調べる
    types.forEach(defType => {
      attackResults[defType] = {
        canHitWeak: false,
        hitters: []
      };

      activeTeam.forEach(member => {
        const dbPoke = this.pokemonDb.find(p => p.name === member.name);
        const selectedMoves = member.moves || [];
        
        // 持ち技すべて、およびタイプ一致の一致技を考慮
        // ここでは、明示的に選択されている技のタイプ（またはDBの技リスト）を使用
        // 本来は技ごとのタイプが必要だが、簡易的に「ポケモンのタイプ一致技」は必ず持っていると仮定＋設定された技のタイプ
        // 技名が日本語のため、技名からタイプを推測するか、DB内の技名リストからタイプを取る
        // 技のタイプ判定は、今回は簡単にするため、ポケモンの「タイプ一致技」＋「設定された技」のタイプをDBから引っ張るか、あるいは簡易マッチング
        // ポケモンが設定されている＝一致技は常時出せると想定
        const dbPokeTypes = Array.isArray(dbPoke.types) ? dbPoke.types : [dbPoke.types];
        dbPokeTypes.forEach(pokeType => {
          const chartVal = TYPE_CHART[pokeType] && TYPE_CHART[pokeType][defType];
          if (chartVal >= 2.0) {
            attackResults[defType].canHitWeak = true;
            if (!attackResults[defType].hitters.includes(member.name)) {
              attackResults[defType].hitters.push(member.name);
            }
          }
        });
      });
    });

    // 3. レンダリング：防御一貫性
    const defenseGrid = document.getElementById('defense-matrix');
    defenseGrid.innerHTML = types.map(t => {
      const res = defenseResults[t];
      let valText = '等倍';
      let scoreClass = 'neutral';
      
      // 表示テキスト・スタイルの決定
      if (res.weakCount > 0) {
        valText = `${res.weakCount}弱`;
        scoreClass = 'weak';
        if (res.doubleWeakCount > 0) {
          valText += '(4倍有)';
        }
      } else if (res.immuneCount > 0) {
        valText = '無効';
        scoreClass = 'resist';
      } else if (res.resistCount > 0) {
        valText = `${res.resistCount}耐`;
        scoreClass = 'resist';
      }

      return `
        <div class="matrix-cell">
          <span class="badge-type ${t}" style="font-size:10px; width:100%; text-align:center;">${TYPE_NAMES_JA[t] || t}</span>
          <span class="matrix-cell-val ${scoreClass}">${valText}</span>
        </div>
      `;
    }).join('');

    // 4. レンダリング：攻撃一貫性
    const attackGrid = document.getElementById('attack-matrix');
    attackGrid.innerHTML = types.map(t => {
      const res = attackResults[t];
      const valText = res.canHitWeak ? '抜群可' : '抜群無';
      const scoreClass = res.canHitWeak ? 'resist' : 'weak';

      return `
        <div class="matrix-cell">
          <span class="badge-type ${t}" style="font-size:10px; width:100%; text-align:center;">${TYPE_NAMES_JA[t] || t}</span>
          <span class="matrix-cell-val ${scoreClass}">${valText}</span>
        </div>
      `;
    }).join('');

    // 5. 分析リストの作成
    this.renderAnalysis(defenseResults, attackResults);
  }

  renderAnalysis(defenseResults, attackResults) {
    const activeTeam = this.currentTeam.filter(Boolean);
    const defContainer = document.getElementById('defense-analysis-list');
    const atkContainer = document.getElementById('attack-analysis-list');
    
    // 防御分析
    const badDefenseTypes = [];
    const excellentDefenseTypes = [];
    
    Object.entries(defenseResults).forEach(([type, res]) => {
      if (res.weakCount >= 3) {
        badDefenseTypes.push(type);
      } else if (res.weakCount === 0 && (res.resistCount + res.immuneCount >= 3)) {
        excellentDefenseTypes.push(type);
      }
    });

    let defHtml = '';
    if (badDefenseTypes.length > 0) {
      defHtml += badDefenseTypes.map(t => `
        <div class="analysis-item warning">
          <i class="fa-solid fa-triangle-exclamation"></i>
          <span><strong>${TYPE_NAMES_JA[t]}弱点の一貫</strong>: チーム内にこのタイプが弱点となるポケモンが ${defenseResults[t].weakCount} 匹います。受け出しが困難です。</span>
        </div>
      `).join('');
    }
    if (excellentDefenseTypes.length > 0) {
      defHtml += `
        <div class="analysis-item success" style="margin-top:10px;">
          <i class="fa-solid fa-circle-check"></i>
          <span><strong>優秀な耐性</strong>: ${excellentDefenseTypes.map(t => TYPE_NAMES_JA[t]).join(', ')}タイプに対してチーム全体で3匹以上の耐性を確保しています。受けサイクルを回しやすいです。</span>
        </div>
      `;
    }
    if (defHtml === '') {
      defHtml = '<p style="font-size:13px; color:var(--text-muted);">一貫している致命的な弱点はありません。良好な耐性バランスです。</p>';
    }
    defContainer.innerHTML = defHtml;

    // 攻撃分析
    const noHitTypes = [];
    Object.entries(attackResults).forEach(([type, res]) => {
      if (!res.canHitWeak) {
        noHitTypes.push(type);
      }
    });

    let atkHtml = '';
    if (noHitTypes.length > 0) {
      atkHtml = `
        <div class="analysis-item warning">
          <i class="fa-solid fa-circle-xmark"></i>
          <span><strong>打点不足</strong>: チーム内に ${noHitTypes.map(t => TYPE_NAMES_JA[t]).join(', ')}タイプの弱点を突ける（効果抜群を取れる）ポケモンがいません。これらのタイプのディフェンダーを突破するのに苦労する可能性があります。</span>
        </div>
      `;
    } else {
      atkHtml = `
        <div class="analysis-item success">
          <i class="fa-solid fa-circle-check"></i>
          <span><strong>広範囲カバー</strong>: 全てのタイプの弱点を突く手段（攻撃の抜群範囲）をチーム内で網羅しています！</span>
        </div>
      `;
    }
    atkContainer.innerHTML = atkHtml;
  }

  renderEmptyDiagnostics() {
    const types = Object.keys(TYPE_CHART);
    const emptyGridHtml = types.map(t => `
      <div class="matrix-cell">
        <span class="badge-type ${t}" style="font-size:10px; width:100%; text-align:center;">${TYPE_NAMES_JA[t] || t}</span>
        <span class="matrix-cell-val neutral">-</span>
      </div>
    `).join('');

    document.getElementById('defense-matrix').innerHTML = emptyGridHtml;
    document.getElementById('attack-matrix').innerHTML = emptyGridHtml;
    document.getElementById('defense-analysis-list').innerHTML = '<p style="font-size:13px; color:var(--text-muted);">チームにポケモンを登録すると、自動で弱点の診断が行われます。</p>';
    document.getElementById('attack-analysis-list').innerHTML = '<p style="font-size:13px; color:var(--text-muted);">チームにポケモンを登録すると、自動で攻撃範囲の診断が行われます。</p>';
  }
}
