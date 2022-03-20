const service = require('./service')

describe('testa as funções do arquivo service', () =>{
  it('uma função que gere um número aleatório', () => {
    service.randomNumber = jest.fn().mockReturnValue(10); //mockando o valor fixo de 10 para as chamadas da função randomNumber

    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  })

  it('deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo.', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);

    service.randomNumber(2, 1);
    expect(service.randomNumber).toBeCalled();
    expect(service.randomNumber).toBeCalledTimes(1);
    expect(service.randomNumber).toBeCalledWith(2, 1);
  })

  it('Use a mesma função do primeiro exercício', () => {
    let mockRandom = jest.spyOn(service, 'randomNumber')
      .mockImplementation((a, b, c) => a*b*c)

    expect(mockRandom(2, 2, 3)).toBe(12);
    expect(mockRandom).toBeCalled();
    expect(mockRandom).toBeCalledTimes(1)
    expect(mockRandom).toBeCalledWith(2, 2, 3);

    mockRandom.mockReset();
    mockRandom = jest.spyOn(service, 'randomNumber')
      .mockImplementation((a) => 2 * a);
    
    expect(mockRandom(2)).toBe(4);
    expect(mockRandom).toBeCalled();
    expect(mockRandom).toBeCalledTimes(1);
    expect(mockRandom).toBeCalledWith(2);
  })

  it('testando toUpperCase', () => {
    const mockCase = jest.spyOn(service, 'toUpperCase')
      .mockImplementation((str) => str.toLowerCase());

    expect(mockCase('OLA')).toBe('ola');
    expect(mockCase).toBeCalled();
    expect(mockCase).toBeCalledTimes(1);
    expect(mockCase).toBeCalledWith('OLA');
    expect(service.toUpperCase('HELLO')).toBe('hello')

    mockCase.mockRestore();
    expect(service.toUpperCase('hello')).toBe('HELLO')
  })

  it('testando firstLetter', () => {
    const mockLetter = jest.fn().mockImplementation((str) => str[str.length -1]);

    expect(mockLetter('abc')).toBe('c');
    expect(mockLetter).toBeCalled();
    expect(mockLetter).toBeCalledTimes(1);
    expect(mockLetter).toBeCalledWith('abc');
  })
  
  it('testando concat', () => {
    const mockConcat = jest.fn().mockImplementation((str1, str2, str3) => `${str1}${str2}${str3}`);

    expect(mockConcat('a', 'b', 'c')).toBe('abc');
    expect(mockConcat).toBeCalledTimes(1);
    expect(mockConcat).toBeCalledWith('a', 'b', 'c');
  })

  it('fetch a dog picture', () => {
    // const pic = {
    //   message: "https://images.dog.ceo/breeds/terrier-cairn/n02096177_2687.jpg",
    //   status: "success"
    // }

    // global.fetch = jest.fn(async () => ({
    //   json: async () => pic
    // }))
    

  })
})
