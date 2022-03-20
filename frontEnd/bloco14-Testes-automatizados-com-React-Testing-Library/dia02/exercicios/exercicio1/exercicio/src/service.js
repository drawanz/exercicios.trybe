const randomNumber = () => Math.floor(Math.random() * 101);

const toUpperCase = (string) => string.toUpperCase();

const firstLetter = (string) => string[0];

const concat = (firstStr, secondStr) => `${firstStr} ${secondStr}`;

const getDog = async () => {
  const url = 'https://dog.ceo/api/breeds/image/random'
  try {
    const request = await fetch(url);
    const result = await request.json();
    return result;
  } catch (e) {
    return e;
  }
}

module.exports = { randomNumber, toUpperCase, firstLetter, concat, getDog  };