// JSONファイルからデータを読み込む
fetch('products.json')
  .then(response => response.json())
  .then(data => {
    const products = data;

    // 商品リストを表示
    const productList = document.getElementById('productList');
    products.forEach(product => {
      const li = document.createElement('li');
      li.textContent = `${product.name} (${product.code})`;
      productList.appendChild(li);
    });

    // 音声認識の処理
    // ...
  })
  .catch(error => console.error('JSONファイルの読み込みエラー:', error));