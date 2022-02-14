// api.js
const fetchCoins = async () => {
  const url = 'https://api.coincap.io/v2/assets';

  try {
    const response = await fetch(url);
    const obj = await response.json();
    return obj;
  } catch (error) {
    console.log("deu merda");
  }
}
await fetchCoins()

window.onload = () => {
  // console.log(await fetchCoins());
  // teste();
}  
