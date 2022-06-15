const operacao = (param1, param2, param3) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof param1 !== 'number' || typeof param2 !== 'number' || typeof param3 !== 'number') {
      reject(new Error('Informe apenas números'));
    }

    const sum = (param1 + param2) * param3

    if (sum < 50) reject(new Error('Valor muito baixo'))

    resolve(sum);
  })

  return promise;
}

// operacao('2', 7, 10)
//   .then(b => console.log(`sucesso: ${b}`))
//   .catch(e => console.log(`erro: ${e.message}`))

module.exports = operacao;