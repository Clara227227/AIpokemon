// タイプ相性表（攻撃側 -> 防御側）
// 2: 効果は抜群 (2.0), 1: 等倍 (1.0), 0.5: 効果は今ひとつ (0.5), 0: 効果なし (0.0)
export const TYPE_CHART = {
  normal:   { normal: 1,   fire: 1,   water: 1,   grass: 1,   electric: 1,   ice: 1,   fighting: 1,   poison: 1,   ground: 1,   flying: 1,   psychic: 1,   bug: 1,   rock: 0.5, ghost: 0,   dragon: 1,   dark: 1,   steel: 0.5, fairy: 1   },
  fire:     { normal: 1,   fire: 0.5, water: 0.5, grass: 2,   electric: 1,   ice: 2,   fighting: 1,   poison: 1,   ground: 1,   flying: 1,   psychic: 1,   bug: 2,   rock: 0.5, ghost: 1,   dragon: 0.5, dark: 1,   steel: 2,   fairy: 1   },
  water:    { normal: 1,   fire: 2,   water: 0.5, grass: 0.5, electric: 1,   ice: 1,   fighting: 1,   poison: 1,   ground: 2,   flying: 1,   psychic: 1,   bug: 1,   rock: 2,   ghost: 1,   dragon: 0.5, dark: 1,   steel: 1,   fairy: 1   },
  grass:    { normal: 1,   fire: 0.5, water: 2,   grass: 0.5, electric: 1,   ice: 1,   fighting: 1,   poison: 0.5, ground: 2,   flying: 0.5, psychic: 1,   bug: 0.5, rock: 2,   ghost: 1,   dragon: 0.5, dark: 1,   steel: 0.5, fairy: 1   },
  electric: { normal: 1,   fire: 1,   water: 2,   grass: 0.5, electric: 0.5, ice: 1,   fighting: 1,   poison: 1,   ground: 0,   flying: 2,   psychic: 1,   bug: 1,   rock: 1,   ghost: 1,   dragon: 0.5, dark: 1,   steel: 1,   fairy: 1   },
  ice:      { normal: 1,   fire: 0.5, water: 0.5, grass: 2,   electric: 1,   ice: 0.5, fighting: 1,   poison: 1,   ground: 2,   flying: 2,   psychic: 1,   bug: 1,   rock: 1,   ghost: 1,   dragon: 2,   dark: 1,   steel: 0.5, fairy: 1   },
  fighting: { normal: 2,   fire: 1,   water: 1,   grass: 1,   electric: 1,   ice: 2,   fighting: 1,   poison: 0.5, ground: 1,   flying: 0.5, psychic: 0.5, bug: 0.5, rock: 2,   ghost: 0,   dragon: 1,   dark: 2,   steel: 2,   fairy: 0.5 },
  poison:   { normal: 1,   fire: 1,   water: 1,   grass: 2,   electric: 1,   ice: 1,   fighting: 1,   poison: 0.5, ground: 0.5, flying: 1,   psychic: 1,   bug: 1,   rock: 0.5, ghost: 0.5, dragon: 1,   dark: 1,   steel: 0,   fairy: 2   },
  ground:   { normal: 1,   fire: 2,   water: 1,   grass: 0.5, electric: 2,   ice: 1,   fighting: 1,   poison: 2,   ground: 1,   flying: 0,   psychic: 1,   bug: 0.5, rock: 2,   ghost: 1,   dragon: 1,   dark: 1,   steel: 2,   fairy: 1   },
  flying:   { normal: 1,   fire: 1,   water: 1,   grass: 2,   electric: 0.5, ice: 1,   fighting: 2,   poison: 1,   ground: 1,   flying: 1,   psychic: 1,   bug: 2,   rock: 0.5, ghost: 1,   dragon: 1,   dark: 1,   steel: 0.5, fairy: 1   },
  psychic:  { normal: 1,   fire: 1,   water: 1,   grass: 1,   electric: 1,   ice: 1,   fighting: 2,   poison: 2,   ground: 1,   flying: 1,   psychic: 0.5, bug: 1,   rock: 1,   ghost: 1,   dragon: 1,   dark: 0,   steel: 0.5, fairy: 1   },
  bug:      { normal: 1,   fire: 0.5, water: 1,   grass: 2,   electric: 1,   ice: 1,   fighting: 0.5, poison: 0.5, ground: 1,   flying: 0.5, psychic: 2,   bug: 1,   rock: 1,   ghost: 0.5, dragon: 1,   dark: 2,   steel: 0.5, fairy: 0.5 },
  rock:     { normal: 1,   fire: 2,   water: 1,   grass: 1,   electric: 1,   ice: 2,   fighting: 0.5, poison: 1,   ground: 0.5, flying: 2,   psychic: 1,   bug: 2,   rock: 1,   ghost: 1,   dragon: 1,   dark: 1,   steel: 0.5, fairy: 1   },
  ghost:    { normal: 0,   fire: 1,   water: 1,   grass: 1,   electric: 1,   ice: 1,   fighting: 0,   poison: 1,   ground: 1,   flying: 1,   psychic: 2,   bug: 1,   rock: 1,   ghost: 2,   dragon: 1,   dark: 0.5, steel: 1,   fairy: 1   },
  dragon:   { normal: 1,   fire: 1,   water: 1,   grass: 1,   electric: 1,   ice: 1,   fighting: 1,   poison: 1,   ground: 1,   flying: 1,   psychic: 1,   bug: 1,   rock: 1,   ghost: 1,   dragon: 2,   dark: 1,   steel: 0.5, fairy: 0   },
  dark:     { normal: 1,   fire: 1,   water: 1,   grass: 1,   electric: 1,   ice: 1,   fighting: 0.5, poison: 1,   ground: 1,   flying: 1,   psychic: 2,   bug: 1,   rock: 1,   ghost: 2,   dragon: 1,   dark: 0.5, steel: 1,   fairy: 0.5 },
  steel:    { normal: 1,   fire: 0.5, water: 0.5, grass: 1,   electric: 0.5, ice: 2,   fighting: 1,   poison: 1,   ground: 1,   flying: 1,   psychic: 1,   bug: 1,   rock: 2,   ghost: 1,   dragon: 1,   dark: 1,   steel: 0.5, fairy: 2   },
  fairy:    { normal: 1,   fire: 0.5, water: 1,   grass: 1,   electric: 1,   ice: 1,   fighting: 2,   poison: 0.5, ground: 1,   flying: 1,   psychic: 1,   bug: 1,   rock: 1,   ghost: 1,   dragon: 2,   dark: 2,   steel: 0.5, fairy: 1   }
};

