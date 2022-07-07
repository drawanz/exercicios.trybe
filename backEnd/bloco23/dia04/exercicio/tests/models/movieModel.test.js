const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('busca por um filme', async () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
    id: 1,
  };

  const id = 1;

  // const find = async (id) => payloadMovie

  before(async () => {
    sinon.stub(connection, 'execute');
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é encontrado com sucesso', async () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.find(id);

      expect(response).to.be.a('object');
    });
  });
})

kkkkkkkkkkk
nada ahwduhawudhuawd
oow vamo pro zoom, depois a gente ve aqui