const handlerElephants = require('../src/handlerElephants');
  
describe('Testes da função HandlerElephants', () => {
  it('com o parâmetro "count" retornar o valor 4', () => {
    const functionCount = handlerElephants('count')
    const result = 4;
    expect(functionCount).toBe(result);
  });
  it('com o parâmetro chamando "names" retornar um objeto com quatro nomes', () => {
    const functionNames = handlerElephants('names');
    const objectNames = ['Ilana', 'Orval', 'Bea', 'Jefferson'];
    expect(functionNames).toEqual(objectNames);
  })
});
