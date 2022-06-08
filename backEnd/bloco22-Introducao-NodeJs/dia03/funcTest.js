const funcTest = (number) => {
  try {
    if (typeof number !== 'number') throw new Error('Os valores devem ser numéricos');
    if(number < 0) return 'negativo';
    if(number > 0) return 'positivo';
    return 'neutro'
  } catch (error) {
    return (error.message);
  }
};

funcTest('a');

module.exports = funcTest;