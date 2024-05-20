// 商品データの配列
const products = [
    { name: "鶏の唐揚げ弁当", code: "F001" },
    { name: "サーモンおにぎりセット", code: "F002" },
    { name: "豚の生姜焼き弁当", code: "F003" },
    { name: "牛丼弁当", code: "F004" },
    { name: "海鮮ちらし寿司", code: "F005" },
    { name: "ロースカツ弁当", code: "F006" },
    { name: "チキン南蛮弁当", code: "F007" },
    { name: "焼き鳥弁当", code: "F008" },
    { name: "ビビンバ弁当", code: "F009" },
    { name: "鮭の塩焼き弁当", code: "F010" },
    { name: "ハンバーグ弁当", code: "F011" },
    { name: "豚キムチ弁当", code: "F012" },
    { name: "鶏の照り焼き弁当", code: "F013" },
    { name: "サバの味噌煮弁当", code: "F014" },
    { name: "カツオのたたき弁当", code: "F015" },
    { name: "海老フライ弁当", code: "F016" },
    { name: "ビーフステーキ弁当", code: "F017" },
    { name: "チキンカレー弁当", code: "F018" },
    { name: "ポークジンジャー弁当", code: "F019" },
    { name: "マグロ丼弁当", code: "F020" },
    { name: "五目チャーハン弁当", code: "F021" },
    { name: "鶏肉と野菜の黒酢あん弁当", code: "F022" },
    { name: "豚肉のしょうが焼き弁当", code: "F023" },
    { name: "鶏肉のピリ辛焼き弁当", code: "F024" },
    { name: "鯖の蒲焼き弁当", code: "F025" },
    { name: "えびピラフ弁当", code: "F026" },
    { name: "ベジタブルカレー弁当", code: "F027" },
    { name: "チーズインハンバーグ弁当", code: "F028" },
    { name: "さばの味噌煮込み弁当", code: "F029" },
    { name: "鶏肉のレモンペッパー焼き弁当", code: "F030" },
    { name: "豚肉とキャベツの味噌炒め弁当", code: "F031" },
    { name: "チキンと野菜のトマト煮込み弁当", code: "F032" },
    { name: "海鮮サラダ弁当", code: "F033" },
    { name: "ローストビーフ丼弁当", code: "F034" },
    { name: "鶏肉のから揚げ弁当", code: "F035" },
    { name: "ミートボールスパ", code: "F036"},
   { name: "豚肉の角煮弁当", code: "F037" },
{ name: "キノコと鶏肉のクリーム煮弁当", code: "F038" },
{ name: "鮭のホイル焼き弁当", code: "F039" },
{ name: "スパイシーチキンカレー弁当", code: "F040" },
{ name: "和風おろしハンバーグ弁当", code: "F041" },
{ name: "タコライス弁当", code: "F042" },
{ name: "豚肉の生姜焼き弁当", code: "F043" },
{ name: "牛肉のすき焼き弁当", code: "F044" },
{ name: "鶏肉の塩麹焼き弁当", code: "F045" },
{ name: "シーフードミックスフライ弁当", code: "F046" },
{ name: "鶏肉と野菜のバジル炒め弁当", code: "F047" }, 
];

   // 商品リストを表示
    const productList = document.getElementById('productList');
    products.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.name} (${product.code})`;
        productList.appendChild(li);
    });


const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'ja-JP';
recognition.interimResults = false;
recognition.continuous = false;

document.getElementById('startButton').addEventListener('click', () => {
    recognition.start();
    document.getElementById('statusMessage').textContent = "音声認識中...";
});

recognition.onresult = (event) => {
    const text = event.results[event.results.length - 1][0].transcript;
    document.getElementById('statusMessage').textContent = "解析完了";

    // 入力されたテキストに部分的に一致するすべての商品を検索
    const matches = products.filter(product => product.name.includes(text));

    const resultElement = document.getElementById('result');
    resultElement.innerHTML = '';

    if (matches.length > 0) {
        matches.forEach(product => {
            const productElement = document.createElement('div');
            productElement.textContent = `${product.name} - 商品コード: ${product.code}`;
            resultElement.appendChild(productElement);
        });
    } else {
        resultElement.textContent = "該当するお弁当が見つかりませんでした。";
    }
};

recognition.onerror = (event) => {
    document.getElementById('statusMessage').textContent = "エラーが発生しました: " + event.error;
};
