// api.js
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  try {
    const response = await fetch(url);
    const obj = await response.json();
      console.log(obj);
  } catch (error) {
    console.log("deu merda");
  }
}

window.onload = () => fetchCoins();

