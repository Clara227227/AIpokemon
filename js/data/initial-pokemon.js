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

export const TYPE_NAMES_JA = {
  normal: 'ノーマル', fire: 'ほのお', water: 'みず', grass: 'くさ', electric: 'でんき',
  ice: 'こおり', fighting: 'かくとう', poison: 'どく', ground: 'じめん', flying: 'ひこう',
  psychic: 'エスパー', bug: 'むし', rock: 'いわ', ghost: 'ゴースト', dragon: 'ドラゴン',
  dark: 'あく', steel: 'はがね', fairy: 'フェアリー'
};


export const INITIAL_POKEMON_DATABASE = [
    {
        "id":  3,
        "name":  "フシギバナ",
        "types":  [
                      "grass",
                      "poison"
                  ],
        "stats":  [
                      80,
                      82,
                      83,
                      100,
                      100,
                      80
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "しめつける",
                      "つるのムチ"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  6,
        "name":  "リザードン",
        "types":  [
                      "fire",
                      "flying"
                  ],
        "stats":  [
                      78,
                      84,
                      78,
                      109,
                      85,
                      100
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "かみなりパンチ",
                      "ひっかく"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  9,
        "name":  "カメックス",
        "types":  "water",
        "stats":  [
                      79,
                      83,
                      100,
                      85,
                      105,
                      78
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "れいとうパンチ",
                      "メガトンキック",
                      "ずつき"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  15,
        "name":  "スピアー",
        "types":  [
                      "bug",
                      "poison"
                  ],
        "stats":  [
                      65,
                      90,
                      40,
                      45,
                      80,
                      75
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "ずつき",
                      "みだれづき"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  18,
        "name":  "ピジョット",
        "types":  [
                      "normal",
                      "flying"
                  ],
        "stats":  [
                      83,
                      80,
                      75,
                      70,
                      70,
                      101
                  ],
        "moves":  [
                      "かまいたち",
                      "かぜおこし",
                      "つばさでうつ",
                      "ふきとばし"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  24,
        "name":  "アーボック",
        "types":  "poison",
        "stats":  [
                      60,
                      95,
                      69,
                      65,
                      79,
                      80
                  ],
        "moves":  [
                      "しめつける",
                      "たたきつける",
                      "ずつき",
                      "のしかかり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  25,
        "name":  "ピカチュウ",
        "types":  "electric",
        "stats":  [
                      35,
                      55,
                      40,
                      50,
                      50,
                      90
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ネコにこばん",
                      "かみなりパンチ",
                      "たたきつける"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  26,
        "name":  "ライチュウ",
        "types":  "electric",
        "stats":  [
                      60,
                      90,
                      55,
                      90,
                      80,
                      110
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ネコにこばん",
                      "かみなりパンチ",
                      "たたきつける"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  10100,
        "name":  "ライチュウ(アローラ)",
        "types":  [
                      "electric",
                      "psychic"
                  ],
        "stats":  [
                      60,
                      85,
                      50,
                      95,
                      85,
                      110
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ネコにこばん",
                      "かみなりパンチ",
                      "たたきつける"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  36,
        "name":  "ピクシー",
        "types":  "fairy",
        "stats":  [
                      95,
                      70,
                      73,
                      95,
                      90,
                      60
                  ],
        "moves":  [
                      "はたく",
                      "おうふくビンタ",
                      "メガトンパンチ",
                      "ほのおのパンチ"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  38,
        "name":  "キュウコン",
        "types":  "fire",
        "stats":  [
                      73,
                      76,
                      75,
                      81,
                      100,
                      100
                  ],
        "moves":  [
                      "ずつき",
                      "たいあたり",
                      "のしかかり",
                      "とっしん"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  10104,
        "name":  "キュウコン(アローラ)",
        "types":  [
                      "ice",
                      "fairy"
                  ],
        "stats":  [
                      73,
                      67,
                      75,
                      81,
                      100,
                      109
                  ],
        "moves":  [
                      "ずつき",
                      "たいあたり",
                      "のしかかり",
                      "とっしん"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  45,
        "name":  "ラフレシア",
        "types":  [
                      "grass",
                      "poison"
                  ],
        "stats":  [
                      75,
                      80,
                      85,
                      110,
                      90,
                      50
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "ずつき",
                      "のしかかり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  59,
        "name":  "ウインディ",
        "types":  "fire",
        "stats":  [
                      90,
                      110,
                      80,
                      100,
                      80,
                      95
                  ],
        "moves":  [
                      "ずつき",
                      "のしかかり",
                      "とっしん",
                      "すてみタックル"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  10230,
        "name":  "ウインディ(ヒスイ)",
        "types":  [
                      "fire",
                      "rock"
                  ],
        "stats":  [
                      95,
                      115,
                      80,
                      95,
                      80,
                      90
                  ],
        "moves":  [
                      "たいあたり",
                      "のしかかり",
                      "とっしん",
                      "すてみタックル"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  65,
        "name":  "フーディン",
        "types":  "psychic",
        "stats":  [
                      55,
                      50,
                      45,
                      135,
                      95,
                      120
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  68,
        "name":  "カイリキー",
        "types":  "fighting",
        "stats":  [
                      90,
                      130,
                      80,
                      65,
                      85,
                      55
                  ],
        "moves":  [
                      "からてチョップ",
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  71,
        "name":  "ウツボット",
        "types":  [
                      "grass",
                      "poison"
                  ],
        "stats":  [
                      80,
                      105,
                      65,
                      100,
                      70,
                      70
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "しめつける",
                      "たたきつける"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  80,
        "name":  "ヤドラン",
        "types":  [
                      "water",
                      "psychic"
                  ],
        "stats":  [
                      95,
                      75,
                      110,
                      100,
                      80,
                      30
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ネコにこばん",
                      "れいとうパンチ",
                      "ふみつけ"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  10165,
        "name":  "ヤドラン(ガラル)",
        "types":  [
                      "poison",
                      "psychic"
                  ],
        "stats":  [
                      95,
                      100,
                      95,
                      100,
                      70,
                      30
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ネコにこばん",
                      "れいとうパンチ",
                      "メガトンキック"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  94,
        "name":  "ゲンガー",
        "types":  [
                      "ghost",
                      "poison"
                  ],
        "stats":  [
                      60,
                      65,
                      60,
                      130,
                      75,
                      110
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  115,
        "name":  "ガルーラ",
        "types":  "normal",
        "stats":  [
                      105,
                      95,
                      80,
                      40,
                      80,
                      90
                  ],
        "moves":  [
                      "はたく",
                      "れんぞくパンチ",
                      "メガトンパンチ",
                      "ほのおのパンチ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  121,
        "name":  "スターミー",
        "types":  [
                      "water",
                      "psychic"
                  ],
        "stats":  [
                      60,
                      75,
                      85,
                      100,
                      85,
                      115
                  ],
        "moves":  [
                      "ずつき",
                      "たいあたり",
                      "とっしん",
                      "すてみタックル"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  127,
        "name":  "カイロス",
        "types":  "bug",
        "stats":  [
                      65,
                      125,
                      100,
                      55,
                      70,
                      85
                  ],
        "moves":  [
                      "はさむ",
                      "ハサミギロチン",
                      "つるぎのまい",
                      "いあいぎり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  128,
        "name":  "ケンタロス",
        "types":  "normal",
        "stats":  [
                      75,
                      100,
                      95,
                      40,
                      70,
                      110
                  ],
        "moves":  [
                      "ふみつけ",
                      "ずつき",
                      "つのでつく",
                      "つのドリル"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  10250,
        "name":  "ケンタロス(パルデア)",
        "types":  "fighting",
        "stats":  [
                      75,
                      110,
                      105,
                      30,
                      70,
                      100
                  ],
        "moves":  [
                      "にどげり",
                      "ずつき",
                      "たいあたり",
                      "のしかかり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  10251,
        "name":  "ケンタロス(パルデア・ほのお)",
        "types":  [
                      "fighting",
                      "fire"
                  ],
        "stats":  [
                      75,
                      110,
                      105,
                      30,
                      70,
                      100
                  ],
        "moves":  [
                      "にどげり",
                      "ずつき",
                      "たいあたり",
                      "のしかかり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  10252,
        "name":  "ケンタロス(パルデア・みず)",
        "types":  [
                      "fighting",
                      "water"
                  ],
        "stats":  [
                      75,
                      110,
                      105,
                      30,
                      70,
                      100
                  ],
        "moves":  [
                      "にどげり",
                      "ずつき",
                      "たいあたり",
                      "のしかかり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  130,
        "name":  "ギャラドス",
        "types":  [
                      "water",
                      "flying"
                  ],
        "stats":  [
                      95,
                      125,
                      79,
                      60,
                      100,
                      81
                  ],
        "moves":  [
                      "しめつける",
                      "ずつき",
                      "たいあたり",
                      "のしかかり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  132,
        "name":  "メタモン",
        "types":  "normal",
        "stats":  [
                      48,
                      48,
                      48,
                      48,
                      48,
                      48
                  ],
        "moves":  [
                      "へんしん"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  134,
        "name":  "シャワーズ",
        "types":  "water",
        "stats":  [
                      130,
                      65,
                      60,
                      110,
                      95,
                      65
                  ],
        "moves":  [
                      "ネコにこばん",
                      "にどげり",
                      "すなかけ",
                      "ずつき"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  135,
        "name":  "サンダース",
        "types":  "electric",
        "stats":  [
                      65,
                      65,
                      60,
                      110,
                      95,
                      130
                  ],
        "moves":  [
                      "ネコにこばん",
                      "にどげり",
                      "すなかけ",
                      "ずつき"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  136,
        "name":  "ブースター",
        "types":  "fire",
        "stats":  [
                      65,
                      130,
                      60,
                      95,
                      110,
                      65
                  ],
        "moves":  [
                      "ネコにこばん",
                      "にどげり",
                      "すなかけ",
                      "ずつき"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  142,
        "name":  "プテラ",
        "types":  [
                      "rock",
                      "flying"
                  ],
        "stats":  [
                      80,
                      105,
                      65,
                      60,
                      75,
                      130
                  ],
        "moves":  [
                      "かまいたち",
                      "つばさでうつ",
                      "ふきとばし",
                      "そらをとぶ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  143,
        "name":  "カビゴン",
        "types":  "normal",
        "stats":  [
                      160,
                      110,
                      65,
                      65,
                      110,
                      30
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ネコにこばん",
                      "ほのおのパンチ",
                      "れいとうパンチ"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  149,
        "name":  "カイリュー",
        "types":  [
                      "dragon",
                      "flying"
                  ],
        "stats":  [
                      91,
                      134,
                      95,
                      100,
                      100,
                      80
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  154,
        "name":  "メガニウム",
        "types":  "grass",
        "stats":  [
                      80,
                      82,
                      100,
                      83,
                      100,
                      80
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "つるのムチ",
                      "ずつき"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  157,
        "name":  "バクフーン",
        "types":  "fire",
        "stats":  [
                      78,
                      84,
                      78,
                      109,
                      85,
                      100
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "かみなりパンチ",
                      "いあいぎり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  157,
        "name":  "バクフーン",
        "types":  "fire",
        "stats":  [
                      78,
                      84,
                      78,
                      109,
                      85,
                      100
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "かみなりパンチ",
                      "いあいぎり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  160,
        "name":  "オーダイル",
        "types":  "water",
        "stats":  [
                      85,
                      105,
                      100,
                      79,
                      83,
                      78
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "れいとうパンチ",
                      "ひっかく",
                      "つるぎのまい"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  168,
        "name":  "アリアドス",
        "types":  [
                      "bug",
                      "poison"
                  ],
        "stats":  [
                      70,
                      90,
                      70,
                      60,
                      70,
                      40
                  ],
        "moves":  [
                      "つるぎのまい",
                      "のしかかり",
                      "すてみタックル",
                      "どくばり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  181,
        "name":  "デンリュウ",
        "types":  "electric",
        "stats":  [
                      90,
                      75,
                      85,
                      115,
                      90,
                      55
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  184,
        "name":  "マリルリ",
        "types":  [
                      "water",
                      "fairy"
                  ],
        "stats":  [
                      100,
                      50,
                      80,
                      60,
                      80,
                      50
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "れいとうパンチ",
                      "たたきつける",
                      "メガトンキック"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  186,
        "name":  "ニョロトノ",
        "types":  "water",
        "stats":  [
                      90,
                      75,
                      75,
                      90,
                      100,
                      70
                  ],
        "moves":  [
                      "はたく",
                      "おうふくビンタ",
                      "メガトンパンチ",
                      "れいとうパンチ"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  196,
        "name":  "エーフィ",
        "types":  "psychic",
        "stats":  [
                      65,
                      65,
                      60,
                      130,
                      95,
                      110
                  ],
        "moves":  [
                      "ネコにこばん",
                      "いあいぎり",
                      "すなかけ",
                      "ずつき"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  197,
        "name":  "ブラッキー",
        "types":  "dark",
        "stats":  [
                      95,
                      65,
                      110,
                      60,
                      130,
                      65
                  ],
        "moves":  [
                      "ネコにこばん",
                      "いあいぎり",
                      "すなかけ",
                      "ずつき"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  199,
        "name":  "ヤドキング",
        "types":  [
                      "water",
                      "psychic"
                  ],
        "stats":  [
                      95,
                      75,
                      80,
                      100,
                      110,
                      30
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ネコにこばん",
                      "ほのおのパンチ",
                      "れいとうパンチ"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  10172,
        "name":  "ヤドキング(ガラル)",
        "types":  [
                      "poison",
                      "psychic"
                  ],
        "stats":  [
                      95,
                      65,
                      80,
                      110,
                      110,
                      30
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ネコにこばん",
                      "ほのおのパンチ",
                      "れいとうパンチ"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  205,
        "name":  "フォレトス",
        "types":  [
                      "bug",
                      "steel"
                  ],
        "stats":  [
                      75,
                      90,
                      140,
                      60,
                      60,
                      40
                  ],
        "moves":  [
                      "ずつき",
                      "たいあたり",
                      "のしかかり",
                      "とっしん"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  208,
        "name":  "ハガネール",
        "types":  [
                      "steel",
                      "ground"
                  ],
        "stats":  [
                      75,
                      85,
                      200,
                      55,
                      65,
                      30
                  ],
        "moves":  [
                      "いあいぎり",
                      "しめつける",
                      "たたきつける",
                      "ずつき"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  211,
        "name":  "ハリーセン",
        "types":  [
                      "water",
                      "poison"
                  ],
        "stats":  [
                      65,
                      95,
                      85,
                      55,
                      55,
                      85
                  ],
        "moves":  [
                      "つるぎのまい",
                      "ずつき",
                      "たいあたり",
                      "とっしん"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  212,
        "name":  "ハッサム",
        "types":  [
                      "bug",
                      "steel"
                  ],
        "stats":  [
                      70,
                      130,
                      100,
                      55,
                      80,
                      65
                  ],
        "moves":  [
                      "かまいたち",
                      "つるぎのまい",
                      "いあいぎり",
                      "つばさでうつ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  214,
        "name":  "ヘラクロス",
        "types":  [
                      "bug",
                      "fighting"
                  ],
        "stats":  [
                      80,
                      125,
                      75,
                      40,
                      95,
                      85
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "ずつき",
                      "つのでつく"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  227,
        "name":  "エアームド",
        "types":  [
                      "steel",
                      "flying"
                  ],
        "stats":  [
                      65,
                      80,
                      140,
                      40,
                      70,
                      70
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "つばさでうつ",
                      "ふきとばし"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  229,
        "name":  "ヘルガー",
        "types":  [
                      "dark",
                      "fire"
                  ],
        "stats":  [
                      75,
                      90,
                      50,
                      110,
                      80,
                      95
                  ],
        "moves":  [
                      "ずつき",
                      "のしかかり",
                      "とっしん",
                      "すてみタックル"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  248,
        "name":  "バンギラス",
        "types":  [
                      "rock",
                      "dark"
                  ],
        "stats":  [
                      100,
                      134,
                      110,
                      95,
                      100,
                      61
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  254,
        "name":  "ジュカイン",
        "types":  "grass",
        "stats":  [
                      70,
                      85,
                      65,
                      105,
                      85,
                      120
                  ],
        "moves":  [
                      "はたく",
                      "メガトンパンチ",
                      "かみなりパンチ",
                      "つるぎのまい"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  257,
        "name":  "バシャーモ",
        "types":  [
                      "fire",
                      "fighting"
                  ],
        "stats":  [
                      80,
                      120,
                      70,
                      110,
                      70,
                      80
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "かみなりパンチ",
                      "ひっかく"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  260,
        "name":  "ラグラージ",
        "types":  [
                      "water",
                      "ground"
                  ],
        "stats":  [
                      100,
                      110,
                      90,
                      85,
                      90,
                      60
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "れいとうパンチ",
                      "ふみつけ",
                      "メガトンキック"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  279,
        "name":  "ペリッパー",
        "types":  [
                      "water",
                      "flying"
                  ],
        "stats":  [
                      60,
                      50,
                      100,
                      95,
                      70,
                      65
                  ],
        "moves":  [
                      "つばさでうつ",
                      "そらをとぶ",
                      "のしかかり",
                      "とっしん"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  282,
        "name":  "サーナイト",
        "types":  [
                      "psychic",
                      "fairy"
                  ],
        "stats":  [
                      68,
                      65,
                      65,
                      125,
                      115,
                      80
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  302,
        "name":  "ヤミラミ",
        "types":  [
                      "dark",
                      "ghost"
                  ],
        "stats":  [
                      50,
                      75,
                      75,
                      65,
                      65,
                      50
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  303,
        "name":  "クチート",
        "types":  [
                      "steel",
                      "fairy"
                  ],
        "stats":  [
                      50,
                      85,
                      85,
                      55,
                      55,
                      50
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "はさむ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  306,
        "name":  "ボスゴドラ",
        "types":  [
                      "steel",
                      "rock"
                  ],
        "stats":  [
                      70,
                      110,
                      180,
                      60,
                      60,
                      50
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  308,
        "name":  "チャーレム",
        "types":  [
                      "fighting",
                      "psychic"
                  ],
        "stats":  [
                      60,
                      60,
                      75,
                      60,
                      75,
                      80
                  ],
        "moves":  [
                      "はたく",
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  310,
        "name":  "ライボルト",
        "types":  "electric",
        "stats":  [
                      70,
                      75,
                      60,
                      105,
                      60,
                      105
                  ],
        "moves":  [
                      "ずつき",
                      "たいあたり",
                      "のしかかり",
                      "すてみタックル"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  319,
        "name":  "サメハダー",
        "types":  [
                      "water",
                      "dark"
                  ],
        "stats":  [
                      70,
                      120,
                      40,
                      95,
                      40,
                      95
                  ],
        "moves":  [
                      "とっしん",
                      "すてみタックル",
                      "にらみつける",
                      "かみつく"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  323,
        "name":  "バクーダ",
        "types":  [
                      "fire",
                      "ground"
                  ],
        "stats":  [
                      70,
                      100,
                      70,
                      105,
                      75,
                      40
                  ],
        "moves":  [
                      "ずつき",
                      "たいあたり",
                      "のしかかり",
                      "とっしん"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  324,
        "name":  "コータス",
        "types":  "fire",
        "stats":  [
                      70,
                      85,
                      140,
                      85,
                      70,
                      20
                  ],
        "moves":  [
                      "ずつき",
                      "のしかかり",
                      "とっしん",
                      "すてみタックル"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  334,
        "name":  "チルタリス",
        "types":  [
                      "dragon",
                      "flying"
                  ],
        "stats":  [
                      75,
                      70,
                      90,
                      70,
                      105,
                      80
                  ],
        "moves":  [
                      "そらをとぶ",
                      "みだれづき",
                      "のしかかり",
                      "とっしん"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  350,
        "name":  "ミロカロス",
        "types":  "water",
        "stats":  [
                      95,
                      60,
                      79,
                      100,
                      125,
                      81
                  ],
        "moves":  [
                      "しめつける",
                      "たいあたり",
                      "のしかかり",
                      "まきつく"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  351,
        "name":  "ポワルン",
        "types":  "normal",
        "stats":  [
                      70,
                      70,
                      70,
                      70,
                      70,
                      70
                  ],
        "moves":  [
                      "ずつき",
                      "たいあたり",
                      "のしかかり",
                      "すてみタックル"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  354,
        "name":  "ジュペッタ",
        "types":  "ghost",
        "stats":  [
                      64,
                      115,
                      65,
                      83,
                      63,
                      65
                  ],
        "moves":  [
                      "つるぎのまい",
                      "ずつき",
                      "のしかかり",
                      "すてみタックル"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  358,
        "name":  "チリーン",
        "types":  "psychic",
        "stats":  [
                      75,
                      50,
                      80,
                      95,
                      90,
                      65
                  ],
        "moves":  [
                      "しめつける",
                      "たいあたり",
                      "まきつく",
                      "とっしん"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  359,
        "name":  "アブソル",
        "types":  "dark",
        "stats":  [
                      65,
                      130,
                      60,
                      75,
                      60,
                      75
                  ],
        "moves":  [
                      "ひっかく",
                      "かまいたち",
                      "つるぎのまい",
                      "いあいぎり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  362,
        "name":  "オニゴーリ",
        "types":  "ice",
        "stats":  [
                      80,
                      80,
                      80,
                      80,
                      80,
                      80
                  ],
        "moves":  [
                      "ずつき",
                      "のしかかり",
                      "とっしん",
                      "すてみタックル"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  376,
        "name":  "メタグロス",
        "types":  [
                      "steel",
                      "psychic"
                  ],
        "stats":  [
                      80,
                      135,
                      130,
                      95,
                      90,
                      70
                  ],
        "moves":  [
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "いあいぎり",
                      "ずつき"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  389,
        "name":  "ドダイトス",
        "types":  [
                      "grass",
                      "ground"
                  ],
        "stats":  [
                      95,
                      109,
                      105,
                      75,
                      85,
                      56
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "ずつき",
                      "たいあたり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  392,
        "name":  "ゴウカザル",
        "types":  [
                      "fire",
                      "fighting"
                  ],
        "stats":  [
                      76,
                      104,
                      71,
                      104,
                      71,
                      108
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "かみなりパンチ",
                      "ひっかく",
                      "つるぎのまい"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  395,
        "name":  "エンペルト",
        "types":  [
                      "water",
                      "steel"
                  ],
        "stats":  [
                      84,
                      86,
                      88,
                      111,
                      101,
                      60
                  ],
        "moves":  [
                      "はたく",
                      "つるぎのまい",
                      "いあいぎり",
                      "ずつき"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  398,
        "name":  "ムクホーク",
        "types":  [
                      "normal",
                      "flying"
                  ],
        "stats":  [
                      85,
                      120,
                      70,
                      50,
                      60,
                      100
                  ],
        "moves":  [
                      "かぜおこし",
                      "つばさでうつ",
                      "ふきとばし",
                      "そらをとぶ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  405,
        "name":  "レントラー",
        "types":  "electric",
        "stats":  [
                      80,
                      120,
                      79,
                      95,
                      79,
                      70
                  ],
        "moves":  [
                      "ずつき",
                      "たいあたり",
                      "のしかかり",
                      "とっしん"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  407,
        "name":  "ロズレイド",
        "types":  [
                      "grass",
                      "poison"
                  ],
        "stats":  [
                      60,
                      70,
                      65,
                      125,
                      105,
                      90
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "のしかかり",
                      "どくばり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  409,
        "name":  "ラムパルド",
        "types":  "rock",
        "stats":  [
                      97,
                      165,
                      60,
                      65,
                      50,
                      58
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "かみなりパンチ",
                      "つるぎのまい",
                      "いあいぎり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  411,
        "name":  "トリデプス",
        "types":  [
                      "rock",
                      "steel"
                  ],
        "stats":  [
                      60,
                      52,
                      168,
                      47,
                      138,
                      30
                  ],
        "moves":  [
                      "ずつき",
                      "たいあたり",
                      "のしかかり",
                      "とっしん"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  428,
        "name":  "ミミロップ",
        "types":  "normal",
        "stats":  [
                      65,
                      76,
                      84,
                      54,
                      96,
                      105
                  ],
        "moves":  [
                      "はたく",
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  442,
        "name":  "ミカルゲ",
        "types":  [
                      "ghost",
                      "dark"
                  ],
        "stats":  [
                      50,
                      92,
                      108,
                      92,
                      108,
                      35
                  ],
        "moves":  [
                      "のしかかり",
                      "かなしばり",
                      "サイケこうせん",
                      "はかいこうせん"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  445,
        "name":  "ガブリアス",
        "types":  [
                      "dragon",
                      "ground"
                  ],
        "stats":  [
                      108,
                      130,
                      95,
                      80,
                      85,
                      102
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "すなかけ",
                      "ずつき"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  448,
        "name":  "ルカリオ",
        "types":  [
                      "fighting",
                      "steel"
                  ],
        "stats":  [
                      70,
                      110,
                      70,
                      115,
                      70,
                      90
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "つるぎのまい"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  450,
        "name":  "カバルドン",
        "types":  "ground",
        "stats":  [
                      108,
                      112,
                      118,
                      68,
                      72,
                      47
                  ],
        "moves":  [
                      "すなかけ",
                      "ずつき",
                      "たいあたり",
                      "のしかかり"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  454,
        "name":  "ドクロッグ",
        "types":  [
                      "poison",
                      "fighting"
                  ],
        "stats":  [
                      83,
                      106,
                      65,
                      86,
                      65,
                      85
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "つるぎのまい"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  460,
        "name":  "ユキノオー",
        "types":  [
                      "grass",
                      "ice"
                  ],
        "stats":  [
                      90,
                      92,
                      75,
                      92,
                      85,
                      60
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "れいとうパンチ",
                      "つるぎのまい",
                      "メガトンキック"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  461,
        "name":  "マニューラ",
        "types":  [
                      "dark",
                      "ice"
                  ],
        "stats":  [
                      70,
                      120,
                      65,
                      45,
                      85,
                      125
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "れいとうパンチ",
                      "ひっかく",
                      "つるぎのまい"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  464,
        "name":  "ドサイドン",
        "types":  [
                      "ground",
                      "rock"
                  ],
        "stats":  [
                      115,
                      140,
                      130,
                      55,
                      55,
                      40
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ネコにこばん",
                      "ほのおのパンチ",
                      "れいとうパンチ"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  470,
        "name":  "リーフィア",
        "types":  "grass",
        "stats":  [
                      65,
                      110,
                      130,
                      60,
                      65,
                      95
                  ],
        "moves":  [
                      "ネコにこばん",
                      "つるぎのまい",
                      "すなかけ",
                      "ずつき"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  471,
        "name":  "グレイシア",
        "types":  "ice",
        "stats":  [
                      65,
                      60,
                      110,
                      130,
                      95,
                      65
                  ],
        "moves":  [
                      "ネコにこばん",
                      "すなかけ",
                      "ずつき",
                      "たいあたり"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  472,
        "name":  "グライオン",
        "types":  [
                      "ground",
                      "flying"
                  ],
        "stats":  [
                      75,
                      95,
                      125,
                      45,
                      75,
                      95
                  ],
        "moves":  [
                      "ハサミギロチン",
                      "つるぎのまい",
                      "いあいぎり",
                      "つばさでうつ"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  473,
        "name":  "マンムー",
        "types":  [
                      "ice",
                      "ground"
                  ],
        "stats":  [
                      110,
                      130,
                      80,
                      70,
                      60,
                      80
                  ],
        "moves":  [
                      "ずつき",
                      "みだれづき",
                      "たいあたり",
                      "のしかかり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  475,
        "name":  "エルレイド",
        "types":  [
                      "psychic",
                      "fighting"
                  ],
        "stats":  [
                      68,
                      125,
                      65,
                      65,
                      115,
                      80
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  478,
        "name":  "ユキメノコ",
        "types":  [
                      "ice",
                      "ghost"
                  ],
        "stats":  [
                      70,
                      80,
                      70,
                      80,
                      70,
                      110
                  ],
        "moves":  [
                      "れいとうパンチ",
                      "ずつき",
                      "のしかかり",
                      "とっしん"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  479,
        "name":  "ロトム",
        "types":  [
                      "electric",
                      "ghost"
                  ],
        "stats":  [
                      50,
                      50,
                      77,
                      95,
                      77,
                      91
                  ],
        "moves":  [
                      "でんきショック",
                      "１０まんボルト",
                      "でんじは",
                      "かみなり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  479,
        "name":  "ロトム",
        "types":  [
                      "electric",
                      "ghost"
                  ],
        "stats":  [
                      50,
                      50,
                      77,
                      95,
                      77,
                      91
                  ],
        "moves":  [
                      "でんきショック",
                      "１０まんボルト",
                      "でんじは",
                      "かみなり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  479,
        "name":  "ロトム",
        "types":  [
                      "electric",
                      "ghost"
                  ],
        "stats":  [
                      50,
                      50,
                      77,
                      95,
                      77,
                      91
                  ],
        "moves":  [
                      "でんきショック",
                      "１０まんボルト",
                      "でんじは",
                      "かみなり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  479,
        "name":  "ロトム",
        "types":  [
                      "electric",
                      "ghost"
                  ],
        "stats":  [
                      50,
                      50,
                      77,
                      95,
                      77,
                      91
                  ],
        "moves":  [
                      "でんきショック",
                      "１０まんボルト",
                      "でんじは",
                      "かみなり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  479,
        "name":  "ロトム",
        "types":  [
                      "electric",
                      "ghost"
                  ],
        "stats":  [
                      50,
                      50,
                      77,
                      95,
                      77,
                      91
                  ],
        "moves":  [
                      "でんきショック",
                      "１０まんボルト",
                      "でんじは",
                      "かみなり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  479,
        "name":  "ロトム",
        "types":  [
                      "electric",
                      "ghost"
                  ],
        "stats":  [
                      50,
                      50,
                      77,
                      95,
                      77,
                      91
                  ],
        "moves":  [
                      "でんきショック",
                      "１０まんボルト",
                      "でんじは",
                      "かみなり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  497,
        "name":  "ジャローダ",
        "types":  "grass",
        "stats":  [
                      75,
                      75,
                      95,
                      75,
                      95,
                      113
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "しめつける",
                      "たたきつける"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  500,
        "name":  "エンブオー",
        "types":  [
                      "fire",
                      "fighting"
                  ],
        "stats":  [
                      110,
                      123,
                      65,
                      100,
                      65,
                      65
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "かみなりパンチ",
                      "たいあたり",
                      "のしかかり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  503,
        "name":  "ダイケンキ",
        "types":  "water",
        "stats":  [
                      95,
                      100,
                      85,
                      108,
                      70,
                      70
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "たいあたり",
                      "のしかかり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  10236,
        "name":  "ダイケンキ(ヒスイ)",
        "types":  [
                      "water",
                      "dark"
                  ],
        "stats":  [
                      90,
                      108,
                      80,
                      100,
                      65,
                      85
                  ],
        "moves":  [
                      "つるぎのまい",
                      "たいあたり",
                      "のしかかり",
                      "とっしん"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  505,
        "name":  "ミルホッグ",
        "types":  "normal",
        "stats":  [
                      60,
                      85,
                      69,
                      60,
                      69,
                      77
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "つるぎのまい"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  510,
        "name":  "レパルダス",
        "types":  "dark",
        "stats":  [
                      64,
                      88,
                      50,
                      88,
                      50,
                      106
                  ],
        "moves":  [
                      "ネコにこばん",
                      "ひっかく",
                      "いあいぎり",
                      "すなかけ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  512,
        "name":  "ヤナッキー",
        "types":  "grass",
        "stats":  [
                      75,
                      98,
                      63,
                      98,
                      63,
                      101
                  ],
        "moves":  [
                      "いあいぎり",
                      "にらみつける",
                      "はかいこうせん",
                      "けたぐり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  514,
        "name":  "バオッキー",
        "types":  "fire",
        "stats":  [
                      75,
                      98,
                      63,
                      98,
                      63,
                      101
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "いあいぎり",
                      "にらみつける",
                      "かえんほうしゃ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  516,
        "name":  "ヒヤッキー",
        "types":  "water",
        "stats":  [
                      75,
                      98,
                      63,
                      98,
                      63,
                      101
                  ],
        "moves":  [
                      "れいとうパンチ",
                      "いあいぎり",
                      "にらみつける",
                      "なみのり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  518,
        "name":  "ムシャーナ",
        "types":  "psychic",
        "stats":  [
                      116,
                      55,
                      85,
                      107,
                      95,
                      29
                  ],
        "moves":  [
                      "サイケこうせん",
                      "はかいこうせん",
                      "でんじは",
                      "どくどく"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  530,
        "name":  "ドリュウズ",
        "types":  [
                      "ground",
                      "steel"
                  ],
        "stats":  [
                      110,
                      135,
                      60,
                      50,
                      65,
                      88
                  ],
        "moves":  [
                      "ひっかく",
                      "つるぎのまい",
                      "いあいぎり",
                      "つのドリル"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  531,
        "name":  "タブンネ",
        "types":  "normal",
        "stats":  [
                      103,
                      60,
                      86,
                      60,
                      86,
                      50
                  ],
        "moves":  [
                      "はたく",
                      "おうふくビンタ",
                      "メガトンパンチ",
                      "ほのおのパンチ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  534,
        "name":  "ローブシン",
        "types":  "fighting",
        "stats":  [
                      105,
                      140,
                      95,
                      55,
                      65,
                      45
                  ],
        "moves":  [
                      "はたく",
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  545,
        "name":  "ペンドラー",
        "types":  [
                      "bug",
                      "poison"
                  ],
        "stats":  [
                      60,
                      100,
                      89,
                      55,
                      69,
                      112
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "とっしん",
                      "すてみタックル"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  547,
        "name":  "エルフーン",
        "types":  [
                      "grass",
                      "fairy"
                  ],
        "stats":  [
                      60,
                      67,
                      85,
                      77,
                      75,
                      116
                  ],
        "moves":  [
                      "かぜおこし",
                      "はかいこうせん",
                      "すいとる",
                      "メガドレイン"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  553,
        "name":  "ワルビアル",
        "types":  [
                      "ground",
                      "dark"
                  ],
        "stats":  [
                      95,
                      117,
                      80,
                      65,
                      70,
                      92
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "いあいぎり",
                      "メガトンキック",
                      "すなかけ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  560,
        "name":  "ズルズキン",
        "types":  [
                      "dark",
                      "fighting"
                  ],
        "stats":  [
                      65,
                      90,
                      115,
                      45,
                      115,
                      58
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  563,
        "name":  "デスカーン",
        "types":  "ghost",
        "stats":  [
                      58,
                      50,
                      145,
                      95,
                      105,
                      30
                  ],
        "moves":  [
                      "かなしばり",
                      "はかいこうせん",
                      "どくどく",
                      "サイコキネシス"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  569,
        "name":  "ダストダス",
        "types":  "poison",
        "stats":  [
                      80,
                      95,
                      82,
                      60,
                      82,
                      75
                  ],
        "moves":  [
                      "はたく",
                      "おうふくビンタ",
                      "のしかかり",
                      "とっしん"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  571,
        "name":  "ゾロアーク",
        "types":  "dark",
        "stats":  [
                      60,
                      105,
                      60,
                      120,
                      60,
                      105
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ひっかく",
                      "つるぎのまい",
                      "いあいぎり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  10239,
        "name":  "ゾロアーク(ヒスイ)",
        "types":  [
                      "normal",
                      "ghost"
                  ],
        "stats":  [
                      55,
                      100,
                      60,
                      125,
                      60,
                      110
                  ],
        "moves":  [
                      "ひっかく",
                      "つるぎのまい",
                      "のしかかり",
                      "とっしん"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  579,
        "name":  "ランクルス",
        "types":  "psychic",
        "stats":  [
                      110,
                      65,
                      75,
                      125,
                      85,
                      30
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  584,
        "name":  "バイバニラ",
        "types":  "ice",
        "stats":  [
                      71,
                      95,
                      85,
                      110,
                      95,
                      79
                  ],
        "moves":  [
                      "しろいきり",
                      "れいとうビーム",
                      "ふぶき",
                      "はかいこうせん"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  587,
        "name":  "エモンガ",
        "types":  [
                      "electric",
                      "flying"
                  ],
        "stats":  [
                      55,
                      75,
                      60,
                      75,
                      60,
                      103
                  ],
        "moves":  [
                      "いあいぎり",
                      "しっぽをふる",
                      "ソーラービーム",
                      "でんきショック"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  604,
        "name":  "シビルドン",
        "types":  "electric",
        "stats":  [
                      85,
                      115,
                      80,
                      105,
                      80,
                      50
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "かみなりパンチ",
                      "いあいぎり",
                      "しめつける"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  609,
        "name":  "シャンデラ",
        "types":  [
                      "ghost",
                      "fire"
                  ],
        "stats":  [
                      60,
                      55,
                      90,
                      145,
                      90,
                      80
                  ],
        "moves":  [
                      "ひのこ",
                      "かえんほうしゃ",
                      "はかいこうせん",
                      "ソーラービーム"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  614,
        "name":  "ツンベアー",
        "types":  "ice",
        "stats":  [
                      95,
                      130,
                      80,
                      70,
                      80,
                      50
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "れいとうパンチ",
                      "つるぎのまい",
                      "いあいぎり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  618,
        "name":  "マッギョ",
        "types":  [
                      "ground",
                      "electric"
                  ],
        "stats":  [
                      109,
                      66,
                      84,
                      81,
                      99,
                      32
                  ],
        "moves":  [
                      "たいあたり",
                      "みずでっぽう",
                      "なみのり",
                      "でんきショック"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  10180,
        "name":  "マッギョ(ガラル)",
        "types":  [
                      "ground",
                      "steel"
                  ],
        "stats":  [
                      109,
                      81,
                      99,
                      66,
                      84,
                      32
                  ],
        "moves":  [
                      "しめつける",
                      "たいあたり",
                      "みずでっぽう",
                      "なみのり"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  623,
        "name":  "ゴルーグ",
        "types":  [
                      "ground",
                      "ghost"
                  ],
        "stats":  [
                      89,
                      124,
                      80,
                      55,
                      80,
                      55
                  ],
        "moves":  [
                      "はたく",
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  635,
        "name":  "サザンドラ",
        "types":  [
                      "dark",
                      "dragon"
                  ],
        "stats":  [
                      92,
                      105,
                      90,
                      125,
                      90,
                      98
                  ],
        "moves":  [
                      "そらをとぶ",
                      "たたきつける",
                      "ずつき",
                      "たいあたり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  637,
        "name":  "ウルガモス",
        "types":  [
                      "bug",
                      "fire"
                  ],
        "stats":  [
                      85,
                      60,
                      65,
                      135,
                      105,
                      100
                  ],
        "moves":  [
                      "かぜおこし",
                      "ふきとばし",
                      "そらをとぶ",
                      "のしかかり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  652,
        "name":  "ブリガロン",
        "types":  [
                      "grass",
                      "fighting"
                  ],
        "stats":  [
                      88,
                      107,
                      122,
                      74,
                      75,
                      64
                  ],
        "moves":  [
                      "かみなりパンチ",
                      "つるぎのまい",
                      "いあいぎり",
                      "つるのムチ"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  655,
        "name":  "マフォクシー",
        "types":  [
                      "fire",
                      "psychic"
                  ],
        "stats":  [
                      75,
                      69,
                      72,
                      114,
                      100,
                      104
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "かみなりパンチ",
                      "ひっかく",
                      "いあいぎり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  658,
        "name":  "ゲッコウガ",
        "types":  [
                      "water",
                      "dark"
                  ],
        "stats":  [
                      72,
                      95,
                      67,
                      103,
                      71,
                      122
                  ],
        "moves":  [
                      "はたく",
                      "れいとうパンチ",
                      "つるぎのまい",
                      "いあいぎり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  660,
        "name":  "ホルード",
        "types":  [
                      "normal",
                      "ground"
                  ],
        "stats":  [
                      85,
                      56,
                      77,
                      50,
                      77,
                      78
                  ],
        "moves":  [
                      "おうふくビンタ",
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  663,
        "name":  "ファイアロー",
        "types":  [
                      "fire",
                      "flying"
                  ],
        "stats":  [
                      78,
                      81,
                      71,
                      74,
                      69,
                      126
                  ],
        "moves":  [
                      "かまいたち",
                      "つるぎのまい",
                      "そらをとぶ",
                      "たいあたり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  666,
        "name":  "ビビヨン",
        "types":  [
                      "bug",
                      "flying"
                  ],
        "stats":  [
                      80,
                      52,
                      50,
                      90,
                      50,
                      89
                  ],
        "moves":  [
                      "かぜおこし",
                      "ちょうおんぱ",
                      "サイケこうせん",
                      "はかいこうせん"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  670,
        "name":  "フラエッテ",
        "types":  "fairy",
        "stats":  [
                      54,
                      45,
                      47,
                      75,
                      98,
                      52
                  ],
        "moves":  [
                      "つるのムチ",
                      "たいあたり",
                      "はっぱカッター",
                      "ソーラービーム"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  671,
        "name":  "フラージェス",
        "types":  "fairy",
        "stats":  [
                      78,
                      65,
                      68,
                      112,
                      154,
                      75
                  ],
        "moves":  [
                      "はかいこうせん",
                      "ソーラービーム",
                      "はなびらのまい",
                      "どくどく"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  675,
        "name":  "ゴロンダ",
        "types":  [
                      "fighting",
                      "dark"
                  ],
        "stats":  [
                      95,
                      124,
                      78,
                      69,
                      71,
                      58
                  ],
        "moves":  [
                      "からてチョップ",
                      "れんぞくパンチ",
                      "メガトンパンチ",
                      "ほのおのパンチ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  676,
        "name":  "トリミアン",
        "types":  "normal",
        "stats":  [
                      75,
                      80,
                      60,
                      65,
                      90,
                      102
                  ],
        "moves":  [
                      "すなかけ",
                      "ずつき",
                      "たいあたり",
                      "とっしん"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  683,
        "name":  "フレフワン",
        "types":  "fairy",
        "stats":  [
                      101,
                      72,
                      72,
                      99,
                      89,
                      29
                  ],
        "moves":  [
                      "はかいこうせん",
                      "１０まんボルト",
                      "かみなり",
                      "どくどく"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  685,
        "name":  "ペロリーム",
        "types":  "fairy",
        "stats":  [
                      82,
                      80,
                      86,
                      85,
                      75,
                      72
                  ],
        "moves":  [
                      "たいあたり",
                      "かえんほうしゃ",
                      "なみのり",
                      "はかいこうせん"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  687,
        "name":  "カラマネロ",
        "types":  [
                      "dark",
                      "psychic"
                  ],
        "stats":  [
                      86,
                      92,
                      88,
                      68,
                      75,
                      73
                  ],
        "moves":  [
                      "いあいぎり",
                      "しめつける",
                      "たいあたり",
                      "まきつく"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  689,
        "name":  "ガメノデス",
        "types":  [
                      "rock",
                      "water"
                  ],
        "stats":  [
                      72,
                      105,
                      115,
                      54,
                      86,
                      68
                  ],
        "moves":  [
                      "ひっかく",
                      "つるぎのまい",
                      "いあいぎり",
                      "すなかけ"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  691,
        "name":  "ドラミドロ",
        "types":  [
                      "poison",
                      "dragon"
                  ],
        "stats":  [
                      65,
                      75,
                      90,
                      97,
                      123,
                      44
                  ],
        "moves":  [
                      "たいあたり",
                      "とっしん",
                      "しっぽをふる",
                      "ようかいえき"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  693,
        "name":  "ブロスター",
        "types":  "water",
        "stats":  [
                      71,
                      73,
                      88,
                      120,
                      89,
                      59
                  ],
        "moves":  [
                      "はさむ",
                      "つるぎのまい",
                      "いあいぎり",
                      "のしかかり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  695,
        "name":  "エレザード",
        "types":  [
                      "electric",
                      "normal"
                  ],
        "stats":  [
                      62,
                      55,
                      52,
                      109,
                      94,
                      109
                  ],
        "moves":  [
                      "はたく",
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "かみなりパンチ"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  697,
        "name":  "ガチゴラス",
        "types":  [
                      "rock",
                      "dragon"
                  ],
        "stats":  [
                      82,
                      121,
                      119,
                      69,
                      59,
                      71
                  ],
        "moves":  [
                      "ふみつけ",
                      "つのドリル",
                      "たいあたり",
                      "のしかかり"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  699,
        "name":  "アマルルガ",
        "types":  [
                      "rock",
                      "ice"
                  ],
        "stats":  [
                      123,
                      77,
                      72,
                      99,
                      92,
                      58
                  ],
        "moves":  [
                      "のしかかり",
                      "とっしん",
                      "なきごえ",
                      "ほえる"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  700,
        "name":  "ニンフィア",
        "types":  "fairy",
        "stats":  [
                      95,
                      65,
                      65,
                      110,
                      130,
                      60
                  ],
        "moves":  [
                      "ネコにこばん",
                      "いあいぎり",
                      "すなかけ",
                      "たいあたり"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  701,
        "name":  "ルチャブル",
        "types":  [
                      "fighting",
                      "flying"
                  ],
        "stats":  [
                      78,
                      92,
                      75,
                      74,
                      63,
                      118
                  ],
        "moves":  [
                      "からてチョップ",
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "かみなりパンチ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  702,
        "name":  "デデンネ",
        "types":  [
                      "electric",
                      "fairy"
                  ],
        "stats":  [
                      67,
                      58,
                      57,
                      81,
                      67,
                      101
                  ],
        "moves":  [
                      "かみなりパンチ",
                      "いあいぎり",
                      "たいあたり",
                      "とっしん"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  706,
        "name":  "ヌメルゴン",
        "types":  "dragon",
        "stats":  [
                      90,
                      100,
                      70,
                      110,
                      150,
                      80
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "かみなりパンチ",
                      "メガトンキック"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  10242,
        "name":  "ヌメルゴン(ヒスイ)",
        "types":  [
                      "steel",
                      "dragon"
                  ],
        "stats":  [
                      80,
                      100,
                      100,
                      110,
                      150,
                      60
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "かみなりパンチ",
                      "たいあたり",
                      "のしかかり"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  707,
        "name":  "クレッフィ",
        "types":  [
                      "steel",
                      "fairy"
                  ],
        "stats":  [
                      57,
                      80,
                      91,
                      80,
                      87,
                      75
                  ],
        "moves":  [
                      "いあいぎり",
                      "たいあたり",
                      "はかいこうせん",
                      "でんじは"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  709,
        "name":  "オーロット",
        "types":  [
                      "ghost",
                      "grass"
                  ],
        "stats":  [
                      85,
                      110,
                      76,
                      65,
                      82,
                      56
                  ],
        "moves":  [
                      "いあいぎり",
                      "たいあたり",
                      "とっしん",
                      "かなしばり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  713,
        "name":  "クレベース",
        "types":  "ice",
        "stats":  [
                      95,
                      117,
                      184,
                      44,
                      46,
                      28
                  ],
        "moves":  [
                      "たいあたり",
                      "のしかかり",
                      "とっしん",
                      "すてみタックル"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  10243,
        "name":  "クレベース(ヒスイ)",
        "types":  [
                      "ice",
                      "rock"
                  ],
        "stats":  [
                      95,
                      127,
                      184,
                      34,
                      36,
                      38
                  ],
        "moves":  [
                      "たいあたり",
                      "のしかかり",
                      "とっしん",
                      "すてみタックル"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  715,
        "name":  "オンバーン",
        "types":  [
                      "flying",
                      "dragon"
                  ],
        "stats":  [
                      85,
                      70,
                      80,
                      97,
                      80,
                      123
                  ],
        "moves":  [
                      "かまいたち",
                      "いあいぎり",
                      "かぜおこし",
                      "つばさでうつ"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  724,
        "name":  "ジュナイパー",
        "types":  [
                      "grass",
                      "ghost"
                  ],
        "stats":  [
                      78,
                      107,
                      75,
                      100,
                      100,
                      70
                  ],
        "moves":  [
                      "つるぎのまい",
                      "みだれづき",
                      "たいあたり",
                      "とっしん"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  10244,
        "name":  "ジュナイパー(ヒスイ)",
        "types":  [
                      "grass",
                      "fighting"
                  ],
        "stats":  [
                      88,
                      112,
                      80,
                      95,
                      95,
                      60
                  ],
        "moves":  [
                      "つるぎのまい",
                      "かぜおこし",
                      "たいあたり",
                      "とっしん"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  727,
        "name":  "ガオガエン",
        "types":  [
                      "fire",
                      "dark"
                  ],
        "stats":  [
                      95,
                      115,
                      90,
                      80,
                      90,
                      60
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ネコにこばん",
                      "ほのおのパンチ",
                      "かみなりパンチ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  730,
        "name":  "アシレーヌ",
        "types":  [
                      "water",
                      "fairy"
                  ],
        "stats":  [
                      80,
                      74,
                      74,
                      126,
                      116,
                      60
                  ],
        "moves":  [
                      "はたく",
                      "おうふくビンタ",
                      "のしかかり",
                      "なきごえ"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  733,
        "name":  "ドデカバシ",
        "types":  [
                      "normal",
                      "flying"
                  ],
        "stats":  [
                      80,
                      120,
                      75,
                      75,
                      75,
                      60
                  ],
        "moves":  [
                      "つるぎのまい",
                      "そらをとぶ",
                      "みだれづき",
                      "とっしん"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  740,
        "name":  "ケケンカニ",
        "types":  [
                      "fighting",
                      "ice"
                  ],
        "stats":  [
                      97,
                      132,
                      77,
                      62,
                      67,
                      43
                  ],
        "moves":  [
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "たたきつける",
                      "のしかかり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  748,
        "name":  "ドヒドイデ",
        "types":  [
                      "poison",
                      "water"
                  ],
        "stats":  [
                      50,
                      63,
                      152,
                      53,
                      142,
                      35
                  ],
        "moves":  [
                      "のしかかり",
                      "どくばり",
                      "ミサイルばり",
                      "かみつく"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  750,
        "name":  "バンバドロ",
        "types":  "ground",
        "stats":  [
                      100,
                      125,
                      100,
                      55,
                      85,
                      35
                  ],
        "moves":  [
                      "ふみつけ",
                      "にどげり",
                      "メガトンキック",
                      "のしかかり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  752,
        "name":  "オニシズクモ",
        "types":  [
                      "water",
                      "bug"
                  ],
        "stats":  [
                      68,
                      70,
                      92,
                      50,
                      132,
                      42
                  ],
        "moves":  [
                      "ずつき",
                      "のしかかり",
                      "かみつく",
                      "みずでっぽう"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  758,
        "name":  "エンニュート",
        "types":  [
                      "poison",
                      "fire"
                  ],
        "stats":  [
                      68,
                      64,
                      60,
                      111,
                      60,
                      117
                  ],
        "moves":  [
                      "はたく",
                      "おうふくビンタ",
                      "ひっかく",
                      "のしかかり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  763,
        "name":  "アマージョ",
        "types":  "grass",
        "stats":  [
                      72,
                      120,
                      98,
                      50,
                      98,
                      72
                  ],
        "moves":  [
                      "おうふくビンタ",
                      "ふみつけ",
                      "メガトンキック",
                      "とっしん"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  765,
        "name":  "ヤレユータン",
        "types":  [
                      "normal",
                      "psychic"
                  ],
        "stats":  [
                      90,
                      60,
                      80,
                      90,
                      110,
                      60
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "メガトンキック",
                      "のしかかり",
                      "とっしん"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  766,
        "name":  "ナゲツケサル",
        "types":  "fighting",
        "stats":  [
                      100,
                      120,
                      90,
                      40,
                      60,
                      80
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "メガトンキック",
                      "たいあたり",
                      "のしかかり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  780,
        "name":  "ジジーロン",
        "types":  [
                      "normal",
                      "dragon"
                  ],
        "stats":  [
                      78,
                      60,
                      85,
                      135,
                      91,
                      36
                  ],
        "moves":  [
                      "かまいたち",
                      "そらをとぶ",
                      "ほえる",
                      "かえんほうしゃ"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  784,
        "name":  "ジャラランガ",
        "types":  [
                      "dragon",
                      "fighting"
                  ],
        "stats":  [
                      75,
                      110,
                      125,
                      100,
                      105,
                      85
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  823,
        "name":  "アーマーガア",
        "types":  [
                      "flying",
                      "steel"
                  ],
        "stats":  [
                      98,
                      87,
                      105,
                      53,
                      85,
                      67
                  ],
        "moves":  [
                      "そらをとぶ",
                      "すなかけ",
                      "みだれづき",
                      "のしかかり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  841,
        "name":  "アップリュー",
        "types":  [
                      "grass",
                      "dragon"
                  ],
        "stats":  [
                      70,
                      110,
                      80,
                      95,
                      60,
                      70
                  ],
        "moves":  [
                      "つばさでうつ",
                      "そらをとぶ",
                      "とっしん",
                      "はかいこうせん"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  842,
        "name":  "タルップル",
        "types":  [
                      "grass",
                      "dragon"
                  ],
        "stats":  [
                      110,
                      85,
                      80,
                      100,
                      80,
                      30
                  ],
        "moves":  [
                      "ふみつけ",
                      "ずつき",
                      "のしかかり",
                      "とっしん"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  844,
        "name":  "サダイジャ",
        "types":  "ground",
        "stats":  [
                      72,
                      107,
                      125,
                      65,
                      70,
                      71
                  ],
        "moves":  [
                      "たたきつける",
                      "すなかけ",
                      "ずつき",
                      "のしかかり"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  855,
        "name":  "ポットデス",
        "types":  "ghost",
        "stats":  [
                      60,
                      65,
                      65,
                      134,
                      114,
                      70
                  ],
        "moves":  [
                      "サイケこうせん",
                      "はかいこうせん",
                      "メガドレイン",
                      "サイコキネシス"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  858,
        "name":  "ブリムオン",
        "types":  [
                      "psychic",
                      "fairy"
                  ],
        "stats":  [
                      57,
                      90,
                      95,
                      136,
                      103,
                      29
                  ],
        "moves":  [
                      "つるぎのまい",
                      "サイケこうせん",
                      "はかいこうせん",
                      "でんじは"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  861,
        "name":  "オーロンゲ",
        "types":  [
                      "dark",
                      "fairy"
                  ],
        "stats":  [
                      95,
                      120,
                      65,
                      95,
                      75,
                      60
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  866,
        "name":  "バリコオル",
        "types":  [
                      "ice",
                      "psychic"
                  ],
        "stats":  [
                      80,
                      85,
                      75,
                      110,
                      100,
                      70
                  ],
        "moves":  [
                      "はたく",
                      "メガトンパンチ",
                      "れいとうパンチ",
                      "にどげり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  867,
        "name":  "デスバーン",
        "types":  [
                      "ground",
                      "ghost"
                  ],
        "stats":  [
                      58,
                      95,
                      145,
                      50,
                      105,
                      30
                  ],
        "moves":  [
                      "たたきつける",
                      "かなしばり",
                      "はかいこうせん",
                      "じしん"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  869,
        "name":  "マホイップ",
        "types":  "fairy",
        "stats":  [
                      65,
                      60,
                      75,
                      110,
                      121,
                      64
                  ],
        "moves":  [
                      "たいあたり",
                      "はかいこうせん",
                      "ソーラービーム",
                      "サイコキネシス"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  false
    },
    {
        "id":  870,
        "name":  "タイレーツ",
        "types":  "fighting",
        "stats":  [
                      65,
                      100,
                      100,
                      70,
                      60,
                      75
                  ],
        "moves":  [
                      "つるぎのまい",
                      "ずつき",
                      "たいあたり",
                      "のしかかり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  887,
        "name":  "ドラパルト",
        "types":  [
                      "dragon",
                      "ghost"
                  ],
        "stats":  [
                      88,
                      120,
                      75,
                      100,
                      75,
                      142
                  ],
        "moves":  [
                      "そらをとぶ",
                      "のしかかり",
                      "とっしん",
                      "すてみタックル"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  899,
        "name":  "アヤシシ",
        "types":  [
                      "normal",
                      "psychic"
                  ],
        "stats":  [
                      103,
                      105,
                      72,
                      105,
                      75,
                      65
                  ],
        "moves":  [
                      "ふみつけ",
                      "すなかけ",
                      "たいあたり",
                      "のしかかり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  900,
        "name":  "バサギリ",
        "types":  [
                      "bug",
                      "rock"
                  ],
        "stats":  [
                      70,
                      135,
                      95,
                      45,
                      70,
                      85
                  ],
        "moves":  [
                      "つるぎのまい",
                      "とっしん",
                      "すてみタックル",
                      "にらみつける"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  902,
        "name":  "イダイトウ",
        "types":  [
                      "water",
                      "ghost"
                  ],
        "stats":  [
                      120,
                      112,
                      65,
                      80,
                      75,
                      78
                  ],
        "moves":  [
                      "ずつき",
                      "たいあたり",
                      "とっしん",
                      "あばれる"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  902,
        "name":  "イダイトウ",
        "types":  [
                      "water",
                      "ghost"
                  ],
        "stats":  [
                      120,
                      112,
                      65,
                      80,
                      75,
                      78
                  ],
        "moves":  [
                      "ずつき",
                      "たいあたり",
                      "とっしん",
                      "あばれる"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  903,
        "name":  "オオニューラ",
        "types":  [
                      "fighting",
                      "poison"
                  ],
        "stats":  [
                      80,
                      130,
                      60,
                      40,
                      80,
                      120
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "ひっかく",
                      "つるぎのまい",
                      "とっしん"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  904,
        "name":  "ハリーマン",
        "types":  [
                      "dark",
                      "poison"
                  ],
        "stats":  [
                      85,
                      115,
                      95,
                      65,
                      65,
                      85
                  ],
        "moves":  [
                      "つるぎのまい",
                      "たいあたり",
                      "とっしん",
                      "すてみタックル"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  908,
        "name":  "マスカーニャ",
        "types":  [
                      "grass",
                      "dark"
                  ],
        "stats":  [
                      76,
                      110,
                      70,
                      81,
                      70,
                      123
                  ],
        "moves":  [
                      "かみなりパンチ",
                      "ひっかく",
                      "とっしん",
                      "しっぽをふる"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  911,
        "name":  "ラウドボーン",
        "types":  [
                      "fire",
                      "ghost"
                  ],
        "stats":  [
                      104,
                      75,
                      100,
                      110,
                      75,
                      66
                  ],
        "moves":  [
                      "たいあたり",
                      "のしかかり",
                      "とっしん",
                      "にらみつける"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  914,
        "name":  "ウェーニバル",
        "types":  [
                      "water",
                      "fighting"
                  ],
        "stats":  [
                      85,
                      120,
                      80,
                      85,
                      75,
                      85
                  ],
        "moves":  [
                      "はたく",
                      "つるぎのまい",
                      "つばさでうつ",
                      "メガトンキック"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  934,
        "name":  "キョジオーン",
        "types":  "rock",
        "stats":  [
                      100,
                      100,
                      130,
                      45,
                      90,
                      35
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "ずつき"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  936,
        "name":  "グレンアルマ",
        "types":  [
                      "fire",
                      "psychic"
                  ],
        "stats":  [
                      85,
                      60,
                      100,
                      125,
                      80,
                      75
                  ],
        "moves":  [
                      "とっしん",
                      "にらみつける",
                      "ひのこ",
                      "かえんほうしゃ"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  937,
        "name":  "ソウブレイズ",
        "types":  [
                      "fire",
                      "ghost"
                  ],
        "stats":  [
                      75,
                      125,
                      80,
                      60,
                      100,
                      85
                  ],
        "moves":  [
                      "つるぎのまい",
                      "とっしん",
                      "にらみつける",
                      "ひのこ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  939,
        "name":  "ハラバリー",
        "types":  "electric",
        "stats":  [
                      109,
                      64,
                      91,
                      103,
                      83,
                      45
                  ],
        "moves":  [
                      "たいあたり",
                      "みずでっぽう",
                      "はかいこうせん",
                      "でんきショック"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  952,
        "name":  "スコヴィラン",
        "types":  [
                      "grass",
                      "fire"
                  ],
        "stats":  [
                      65,
                      108,
                      65,
                      108,
                      65,
                      75
                  ],
        "moves":  [
                      "ずつき",
                      "とっしん",
                      "にらみつける",
                      "かみつく"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  956,
        "name":  "クエスパトラ",
        "types":  "psychic",
        "stats":  [
                      95,
                      60,
                      60,
                      101,
                      60,
                      105
                  ],
        "moves":  [
                      "のしかかり",
                      "とっしん",
                      "すてみタックル",
                      "なきごえ"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  959,
        "name":  "デカヌチャン",
        "types":  [
                      "fairy",
                      "steel"
                  ],
        "stats":  [
                      85,
                      75,
                      77,
                      70,
                      105,
                      94
                  ],
        "moves":  [
                      "つるぎのまい",
                      "たたきつける",
                      "でんじは",
                      "ひかりのかべ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  968,
        "name":  "ミミズズ",
        "types":  "steel",
        "stats":  [
                      70,
                      85,
                      145,
                      60,
                      55,
                      65
                  ],
        "moves":  [
                      "たいあたり",
                      "のしかかり",
                      "まきつく",
                      "とっしん"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  970,
        "name":  "キラフロル",
        "types":  [
                      "rock",
                      "poison"
                  ],
        "stats":  [
                      83,
                      55,
                      90,
                      130,
                      81,
                      86
                  ],
        "moves":  [
                      "はかいこうせん",
                      "ソーラービーム",
                      "いわおとし",
                      "どくどく"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  972,
        "name":  "ハカドッグ",
        "types":  "ghost",
        "stats":  [
                      72,
                      101,
                      100,
                      50,
                      97,
                      68
                  ],
        "moves":  [
                      "ずつき",
                      "たいあたり",
                      "とっしん",
                      "すてみタックル"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  979,
        "name":  "コノヨザル",
        "types":  [
                      "fighting",
                      "ghost"
                  ],
        "stats":  [
                      110,
                      115,
                      80,
                      50,
                      90,
                      90
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "ひっかく"
                  ],
        "role":  "物理アタッカー",
        "isMega":  false
    },
    {
        "id":  981,
        "name":  "リキキリン",
        "types":  [
                      "normal",
                      "psychic"
                  ],
        "stats":  [
                      120,
                      90,
                      70,
                      110,
                      70,
                      60
                  ],
        "moves":  [
                      "ふみつけ",
                      "たいあたり",
                      "のしかかり",
                      "とっしん"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  983,
        "name":  "ドドゲザン",
        "types":  [
                      "dark",
                      "steel"
                  ],
        "stats":  [
                      100,
                      135,
                      120,
                      60,
                      85,
                      50
                  ],
        "moves":  [
                      "ひっかく",
                      "ハサミギロチン",
                      "つるぎのまい",
                      "とっしん"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  1000,
        "name":  "サーフゴー",
        "types":  [
                      "steel",
                      "ghost"
                  ],
        "stats":  [
                      87,
                      60,
                      95,
                      133,
                      91,
                      84
                  ],
        "moves":  [
                      "かみなりパンチ",
                      "たいあたり",
                      "とっしん",
                      "はかいこうせん"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  1013,
        "name":  "ヤバソチャ",
        "types":  [
                      "grass",
                      "ghost"
                  ],
        "stats":  [
                      71,
                      60,
                      106,
                      121,
                      80,
                      70
                  ],
        "moves":  [
                      "はかいこうせん",
                      "すいとる",
                      "メガドレイン",
                      "ソーラービーム"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  1018,
        "name":  "ブリジュラス",
        "types":  [
                      "steel",
                      "dragon"
                  ],
        "stats":  [
                      90,
                      105,
                      130,
                      125,
                      65,
                      85
                  ],
        "moves":  [
                      "つるぎのまい",
                      "のしかかり",
                      "とっしん",
                      "すてみタックル"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  1019,
        "name":  "カミツオロチ",
        "types":  [
                      "grass",
                      "dragon"
                  ],
        "stats":  [
                      106,
                      80,
                      110,
                      120,
                      80,
                      44
                  ],
        "moves":  [
                      "のしかかり",
                      "とっしん",
                      "すてみタックル",
                      "ハイドロポンプ"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  false
    },
    {
        "id":  3,
        "name":  "フシギバナ",
        "types":  [
                      "grass",
                      "poison"
                  ],
        "stats":  [
                      80,
                      82,
                      83,
                      100,
                      100,
                      80
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "しめつける",
                      "つるのムチ"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  false
    },
    {
        "id":  10033,
        "name":  "メガフシギバナ",
        "types":  [
                      "grass",
                      "poison"
                  ],
        "stats":  [
                      80,
                      100,
                      123,
                      122,
                      120,
                      80
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "しめつける",
                      "つるのムチ"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10034,
        "name":  "メガリザードンX",
        "types":  [
                      "fire",
                      "dragon"
                  ],
        "stats":  [
                      78,
                      130,
                      111,
                      130,
                      85,
                      100
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "かみなりパンチ",
                      "ひっかく",
                      "つるぎのまい"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10035,
        "name":  "メガリザードンY",
        "types":  [
                      "fire",
                      "flying"
                  ],
        "stats":  [
                      78,
                      104,
                      78,
                      159,
                      115,
                      100
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "かみなりパンチ",
                      "ひっかく",
                      "つるぎのまい"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10036,
        "name":  "メガカメックス",
        "types":  "water",
        "stats":  [
                      79,
                      103,
                      120,
                      135,
                      115,
                      78
                  ],
        "moves":  [
                      "れいとうパンチ",
                      "ずつき",
                      "たいあたり",
                      "しっぽをふる"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10090,
        "name":  "メガスピアー",
        "types":  [
                      "bug",
                      "poison"
                  ],
        "stats":  [
                      65,
                      150,
                      40,
                      15,
                      80,
                      145
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "ずつき",
                      "みだれづき"
                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  10073,
        "name":  "メガピジョット",
        "types":  [
                      "normal",
                      "flying"
                  ],
        "stats":  [
                      83,
                      80,
                      80,
                      135,
                      80,
                      121
                  ],
        "moves":  [
                      "かまいたち",
                      "かぜおこし",
                      "つばさでうつ",
                      "ふきとばし"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  true
    },
    {
        "id":  26,
        "name":  "メガライチュウ",
        "types":  "electric",
        "stats":  [
                      60,
                      90,
                      55,
                      90,
                      80,
                      110
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ネコにこばん",
                      "かみなりパンチ",
                      "たたきつける"
                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  26,
        "name":  "メガライチュウ",
        "types":  "electric",
        "stats":  [
                      60,
                      90,
                      55,
                      90,
                      80,
                      110
                  ],
        "moves":  [
                      "メガトンパンチ",
                      "ネコにこばん",
                      "かみなりパンチ",
                      "たたきつける"
                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  10278,
        "name":  "メガピクシー",
        "types":  [
                      "fairy",
                      "flying"
                  ],
        "stats":  [
                      95,
                      80,
                      93,
                      135,
                      110,
                      70
                  ],
        "moves":  [

                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10037,
        "name":  "メガフーディン",
        "types":  "psychic",
        "stats":  [
                      55,
                      50,
                      65,
                      175,
                      105,
                      150
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "ずつき"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  true
    },
    {
        "id":  10279,
        "name":  "メガウツボット",
        "types":  [
                      "grass",
                      "poison"
                  ],
        "stats":  [
                      80,
                      125,
                      85,
                      135,
                      95,
                      70
                  ],
        "moves":  [

                  ],
        "role":  "特殊アタッカー",
        "isMega":  true
    },
    {
        "id":  10071,
        "name":  "メガヤドラン",
        "types":  [
                      "water",
                      "psychic"
                  ],
        "stats":  [
                      95,
                      75,
                      180,
                      130,
                      80,
                      30
                  ],
        "moves":  [
                      "ネコにこばん",
                      "れいとうパンチ",
                      "ふみつけ",
                      "ずつき"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10038,
        "name":  "メガゲンガー",
        "types":  [
                      "ghost",
                      "poison"
                  ],
        "stats":  [
                      60,
                      65,
                      80,
                      170,
                      95,
                      130
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "ずつき"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  true
    },
    {
        "id":  10039,
        "name":  "メガガルーラ",
        "types":  "normal",
        "stats":  [
                      105,
                      125,
                      100,
                      60,
                      100,
                      100
                  ],
        "moves":  [
                      "れんぞくパンチ",
                      "メガトンパンチ",
                      "ほのおのパンチ",
                      "れいとうパンチ"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10280,
        "name":  "メガスターミー",
        "types":  [
                      "water",
                      "psychic"
                  ],
        "stats":  [
                      60,
                      100,
                      105,
                      130,
                      105,
                      120
                  ],
        "moves":  [

                  ],
        "role":  "特殊アタッカー",
        "isMega":  true
    },
    {
        "id":  10040,
        "name":  "メガカイロス",
        "types":  [
                      "bug",
                      "flying"
                  ],
        "stats":  [
                      65,
                      155,
                      120,
                      65,
                      90,
                      105
                  ],
        "moves":  [
                      "はさむ",
                      "ハサミギロチン",
                      "つるぎのまい",
                      "いあいぎり"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10041,
        "name":  "メガギャラドス",
        "types":  [
                      "water",
                      "dark"
                  ],
        "stats":  [
                      95,
                      155,
                      109,
                      70,
                      130,
                      81
                  ],
        "moves":  [
                      "しめつける",
                      "ずつき",
                      "あばれる",
                      "にらみつける"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10042,
        "name":  "メガプテラ",
        "types":  [
                      "rock",
                      "flying"
                  ],
        "stats":  [
                      80,
                      135,
                      85,
                      70,
                      95,
                      150
                  ],
        "moves":  [
                      "つばさでうつ",
                      "ふきとばし",
                      "そらをとぶ",
                      "ずつき"
                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  10281,
        "name":  "メガカイリュー",
        "types":  [
                      "dragon",
                      "flying"
                  ],
        "stats":  [
                      91,
                      124,
                      115,
                      145,
                      125,
                      100
                  ],
        "moves":  [

                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10282,
        "name":  "メガメガニウム",
        "types":  [
                      "grass",
                      "fairy"
                  ],
        "stats":  [
                      80,
                      92,
                      115,
                      143,
                      115,
                      80
                  ],
        "moves":  [

                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10283,
        "name":  "メガオーダイル",
        "types":  [
                      "water",
                      "dragon"
                  ],
        "stats":  [
                      85,
                      160,
                      125,
                      89,
                      93,
                      78
                  ],
        "moves":  [

                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10045,
        "name":  "メガデンリュウ",
        "types":  [
                      "electric",
                      "dragon"
                  ],
        "stats":  [
                      90,
                      95,
                      105,
                      165,
                      110,
                      45
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "かみなりパンチ",
                      "たいあたり",
                      "とっしん"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10072,
        "name":  "メガハガネール",
        "types":  [
                      "steel",
                      "ground"
                  ],
        "stats":  [
                      75,
                      125,
                      230,
                      55,
                      95,
                      30
                  ],
        "moves":  [
                      "いあいぎり",
                      "しめつける",
                      "たたきつける",
                      "たいあたり"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10046,
        "name":  "メガハッサム",
        "types":  [
                      "bug",
                      "steel"
                  ],
        "stats":  [
                      70,
                      150,
                      140,
                      65,
                      100,
                      75
                  ],
        "moves":  [
                      "かまいたち",
                      "つるぎのまい",
                      "いあいぎり",
                      "にらみつける"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10047,
        "name":  "メガヘラクロス",
        "types":  [
                      "bug",
                      "fighting"
                  ],
        "stats":  [
                      80,
                      185,
                      115,
                      40,
                      105,
                      75
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "つのでつく",
                      "みだれづき"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10284,
        "name":  "メガエアームド",
        "types":  [
                      "steel",
                      "flying"
                  ],
        "stats":  [
                      65,
                      140,
                      110,
                      40,
                      100,
                      110
                  ],
        "moves":  [

                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10048,
        "name":  "メガヘルガー",
        "types":  [
                      "dark",
                      "fire"
                  ],
        "stats":  [
                      75,
                      90,
                      90,
                      140,
                      90,
                      115
                  ],
        "moves":  [
                      "にらみつける",
                      "かみつく",
                      "ほえる",
                      "ひのこ"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  true
    },
    {
        "id":  10049,
        "name":  "メガバンギラス",
        "types":  [
                      "rock",
                      "dark"
                  ],
        "stats":  [
                      100,
                      164,
                      150,
                      95,
                      120,
                      71
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "いあいぎり"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10065,
        "name":  "メガジュカイン",
        "types":  [
                      "grass",
                      "dragon"
                  ],
        "stats":  [
                      70,
                      110,
                      75,
                      145,
                      85,
                      145
                  ],
        "moves":  [
                      "はたく",
                      "かみなりパンチ",
                      "つるぎのまい",
                      "いあいぎり"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  true
    },
    {
        "id":  10050,
        "name":  "メガバシャーモ",
        "types":  [
                      "fire",
                      "fighting"
                  ],
        "stats":  [
                      80,
                      160,
                      80,
                      130,
                      80,
                      100
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "かみなりパンチ",
                      "ひっかく",
                      "つるぎのまい"
                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  10064,
        "name":  "メガラグラージ",
        "types":  [
                      "water",
                      "ground"
                  ],
        "stats":  [
                      100,
                      150,
                      110,
                      95,
                      110,
                      70
                  ],
        "moves":  [
                      "れいとうパンチ",
                      "たいあたり",
                      "とっしん",
                      "なきごえ"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10051,
        "name":  "メガサーナイト",
        "types":  [
                      "psychic",
                      "fairy"
                  ],
        "stats":  [
                      68,
                      85,
                      65,
                      165,
                      135,
                      100
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "なきごえ"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10066,
        "name":  "メガヤミラミ",
        "types":  [
                      "dark",
                      "ghost"
                  ],
        "stats":  [
                      50,
                      85,
                      125,
                      85,
                      115,
                      20
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "ひっかく"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10052,
        "name":  "メガクチート",
        "types":  [
                      "steel",
                      "fairy"
                  ],
        "stats":  [
                      50,
                      105,
                      125,
                      55,
                      95,
                      50
                  ],
        "moves":  [
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "はさむ",
                      "つるぎのまい"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10053,
        "name":  "メガボスゴドラ",
        "types":  "steel",
        "stats":  [
                      70,
                      140,
                      230,
                      60,
                      80,
                      50
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "いあいぎり"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10054,
        "name":  "メガチャーレム",
        "types":  [
                      "fighting",
                      "psychic"
                  ],
        "stats":  [
                      60,
                      100,
                      85,
                      80,
                      85,
                      100
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "はかいこうせん"
                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  10055,
        "name":  "メガライボルト",
        "types":  "electric",
        "stats":  [
                      70,
                      75,
                      80,
                      135,
                      80,
                      135
                  ],
        "moves":  [
                      "たいあたり",
                      "にらみつける",
                      "かみつく",
                      "ほえる"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  true
    },
    {
        "id":  10070,
        "name":  "メガサメハダー",
        "types":  [
                      "water",
                      "dark"
                  ],
        "stats":  [
                      70,
                      140,
                      70,
                      110,
                      65,
                      105
                  ],
        "moves":  [
                      "にらみつける",
                      "かみつく",
                      "ほえる",
                      "なみのり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  10087,
        "name":  "メガバクーダ",
        "types":  [
                      "fire",
                      "ground"
                  ],
        "stats":  [
                      70,
                      120,
                      100,
                      145,
                      105,
                      20
                  ],
        "moves":  [
                      "たいあたり",
                      "とっしん",
                      "なきごえ",
                      "ほえる"
                  ],
        "role":  "特殊アタッカー",
        "isMega":  true
    },
    {
        "id":  10067,
        "name":  "メガチルタリス",
        "types":  [
                      "dragon",
                      "fairy"
                  ],
        "stats":  [
                      75,
                      110,
                      110,
                      110,
                      105,
                      80
                  ],
        "moves":  [
                      "そらをとぶ",
                      "みだれづき",
                      "とっしん",
                      "なきごえ"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10056,
        "name":  "メガジュペッタ",
        "types":  "ghost",
        "stats":  [
                      64,
                      165,
                      75,
                      93,
                      83,
                      75
                  ],
        "moves":  [
                      "はかいこうせん",
                      "１０まんボルト",
                      "でんじは",
                      "かみなり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  10306,
        "name":  "メガチリーン",
        "types":  [
                      "psychic",
                      "steel"
                  ],
        "stats":  [
                      75,
                      50,
                      110,
                      135,
                      120,
                      65
                  ],
        "moves":  [

                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10057,
        "name":  "メガアブソル",
        "types":  "dark",
        "stats":  [
                      65,
                      150,
                      60,
                      115,
                      60,
                      115
                  ],
        "moves":  [
                      "ひっかく",
                      "かまいたち",
                      "つるぎのまい",
                      "いあいぎり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  10074,
        "name":  "メガオニゴーリ",
        "types":  "ice",
        "stats":  [
                      80,
                      120,
                      80,
                      120,
                      80,
                      100
                  ],
        "moves":  [
                      "ずつき",
                      "にらみつける",
                      "かみつく",
                      "れいとうビーム"
                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  10076,
        "name":  "メガメタグロス",
        "types":  [
                      "steel",
                      "psychic"
                  ],
        "stats":  [
                      80,
                      145,
                      150,
                      105,
                      110,
                      110
                  ],
        "moves":  [
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "いあいぎり",
                      "とっしん"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10308,
        "name":  "メガムクホーク",
        "types":  [
                      "fighting",
                      "flying"
                  ],
        "stats":  [
                      85,
                      140,
                      100,
                      60,
                      90,
                      110
                  ],
        "moves":  [

                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  10088,
        "name":  "メガミミロップ",
        "types":  [
                      "normal",
                      "fighting"
                  ],
        "stats":  [
                      65,
                      136,
                      94,
                      54,
                      96,
                      135
                  ],
        "moves":  [
                      "はたく",
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ"
                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  10058,
        "name":  "メガガブリアス",
        "types":  [
                      "dragon",
                      "ground"
                  ],
        "stats":  [
                      108,
                      170,
                      115,
                      120,
                      95,
                      92
                  ],
        "moves":  [
                      "つるぎのまい",
                      "いあいぎり",
                      "すなかけ",
                      "たいあたり"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10059,
        "name":  "メガルカリオ",
        "types":  [
                      "fighting",
                      "steel"
                  ],
        "stats":  [
                      70,
                      145,
                      88,
                      140,
                      70,
                      112
                  ],
        "moves":  [
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "つるぎのまい",
                      "ほえる"
                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  10060,
        "name":  "メガユキノオー",
        "types":  [
                      "grass",
                      "ice"
                  ],
        "stats":  [
                      90,
                      132,
                      105,
                      132,
                      105,
                      30
                  ],
        "moves":  [
                      "れいとうパンチ",
                      "つるぎのまい",
                      "にらみつける",
                      "しろいきり"
                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  10068,
        "name":  "メガエルレイド",
        "types":  [
                      "psychic",
                      "fighting"
                  ],
        "stats":  [
                      68,
                      165,
                      95,
                      65,
                      115,
                      110
                  ],
        "moves":  [
                      "ほのおのパンチ",
                      "れいとうパンチ",
                      "かみなりパンチ",
                      "つるぎのまい"
                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10285,
        "name":  "メガユキメノコ",
        "types":  [
                      "ice",
                      "ghost"
                  ],
        "stats":  [
                      70,
                      80,
                      70,
                      140,
                      100,
                      120
                  ],
        "moves":  [

                  ],
        "role":  "特殊アタッカー",
        "isMega":  true
    },
    {
        "id":  10286,
        "name":  "メガエンブオー",
        "types":  [
                      "fire",
                      "fighting"
                  ],
        "stats":  [
                      110,
                      148,
                      75,
                      110,
                      110,
                      75
                  ],
        "moves":  [

                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10287,
        "name":  "メガドリュウズ",
        "types":  [
                      "ground",
                      "steel"
                  ],
        "stats":  [
                      110,
                      165,
                      100,
                      65,
                      65,
                      103
                  ],
        "moves":  [

                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10069,
        "name":  "メガタブンネ",
        "types":  [
                      "normal",
                      "fairy"
                  ],
        "stats":  [
                      103,
                      60,
                      126,
                      80,
                      126,
                      50
                  ],
        "moves":  [
                      "はたく",
                      "おうふくビンタ",
                      "ほのおのパンチ",
                      "れいとうパンチ"
                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10288,
        "name":  "メガペンドラー",
        "types":  [
                      "bug",
                      "poison"
                  ],
        "stats":  [
                      60,
                      140,
                      149,
                      75,
                      99,
                      62
                  ],
        "moves":  [

                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10289,
        "name":  "メガズルズキン",
        "types":  [
                      "dark",
                      "fighting"
                  ],
        "stats":  [
                      65,
                      130,
                      135,
                      55,
                      135,
                      68
                  ],
        "moves":  [

                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10290,
        "name":  "メガシビルドン",
        "types":  "electric",
        "stats":  [
                      85,
                      145,
                      80,
                      135,
                      90,
                      80
                  ],
        "moves":  [

                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  10291,
        "name":  "メガシャンデラ",
        "types":  [
                      "ghost",
                      "fire"
                  ],
        "stats":  [
                      60,
                      75,
                      110,
                      175,
                      110,
                      90
                  ],
        "moves":  [

                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10313,
        "name":  "メガゴルーグ",
        "types":  [
                      "ground",
                      "ghost"
                  ],
        "stats":  [
                      89,
                      159,
                      105,
                      70,
                      105,
                      55
                  ],
        "moves":  [

                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  10292,
        "name":  "メガブリガロン",
        "types":  [
                      "grass",
                      "fighting"
                  ],
        "stats":  [
                      88,
                      137,
                      172,
                      74,
                      115,
                      44
                  ],
        "moves":  [

                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10293,
        "name":  "メガマフォクシー",
        "types":  [
                      "fire",
                      "psychic"
                  ],
        "stats":  [
                      75,
                      69,
                      72,
                      159,
                      125,
                      134
                  ],
        "moves":  [

                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10294,
        "name":  "メガゲッコウガ",
        "types":  [
                      "water",
                      "dark"
                  ],
        "stats":  [
                      72,
                      125,
                      77,
                      133,
                      81,
                      142
                  ],
        "moves":  [

                  ],
        "role":  "特殊アタッカー",
        "isMega":  true
    },
    {
        "id":  10295,
        "name":  "メガカエンジシ",
        "types":  [
                      "fire",
                      "normal"
                  ],
        "stats":  [
                      86,
                      88,
                      92,
                      129,
                      86,
                      126
                  ],
        "moves":  [

                  ],
        "role":  "特殊アタッカー",
        "isMega":  true
    },
    {
        "id":  10296,
        "name":  "メガフラエッテ",
        "types":  "fairy",
        "stats":  [
                      74,
                      85,
                      87,
                      155,
                      148,
                      102
                  ],
        "moves":  [

                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10314,
        "name":  "メガニャオニクス",
        "types":  "psychic",
        "stats":  [
                      74,
                      48,
                      76,
                      143,
                      101,
                      124
                  ],
        "moves":  [

                  ],
        "role":  "特殊アタッカー",
        "isMega":  true
    },
    {
        "id":  10297,
        "name":  "メガカラマネロ",
        "types":  [
                      "dark",
                      "psychic"
                  ],
        "stats":  [
                      86,
                      102,
                      88,
                      98,
                      120,
                      88
                  ],
        "moves":  [

                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10298,
        "name":  "メガガメノデス",
        "types":  [
                      "rock",
                      "fighting"
                  ],
        "stats":  [
                      72,
                      140,
                      130,
                      64,
                      106,
                      88
                  ],
        "moves":  [

                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10299,
        "name":  "メガドラミドロ",
        "types":  [
                      "poison",
                      "dragon"
                  ],
        "stats":  [
                      65,
                      85,
                      105,
                      132,
                      163,
                      44
                  ],
        "moves":  [

                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10300,
        "name":  "メガルチャブル",
        "types":  [
                      "fighting",
                      "flying"
                  ],
        "stats":  [
                      78,
                      137,
                      100,
                      74,
                      93,
                      118
                  ],
        "moves":  [

                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  10315,
        "name":  "メガケケンカニ",
        "types":  [
                      "fighting",
                      "ice"
                  ],
        "stats":  [
                      97,
                      157,
                      122,
                      62,
                      107,
                      33
                  ],
        "moves":  [

                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10302,
        "name":  "メガジジーロン",
        "types":  [
                      "normal",
                      "dragon"
                  ],
        "stats":  [
                      78,
                      85,
                      110,
                      160,
                      116,
                      36
                  ],
        "moves":  [

                  ],
        "role":  "特殊ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10303,
        "name":  "メガタイレーツ",
        "types":  "fighting",
        "stats":  [
                      65,
                      135,
                      135,
                      70,
                      65,
                      100
                  ],
        "moves":  [

                  ],
        "role":  "物理ディフェンダー",
        "isMega":  true
    },
    {
        "id":  10320,
        "name":  "メガスコヴィラン",
        "types":  [
                      "grass",
                      "fire"
                  ],
        "stats":  [
                      65,
                      138,
                      85,
                      138,
                      85,
                      75
                  ],
        "moves":  [

                  ],
        "role":  "物理アタッカー",
        "isMega":  true
    },
    {
        "id":  10321,
        "name":  "メガキラフロル",
        "types":  [
                      "rock",
                      "poison"
                  ],
        "stats":  [
                      83,
                      90,
                      105,
                      150,
                      96,
                      101
                  ],
        "moves":  [

                  ],
        "role":  "特殊アタッカー",
        "isMega":  true
    }
];

export const INITIAL_VIRTUAL_ENEMIES = [
  {
    "name": "メガリザードンY",
    "types": ["fire", "flying"],
    "stats": [78, 104, 78, 159, 115, 100],
    "role": "特殊アタッカー",
    "mainMoves": ["オーバーヒート", "ソーラービーム", "エアスラッシュ"],
    "description": "ひでり特性による圧倒的特殊炎火力。草タイプの技も使いこなす特殊エース。"
  },
  {
    "name": "メガリザードンX",
    "types": ["fire", "dragon"],
    "stats": [78, 130, 111, 130, 85, 100],
    "role": "物理アタッカー",
    "mainMoves": ["フレアドライブ", "げきりん", "じしん"],
    "description": "かたいツメ特性による物理火力。りゅうのまいを積んだ全抜きが脅威。"
  },
  {
    "name": "カイリュー",
    "types": ["dragon", "flying"],
    "stats": [91, 134, 95, 100, 100, 80],
    "role": "物理アタッカー",
    "mainMoves": ["しんそく", "じしん", "げきりん"],
    "description": "特性マルチスケイルによる高い行動保証としんそくでのスイープ性能。"
  },
  {
    "name": "ガブリアス",
    "types": ["dragon", "ground"],
    "stats": [108, 130, 95, 80, 85, 102],
    "role": "物理アタッカー",
    "mainMoves": ["じしん", "げきりん", "がんせきふうじ"],
    "description": "高い攻撃・素早さ・耐久のバランスを誇る、伝統的な物理アタッカー。"
  },
  {
    "name": "メタグロス",
    "types": ["steel", "psychic"],
    "stats": [80, 135, 130, 95, 90, 70],
    "role": "物理アタッカー",
    "mainMoves": ["コメットパンチ", "しねんのずつき", "じしん"],
    "description": "クリアボディによる能力低下無効と、優秀な耐性・物理攻撃力を併せ持つ。"
  },
  {
    "name": "ギルガルド",
    "types": ["steel", "ghost"],
    "stats": [60, 50, 140, 50, 140, 60],
    "role": "両受け・起点作成など",
    "mainMoves": ["シャドークロー", "アイアンヘッド", "キングシールド"],
    "description": "バトルスイッチ特性により、シールドフォルムとブレードフォルムを切り替える技巧派。"
  },
  {
    "name": "メガゲンガー",
    "types": ["ghost", "poison"],
    "stats": [60, 65, 80, 170, 95, 130],
    "role": "特殊アタッカー",
    "mainMoves": ["シャドーボール", "ヘドロばくだん", "マジカルシャイン"],
    "description": "かげふみ特性により相手を逃さず、極めて高い特攻と素早さから致命打を与える。"
  },
  {
    "name": "メガガルーラ",
    "types": ["normal"],
    "stats": [105, 125, 100, 60, 100, 100],
    "role": "物理アタッカー",
    "mainMoves": ["おんがえし", "グロウパンチ", "ふいうち"],
    "description": "おやこあいによる2回攻撃が極めて強力。グロウパンチで攻撃を上げつつ殴る。"
  },
  {
    "name": "ドリュウズ",
    "types": ["ground", "steel"],
    "stats": [110, 135, 60, 50, 65, 88],
    "role": "物理アタッカー",
    "mainMoves": ["じしん", "アイアンヘッド", "いわなだれ"],
    "description": "すなかき特性による砂嵐下の爆速アタッカー、または型破りによる頑丈・浮遊貫通。"
  },
  {
    "name": "ラグラージ",
    "types": ["water", "ground"],
    "stats": [100, 110, 90, 85, 90, 60],
    "role": "物理ディフェンダー",
    "mainMoves": ["じしん", "たきのぼり", "ステルスロック"],
    "description": "水・地面の優秀な耐性。ステルスロックやあくびによる起点作成や、物理受けとして優秀。"
  }
]
;