// タイプ名の日本語対応マップ
export const TYPE_NAMES_JA = {
  normal: 'ノーマル',
  fire: 'ほのお',
  water: 'みず',
  grass: 'くさ',
  electric: 'でんき',
  ice: 'こおり',
  fighting: 'かくとう',
  poison: 'どく',
  ground: 'じめん',
  flying: 'ひこう',
  psychic: 'エスパー',
  bug: 'むし',
  rock: 'いわ',
  ghost: 'ゴースト',
  dragon: 'ドラゴン',
  dark: 'あく',
  steel: 'はがね',
  fairy: 'フェアリー'
};

// 主要ポケモンの初期データベース
// 種族値配列の並び: [HP, 攻撃, 防御, 特攻, 特防, 素早さ]
export const INITIAL_POKEMON_DATABASE = [
  {
    id: 1,
    name: 'カイリュー',
    types: ['dragon', 'flying'],
    stats: [91, 134, 95, 100, 100, 80],
    moves: ['しんそく', 'げきりん', 'じしん', 'はねやすめ', 'りゅうのまい', 'つばめがえし'],
    role: '物理アタッカー',
    isMega: false
  },
  {
    id: 2,
    name: 'ハバタクカミ',
    types: ['ghost', 'fairy'],
    stats: [55, 55, 55, 135, 135, 135],
    moves: ['ムーンフォース', 'シャドーボール', 'マジカルフレイム', 'パワージェム', 'めいそう', 'でんじは'],
    role: '特殊アタッカー',
    isMega: false
  },
  {
    id: 3,
    name: 'パオジアン',
    types: ['dark', 'ice'],
    stats: [80, 120, 80, 90, 65, 135],
    moves: ['つららおとし', 'かみくだく', 'せいなるつるぎ', 'ふいうち', 'つるぎのまい', 'こおりのつぶて'],
    role: '物理アタッカー',
    isMega: false
  },
  {
    id: 4,
    name: 'サーフゴー',
    types: ['steel', 'ghost'],
    stats: [87, 60, 95, 133, 91, 84],
    moves: ['ゴールドラッシュ', 'シャドーボール', 'わるだくみ', 'じこさいせい', '１０まんボルト', 'でんじは'],
    role: '特殊アタッカー',
    isMega: false
  },
  {
    id: 5,
    name: 'ガチグマ(アカツキ)',
    types: ['ground', 'normal'],
    stats: [113, 70, 120, 135, 65, 52],
    moves: ['ブラッドムーン', 'だいちのちから', 'しんくうは', 'ハイパーボイス', 'めいそう', 'あくび'],
    role: '特殊アタッカー',
    isMega: false
  },
  {
    id: 6,
    name: 'ウーラオス(れんげき)',
    types: ['fighting', 'water'],
    stats: [100, 130, 100, 63, 60, 97],
    moves: ['すいりゅうれんだ', 'インファイト', 'アクアジェット', '冷凍パンチ', 'とんぼがえり', '剣の舞'],
    role: '物理アタッカー',
    isMega: false
  },
  {
    id: 7,
    name: 'ウーラオス(いちげき)',
    types: ['fighting', 'dark'],
    stats: [100, 130, 100, 63, 60, 97],
    moves: ['あんこくきょうだ', 'インファイト', 'ふいうち', 'アイアンヘッド', 'とんぼがえり', 'つるぎのまい'],
    role: '物理アタッカー',
    isMega: false
  },
  {
    id: 8,
    name: 'オーガポン(かまど)',
    types: ['grass', 'fire'],
    stats: [80, 120, 84, 60, 96, 110],
    moves: ['ツタこんぼう', 'ウッドホーン', 'じゃれつく', 'がんせきふうじ', 'つるぎのまい', 'パワーウィップ'],
    role: '物理アタッカー',
    isMega: false
  },
  {
    id: 9,
    name: 'オーガポン(いしずえ)',
    types: ['grass', 'rock'],
    stats: [80, 120, 84, 60, 96, 110],
    moves: ['ツタこんぼう', 'ウッドホーン', 'がんせきふうじ', 'じゃれつく', 'つるぎのまい', 'ニードルガード'],
    role: '物理アタッカー',
    isMega: false
  },
  {
    id: 10,
    name: 'ディンルー',
    types: ['dark', 'ground'],
    stats: [155, 110, 125, 55, 80, 45],
    moves: ['じしん', 'カタストロフィ', 'がんせきふうじ', 'ステルスロック', 'ふきとばし', 'しおづけ'],
    role: '物理ディフェンダー',
    isMega: false
  },
  {
    id: 11,
    name: 'ヘイラッシャ',
    types: ['water'],
    stats: [150, 100, 115, 65, 65, 35],
    moves: ['ウェーブタックル', 'じしん', 'あくび', 'まもる', 'ねむる', '地割れ'],
    role: '物理ディフェンダー',
    isMega: false
  },
  {
    id: 12,
    name: 'ブリジュラス',
    types: ['steel', 'dragon'],
    stats: [90, 105, 130, 125, 65, 85],
    moves: ['エレクトロビーム', 'りゅうせいぐん', 'ラスターカノン', 'てっぺき', 'ボディプレス', 'ステルスロック'],
    role: '物理ディフェンダー',
    isMega: false
  },
  {
    id: 13,
    name: 'キョジオーン',
    types: ['rock'],
    stats: [100, 100, 130, 45, 90, 35],
    moves: ['しおづけ', '自己再生', '鉄壁', 'ボディプレス', 'じしん', 'ステルスロック'],
    role: '物理ディフェンダー',
    isMega: false
  },
  {
    id: 14,
    name: 'ハッサム',
    types: ['bug', 'steel'],
    stats: [70, 130, 100, 55, 80, 65],
    moves: ['バレットパンチ', 'とんぼがえり', 'ダブルインカム', 'インファイト', 'つるぎのまい', 'はねやすめ'],
    role: '物理アタッカー',
    isMega: false
  },
  {
    id: 15,
    name: 'ランドロス(れいじゅう)',
    types: ['ground', 'flying'],
    stats: [89, 145, 90, 105, 80, 91],
    moves: ['じしん', 'いわなだれ', 'とんぼがえり', 'テラバースト', 'つるぎのまい', 'ステルスロック'],
    role: '物理アタッカー',
    isMega: false
  },
  {
    id: 16,
    name: 'コライドン',
    types: ['fighting', 'dragon'],
    stats: [100, 135, 115, 85, 100, 135],
    moves: ['アクセルブレイク', 'げきりん', 'フレアドライブ', 'とんぼがえり', 'つるぎのまい', 'アイアンヘッド'],
    role: '物理アタッカー',
    isMega: false
  },
  {
    id: 17,
    name: 'ミライドン',
    types: ['electric', 'dragon'],
    stats: [100, 85, 100, 135, 115, 135],
    moves: ['イナズマドライブ', 'りゅうせいぐん', 'マジカルシャイン', 'ボルトチェンジ', 'めいそう', 'オーバーヒート'],
    role: '特殊アタッカー',
    isMega: false
  },
  {
    id: 18,
    name: 'メガリザードンY',
    types: ['fire', 'flying'],
    stats: [78, 104, 78, 159, 115, 100],
    moves: ['オーバーヒート', 'かえんほうしゃ', 'ソーラービーム', 'エアスラッシュ', 'はねやすめ', 'りゅうのまい'],
    role: '特殊アタッカー',
    isMega: true
  },
  {
    id: 19,
    name: 'メガリザードンX',
    types: ['fire', 'dragon'],
    stats: [78, 130, 111, 130, 85, 100],
    moves: ['フレアドライブ', 'げきりん', 'じしん', 'かわらわり', 'りゅうのまい', 'はねやすめ'],
    role: '物理アタッカー',
    isMega: true
  },
  {
    id: 20,
    name: 'メガゲンガー',
    types: ['ghost', 'poison'],
    stats: [60, 65, 80, 170, 95, 130],
    moves: ['シャドーボール', 'ヘドロばくだん', 'マジカルシャイン', 'きあいだま', 'みちづれ', 'わるだくみ'],
    role: '特殊アタッカー',
    isMega: true
  },
  {
    id: 21,
    name: 'メガガルーラ',
    types: ['normal'],
    stats: [105, 125, 100, 60, 100, 100],
    moves: ['おんがえし', 'じしん', 'グロウパンチ', 'ふいうち', 'ねこだまし', 'いわなだれ'],
    role: '物理アタッカー',
    isMega: true
  },
  {
    id: 22,
    name: 'ポリゴン２',
    types: ['normal'],
    stats: [85, 80, 90, 105, 95, 60],
    moves: ['トライアタック', '冷凍ビーム', '放電', '自己再生', 'トリックルーム', '電磁波'],
    role: '特殊ディフェンダー',
    isMega: false
  },
  {
    id: 23,
    name: 'ドヒドイデ',
    types: ['poison', 'water'],
    stats: [50, 63, 152, 53, 142, 35],
    moves: ['どくどく', 'じこさいせい', 'トーチカ', 'ねっとう', 'まとわりつく', 'くろいきり'],
    role: '物理ディフェンダー',
    isMega: false
  },
  {
    id: 24,
    name: 'アシレーヌ',
    types: ['water', 'fairy'],
    stats: [80, 74, 74, 126, 116, 60],
    moves: ['うたかたのアリア', 'ムーンフォース', 'サイコキネシス', 'れいとうビーム', 'アクアジェット', 'めいそう'],
    role: '特殊アタッカー',
    isMega: false
  },
  {
    id: 25,
    name: 'ドラパルト',
    types: ['dragon', 'ghost'],
    stats: [88, 120, 75, 100, 75, 142],
    moves: ['ドラゴンアロー', 'ゴーストダイブ', 'ふいうち', 'りゅうせいぐん', 'とんぼがえり', 'おにび'],
    role: '物理アタッカー',
    isMega: false
  }
];

