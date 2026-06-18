import { getPokemonDatabase, getCurrentTeam, getVirtualEnemies, saveVirtualEnemies } from '../storage.js';
import { TYPE_CHART, TYPE_NAMES_JA } from '../data/initial-pokemon.js';

export class Simulator {
  constructor(containerId, onSimulatorChangeCallback) {
    this.container = document.getElementById(containerId);
    this.onSimulatorChange = onSimulatorChangeCallback;
    this.pokemonDb = [];
    this.currentTeam = [];
    this.virtualEnemies = [];
    
    this.injectStyles();
  }

  init() {
    this.pokemonDb = getPokemonDatabase();
    this.currentTeam = getCurrentTeam();
    this.virtualEnemies = getVirtualEnemies();
    this.render();
  }

  updateData() {
    this.pokemonDb = getPokemonDatabase();
    this.currentTeam = getCurrentTeam();
    this.virtualEnemies = getVirtualEnemies();
    this.render();
  }

  injectStyles() {
    if (document.getElementById('simulator-styles')) return;
    const style = document.createElement('style');
    style.id = 'simulator-styles';
    style.textContent = `
      .sim-layout {
        display: grid;
        grid-template-columns: 1fr 400px;
        gap: 20px;
      }
      @media (max-width: 1024px) {
        .sim-layout {
          grid-template-columns: 1fr;
        }
      }
      .enemy-list-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        margin-top: 15px;
      }
      @media (max-width: 650px) {
        .enemy-list-grid {
          grid-template-columns: 1fr;
        }
      }
      .enemy-card {
        background: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--border-color);
        border-radius: var(--radius-md);
        padding: 15px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        transition: all 0.3s ease;
      }
      .enemy-card.threat-high {
        border-left: 5px solid var(--color-danger);
        background: rgba(244, 63, 94, 0.03);
      }
      .enemy-card.threat-medium {
        border-left: 5px solid var(--color-warning);
        background: rgba(245, 158, 11, 0.03);
      }
      .enemy-card.threat-low {
        border-left: 5px solid var(--color-success);
        background: rgba(16, 185, 129, 0.03);
      }
      .threat-badge {
        font-size: 11px;
        font-weight: 800;
        padding: 2px 8px;
        border-radius: 20px;
        float: right;
      }
      .threat-badge.danger { background: rgba(244, 63, 94, 0.15); color: var(--color-danger); }
      .threat-badge.warning { background: rgba(245, 158, 11, 0.15); color: var(--color-warning); }
      .threat-badge.success { background: rgba(16, 185, 129, 0.15); color: var(--color-success); }
      
      .hitter-badge-list {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        margin-top: 5px;
      }
      .hitter-badge {
        font-size: 11px;
        background: rgba(255,255,255,0.06);
        padding: 2px 6px;
        border-radius: 4px;
        border: 1px solid var(--border-color);
      }
      .hitter-badge.counter {
        background: rgba(16, 185, 129, 0.1);
        border-color: rgba(16, 185, 129, 0.2);
        color: var(--color-success);
      }
      .hitter-badge.weak {
        background: rgba(244, 63, 94, 0.1);
        border-color: rgba(244, 63, 94, 0.2);
        color: var(--color-danger);
      }

      /* 提案パネル */
      .advice-panel {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }
      .advice-card {
        background: rgba(59, 130, 246, 0.03);
        border: 1px solid rgba(59, 130, 246, 0.15);
        border-radius: var(--radius-md);
        padding: 18px;
      }
      .advice-header {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 15px;
        font-weight: 700;
        margin-bottom: 12px;
        color: var(--accent-blue);
      }
      .advice-item {
        background: rgba(0,0,0,0.2);
        border-radius: var(--radius-sm);
        padding: 12px;
        margin-bottom: 10px;
        border: 1px solid var(--border-color);
      }
      .suggestion-flow {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 10px;
        font-weight: 600;
      }
      .flow-arrow {
        color: var(--accent-blue);
        animation: pulse 1.5s infinite;
      }
      @keyframes pulse {
        0% { transform: scale(1); opacity: 0.5; }
        50% { transform: scale(1.2); opacity: 1; }
        100% { transform: scale(1); opacity: 0.5; }
      }
      
      /* 仮想敵編集フォーム */
      .add-enemy-btn-container {
        display: flex;
        justify-content: flex-end;
        margin-top: 15px;
      }
    `;
    document.head.appendChild(style);
  }

