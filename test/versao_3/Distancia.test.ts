import Distancia from '../../src/versao_3/Distancia';

test("Não deve criar uma Distancia com o valor menor que 1", () => {
    const distancia = 0;
    expect(() => new Distancia(distancia)).toThrowError("Distancia inválida.");
});


