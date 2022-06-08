const { expect } = require('chai');
const funcTest = require('../funcTest');

describe('testa se existe a function "funcTest"', () => {
    it('é uma function', () => {
        expect(funcTest).to.be.a('function');
    });
});

describe('testa os comportamentos da func testes', () => {
    it('testa se identifica números negativos', () => {
        expect(funcTest(-1)).to.be.equals('negativo');
    });

    it('testa se identifica números neutros', () => {
        expect(funcTest(0)).to.be.equals('neutro');
    });

    it('testa se identifica números positivos', () => {
        expect(funcTest(1)).to.be.equals('positivo');
    });
});

describe('testa se lança erro', () => {
    it('lança erro', () => {
        expect(funcTest('bb')).to.equals('Os valores devem ser numéricos');
    });
});
