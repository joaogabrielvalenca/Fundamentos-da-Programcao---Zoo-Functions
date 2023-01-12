const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('com o parâmetro "count" retornar o valor 4', () => {
    const functionCount = handlerElephants('count');
    const result = 4;
    expect(functionCount).toBe(result);
  });
  it('com o parâmetro "names" retornar um objeto com quatro nomes', () => {
    const functionNames = handlerElephants('names');
    const objectNames = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(functionNames).toEqual(objectNames);
  });
  it('com o parâmetro "averageAge" retornar a média de idade dos elefantes', () => {
    const functionAverage = handlerElephants('averageAge');
    const average = 10.5;
    expect(functionAverage).toBe(average);
  });
  it('com o parâmetro "location" retornar NW', () => {
    const functionLocation = handlerElephants('location');
    const location = 'NW';
    expect(functionLocation).toEqual(location);
  });
  it('com o parâmetro "popularity" retornar maior ou igual que 5', () => {
    const functionPopularity = handlerElephants('popularity');
    const populationNum = 5;
    expect(functionPopularity).toBeGreaterThanOrEqual(populationNum);
  });
  it('com o parâmetro "availability" retornar que não está disponível na segunda', () => {
    const functionAvailability = handlerElephants('availability');
    const testDay = 'Monday';
    expect(functionAvailability).not.toContain(testDay);
  });
  it('se não passar parâmetro nenhum retorna undefined', () => {
    const functionUndefined = handlerElephants();
    const result = undefined;
    expect(functionUndefined).toBe(result);
  });
  it('se não passar string retornar mensagem', () => {
    const functionNotString = handlerElephants(123);
    const returnError = 'Parâmetro inválido, é necessário uma string';
    expect(functionNotString).toEqual(returnError);
  });
});