// 初期仮想敵リスト（レギュレーションM-B想定の強力な仮想敵）
export const INITIAL_VIRTUAL_ENEMIES = [
  {
    name: 'コライドン',
    types: ['fighting', 'dragon'],
    stats: [100, 135, 115, 85, 100, 135],
    role: '物理アタッカー',
    mainMoves: ['アクセルブレイク', 'げきりん', 'フレアドライブ'],
    description: '特性ひひいろのこどうによる晴れ状態からの圧倒的な物理火力。高速高耐久。'
  },
  {
    name: 'ミライドン',
    types: ['electric', 'dragon'],
    stats: [100, 85, 100, 135, 115, 135],
    role: '特殊アタッカー',
    mainMoves: ['イナズマドライブ', 'りゅうせいぐん', 'ボルトチェンジ'],
    description: '特性ハドロンエンジンによるエレキフィールドからの電気技が超強力。対策必須の特殊エース。'
  },
  {
    name: 'カイリュー',
    types: ['dragon', 'flying'],
    stats: [91, 134, 95, 100, 100, 80],
    role: '物理アタッカー',
    mainMoves: ['しんそく', 'じしん', 'げきりん'],
    description: 'マルチスケイルによる高耐久と、りゅうのまい＋しんそくの全抜き性能。'
  },
  {
    name: 'ハバタクカミ',
    types: ['ghost', 'fairy'],
    stats: [55, 55, 55, 135, 135, 135],
    role: '特殊アタッカー',
    mainMoves: ['ムーンフォース', 'シャドーボール', 'でんじは'],
    description: '最上位の素早さと特攻。ゴースト＋フェアリーの一貫性が非常に高い。'
  },
  {
    name: 'パオジアン',
    types: ['dark', 'ice'],
    stats: [80, 120, 80, 90, 65, 135],
    role: '物理アタッカー',
    mainMoves: ['つららおとし', 'かみくだく', 'せいなるつるぎ'],
    description: '特性わざわいのつるぎにより実質的な物理防御を低下させて超高速から叩き込んでくる。'
  },
  {
    name: 'ガチグマ(アカツキ)',
    types: ['ground', 'normal'],
    stats: [113, 70, 120, 135, 65, 52],
    role: '特殊アタッカー',
    mainMoves: ['ブラッドムーン', 'だいちのちから', 'しんくうは'],
    description: 'ブラッドムーンの超高火力。高い物理耐久とノーマル＋地面の相性補完。'
  },
  {
    name: 'サーフゴー',
    types: ['steel', 'ghost'],
    stats: [87, 60, 95, 133, 91, 84],
    role: '特殊アタッカー',
    mainMoves: ['ゴールドラッシュ', 'シャドーボール', 'わるだくみ'],
    description: '特性おうごんのからだで変化技をシャットアウト。耐性が優秀。'
  },
  {
    name: 'メガリザードンY',
    types: ['fire', 'flying'],
    stats: [78, 104, 78, 159, 115, 100],
    role: '特殊アタッカー',
    mainMoves: ['オーバーヒート', 'ソーラービーム', 'エアスラッシュ'],
    description: '晴れ状態を自ら展開し、炎技が超火力。水タイプもソーラービームで返り討ちにする。'
  },
  {
    name: 'メガガルーラ',
    types: ['normal'],
    stats: [105, 125, 100, 60, 100, 100],
    role: '物理アタッカー',
    mainMoves: ['おんがえし', 'グロウパンチ', 'ふいうち'],
    description: 'おやこあいによる連続攻撃。グロウパンチで攻撃を上げつつ攻撃してくる。'
  },
  {
    name: 'ブリジュラス',
    types: ['steel', 'dragon'],
    stats: [90, 105, 130, 125, 65, 85],
    role: '物理ディフェンダー',
    mainMoves: ['エレクトロビーム', 'りゅうせいぐん', 'ボディプレス'],
    description: 'じきゅうりょくによる防御上昇からのボディプレス。雨環境で即座に撃てるエレクトロビーム。'
  }
];