  render() {
    const activeTeam = this.currentTeam.filter(Boolean);
    
    if (activeTeam.length === 0) {
      this.container.innerHTML = `
        <div class="glass-card" style="text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <i class="fa-solid fa-people-group fa-3x" style="margin-bottom: 15px; color: var(--accent-blue);"></i>
          <h3>チームが空です</h3>
          <p style="margin-top: 10px; font-size:14px;">「チーム診断」タブから、手持ちのポケモンを登録してシミュレートを開始してください。</p>
        </div>
      `;
      return;
    }

    // 各仮想敵に対する脅威度を計算
    const evaluatedEnemies = this.virtualEnemies.map(enemy => this.evaluateThreat(enemy, activeTeam));

    // 脅威度順にソート (Danger > Warning > Success)
    evaluatedEnemies.sort((a, b) => b.score - a.score);

    // 補完提案の算出
    const recommendations = this.calculateRecommendations(activeTeam, evaluatedEnemies);

    this.container.innerHTML = `
      <div class="sim-layout">
        <!-- 左側：仮想敵との対面シミュレーション結果 -->
        <div class="glass-card">
          <h2 class="section-title">
            <i class="fa-solid fa-bolt"></i> 仮想敵シミュレート結果 
            <span style="font-size:12px; font-weight:400; color:var(--text-muted); margin-left:10px;">(レギュレーションM-B想定)</span>
          </h2>
          
          <p style="font-size:13px; color:var(--text-secondary); margin-bottom: 15px;">
            手持ちの相性と型（物理/特殊、アタッカー/ディフェンダー）から、主要な仮想敵への勝率（対面性能）を自動判定しています。
          </p>

          <div class="enemy-list-grid">
            ${evaluatedEnemies.map(e => this.renderEnemyCard(e)).join('')}
          </div>
        </div>

        <!-- 右側：補完提案とアドバイス -->
        <div class="advice-panel">
          <div class="glass-card advice-card">
            <div class="advice-header">
              <i class="fa-solid fa-lightbulb"></i> チーム補完・入れ替え提案
            </div>
            <div id="recommendation-list">
              ${this.renderRecommendations(recommendations)}
            </div>
          </div>

          <!-- 仮想敵リストの追加・リセット -->
          <div class="glass-card">
            <h3 class="section-title" style="font-size: 16px;"><i class="fa-solid fa-users-gear"></i> 仮想敵リスト設定</h3>
            <p style="font-size:12px; color:var(--text-secondary); margin-bottom: 15px;">
              仮想敵の登録データを追加・初期化できます。
            </p>
            <div style="display: flex; gap: 10px;">
              <button class="btn btn-secondary" id="sim-btn-reset-enemies" style="flex:1; font-size:12px;"><i class="fa-solid fa-rotate-left"></i> 仮想敵リセット</button>
            </div>
          </div>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  renderEnemyCard(enemy) {
    let threatText = '対策完了';
    let threatClass = 'threat-low';
    let badgeClass = 'success';

    if (enemy.threatLevel === 'high') {
      threatText = '警戒度: 高 (不利)';
      threatClass = 'threat-high';
      badgeClass = 'danger';
    } else if (enemy.threatLevel === 'medium') {
      threatText = '警戒度: 中 (互角)';
      threatClass = 'threat-medium';
      badgeClass = 'warning';
    }

    const typeBadges = enemy.types.map(t => `<span class="badge-type ${t}" style="font-size:9px; padding:1px 5px;">${TYPE_NAMES_JA[t] || t}</span>`).join(' ');

    return `
      <div class="enemy-card ${threatClass}">
        <div>
          <span class="threat-badge ${badgeClass}">${threatText}</span>
          <strong style="font-size: 16px;">${enemy.name}</strong>
        </div>
        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">
          ${typeBadges} | ${enemy.role}
        </div>
        <p style="font-size:12px; color:var(--text-secondary); line-height:1.4; margin-top: 5px;">
          ${enemy.description}
        </p>
        
        <!-- 手持ち各ポケモンの対面相性 -->
        <div style="margin-top: 8px;">
          <div style="font-size:11px; font-weight:700; color:var(--text-secondary); margin-bottom:4px;">対面相性:</div>
          <div class="hitter-badge-list">
            ${enemy.matchups.map(m => {
              const statusClass = m.result === 'win' ? 'counter' : (m.result === 'lose' ? 'weak' : '');
              const resultSymbol = m.result === 'win' ? '◯' : (m.result === 'lose' ? '×' : '△');
              return `<span class="hitter-badge ${statusClass}">${m.name} (${resultSymbol})</span>`;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  }

  renderRecommendations(recs) {
    if (recs.length === 0) {
      return `<p style="font-size:13px; color:var(--text-muted);">現在のチームは仮想敵に対する対策が十分であるか、または登録されているポケモンが少なすぎます。完璧なチームです！</p>`;
    }

    return recs.map(r => `
      <div class="advice-item">
        <div class="suggestion-flow">
          <span>${r.currentPoke}</span>
          <i class="fa-solid fa-arrow-right-arrow-left flow-arrow"></i>
          <span style="color: var(--color-success);">${r.suggestedPoke}</span>
        </div>
        <p style="font-size:12px; color:var(--text-secondary); line-height:1.5; margin-top: 6px;">
          <strong>交代理由</strong>: <br>
          ${r.reason}
        </p>
      </div>
    `).join('');
  }

  bindEvents() {
    // 仮想敵リセット
    const btnResetEnemies = document.getElementById('sim-btn-reset-enemies');
    if (btnResetEnemies) {
      btnResetEnemies.addEventListener('click', () => {
        if (confirm('仮想敵リストを初期状態（レギュレーションM-B主要10匹）にリセットしますか？')) {
          this.virtualEnemies = resetVirtualEnemies();
          this.render();
          if (this.onSimulatorChange) this.onSimulatorChange();
          alert('仮想敵リストをリセットしました。');
        }
      });
    }
  }

  /**
   * 手持ち6匹と仮想敵1匹の対面診断を行う
   * @returns {Object} 診断結果、及び勝率スコア
   */
  evaluateThreat(enemy, team) {
    let winCount = 0;
    let loseCount = 0;
    let drawCount = 0;
    const matchups = [];

    team.forEach(member => {
      const dbPoke = this.pokemonDb.find(p => p.name === member.name);
      if (!dbPoke) return;

      // 対面判定アルゴリズム
      // 1. タイプ相性を算出
      // 攻撃側（手持ち） -> 防御側（仮想敵）
      let memberAtkFactor = 1.0;
      dbPoke.types.forEach(atkType => {
        enemy.types.forEach(defType => {
          const mult = TYPE_CHART[atkType] && TYPE_CHART[atkType][defType];
          if (mult !== undefined && mult > memberAtkFactor) {
            memberAtkFactor = mult; // 最大の相性を採用
          }
        });
      });

      // 攻撃側（仮想敵） -> 防御側（手持ち）
      let enemyAtkFactor = 1.0;
      enemy.types.forEach(atkType => {
        dbPoke.types.forEach(defType => {
          const mult = TYPE_CHART[atkType] && TYPE_CHART[atkType][defType];
          if (mult !== undefined) {
            // 防御側が複合タイプなら掛け算
            enemyAtkFactor *= mult;
          }
        });
      });

      // 2. 素早さと型、種族値での補正
      const memberSpeed = dbPoke.stats[5];
      const enemySpeed = enemy.stats[5];
      const memberIsAtk = member.role.includes('アタッカー');
      const enemyIsAtk = enemy.role.includes('アタッカー');

      let result = 'draw';

      // 判定基準
      if (memberAtkFactor >= 2.0 && enemyAtkFactor <= 0.5) {
        result = 'win'; // 相性圧倒的有利
      } else if (enemyAtkFactor >= 2.0 && memberAtkFactor <= 0.5) {
        result = 'lose'; // 相性圧倒的不利
      } else {
        // 相性が互角に近い場合、型と素早さで判定
        if (memberIsAtk && enemyIsAtk) {
          // アタッカー同士の対面：素早さが速く、相手の弱点（または等倍以上）を突ける方が勝ち
          if (memberSpeed > enemySpeed && memberAtkFactor >= 1.0) {
            result = 'win';
          } else if (enemySpeed > memberSpeed && enemyAtkFactor >= 1.0) {
            result = 'lose';
          }
        } else if (member.role.includes('ディフェンダー') && enemyIsAtk) {
          // ディフェンダー vs アタッカー：耐性（0.5倍以下）があれば受け勝ち
          if (enemyAtkFactor <= 0.5) {
            result = 'win';
          } else if (enemyAtkFactor >= 2.0) {
            result = 'lose';
          }
        } else if (dbPoke.role.includes('アタッカー') && enemy.role.includes('ディフェンダー')) {
          // アタッカー vs ディフェンダー：弱点を突ければアタッカー勝ち
          if (memberAtkFactor >= 2.0) {
            result = 'win';
          } else {
            result = 'draw';
          }
        }
      }

      if (result === 'win') winCount++;
      else if (result === 'lose') loseCount++;
      else drawCount++;

      matchups.push({
        name: member.name,
        result: result
      });
    });

    // 脅威度の判定スコア (winはマイナス、loseはプラス)
    // チーム全体で勝てるポケモンが少なければ脅威度「高」
    const score = (loseCount * 2) + drawCount - (winCount * 3);
    
    let threatLevel = 'low';
    if (winCount === 0 || score > 2) {
      threatLevel = 'high'; // 倒せる手持ちが0匹、または不利が多い
    } else if (winCount <= 1 || score >= 0) {
      threatLevel = 'medium'; // 倒せるのが1匹だけ、または拮抗している
    }

    return {
      ...enemy,
      matchups,
      threatLevel,
      score,
      winCount,
      loseCount
    };
  }

  /**
   * 補完のためにどのポケモンをどう入れ替えたらいいかを計算
   * @returns {Array} 提案のリスト
   */
  calculateRecommendations(team, evaluatedEnemies) {
    const dangerEnemies = evaluatedEnemies.filter(e => e.threatLevel === 'high');
    if (dangerEnemies.length === 0) return [];

    const recommendations = [];
    
    // 最も重い仮想敵（脅威度が最高の敵）を狙う
    const targetEnemy = dangerEnemies[0];

    // 手持ちの中で、この重い敵に負けている（かつ他の敵にもあまり勝てていない）戦犯ポケモンを見つける
    let weakestMember = null;
    let worstMatchupScore = -999;

    team.forEach(member => {
      // このメンバーの仮想敵全体に対する勝率を計算
      let score = 0;
      evaluatedEnemies.forEach(e => {
        const match = e.matchups.find(m => m.name === member.name);
        if (match) {
          if (match.result === 'win') score += 2;
          if (match.result === 'lose') score -= 3; // 負けは重くマイナス
        }
      });

      // このメンバーが標的とする仮想敵に負けている場合
      const targetMatch = targetEnemy.matchups.find(m => m.name === member.name);
      if (targetMatch && targetMatch.result === 'lose') {
        // 最も勝率スコアが低く、かつ標的の仮想敵に負けているポケモンを選ぶ
        if (score < worstMatchupScore || weakestMember === null) {
          worstMatchupScore = score;
          weakestMember = member;
        }
      }
    });

    if (!weakestMember) {
      // 標的の敵に直接負けているメンバーがいない（互角以下）場合、単純に最も勝率が悪いメンバーを選択
      let lowestScore = 999;
      team.forEach(member => {
        let score = 0;
        evaluatedEnemies.forEach(e => {
          const match = e.matchups.find(m => m.name === member.name);
          if (match) {
            if (match.result === 'win') score += 2;
            if (match.result === 'lose') score -= 3;
          }
        });
        if (score < lowestScore) {
          lowestScore = score;
          weakestMember = member;
        }
      });
    }

    if (!weakestMember) return [];

    // 交代枠候補をデータベース全体から検索
    // 条件：対象の仮想敵（targetEnemy）に対して相性が有利（'win' になる）ポケモン
    const candidates = [];
    this.pokemonDb.forEach(dbPoke => {
      // チームに既にいるポケモンは除外
      if (team.some(t => t.name === dbPoke.name)) return;

      // この候補の仮想敵に対する相性を評価
      const simulatedEnemyResult = this.evaluateThreat(targetEnemy, [{
        name: dbPoke.name,
        role: dbPoke.role,
        moves: dbPoke.moves
      }]);

      const targetMatch = simulatedEnemyResult.matchups[0];
      if (targetMatch && targetMatch.result === 'win') {
        // 仮想敵全体に対する勝率スコアを計算
        let overallScore = 0;
        evaluatedEnemies.forEach(e => {
          const sim = this.evaluateThreat(e, [{
            name: dbPoke.name,
            role: dbPoke.role,
            moves: dbPoke.moves
          }]);
          const m = sim.matchups[0];
          if (m) {
            if (m.result === 'win') overallScore += 2;
            if (m.result === 'lose') overallScore -= 3;
          }
        });

        candidates.push({
          pokemon: dbPoke,
          overallScore
        });
      }
    });

    // 候補を全体勝率スコア順にソート
    candidates.sort((a, b) => b.overallScore - a.overallScore);

    if (candidates.length > 0) {
      const bestCandidate = candidates[0].pokemon;
      const typeStr = bestCandidate.types.map(t => TYPE_NAMES_JA[t]).join('・');
      
      recommendations.push({
        currentPoke: weakestMember.name,
        suggestedPoke: bestCandidate.name,
        reason: `チームが現在最も苦手としている「<strong>${targetEnemy.name}</strong>」に対して、<strong>${bestCandidate.name}</strong>（${typeStr}タイプ、${bestCandidate.role}）は非常に有利な相性を持っています。<br>交代させることで、タイプ耐性を活かした受けや、有利なアタッカーとして処理ルートを確保できます。`
      });
    }

    return recommendations;
  }
}
