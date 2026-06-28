async function getData() {
  let symbol = document.getElementById("symbol").value;

  let url = `https://query1.finance.yahoo.com/v7/finance/quote?symbols=${symbol}`;

  try {
    let res = await fetch(url);
    let data = await res.json();

    let quote = data.quoteResponse.result[0];

    document.getElementById("result").innerHTML = `
      <h2>${quote.symbol}</h2>
      <p>Fiyat: ${quote.regularMarketPrice}</p>
      <p>Değişim: ${quote.regularMarketChangePercent.toFixed(2)}%</p>
    `;
  } catch (err) {
    document.getElementById("result").innerHTML = "Veri alınamadı!";
  }
}
