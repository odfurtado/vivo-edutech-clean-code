import calcular from '../../src/versao_2/calcular';

test("Não deve calcular frete com a distancia zerada", () => {
    const distancia = 0;
    const hora = 0;
    const perfil = "";
    expect(() => calcular(distancia, hora, perfil)).toThrowError("Distancia inválida.");
});

test("Não deve calcular frete com a distancia negativa", () => {
    const distancia = -1;
    const hora = 0;
    const perfil = "";
    expect(() => calcular(distancia, hora, perfil)).toThrowError("Distancia inválida.");
});

test("Não deve calcular frete com a hora negativa", () => {
    const distancia = 600;
    const hora = -1;
    const perfil = "";
    expect(() => calcular(distancia, hora, perfil)).toThrowError("Hora inválida.");
});

test("Não deve calcular frete com a hora maior que 23", () => {
    const distancia = 600;
    const hora = 24;
    const perfil = "";
    expect(() => calcular(distancia, hora, perfil)).toThrowError("Hora inválida.");
});

test("Não deve calcular frete com o perfil do cliente vazia/nula", () => {
    const distancia = 600;
    const hora = 18;
    const perfil = "";
    expect(() => calcular(distancia, hora, perfil)).toThrowError("Perfil do cliente inválido.");
});

test("Deve calcular o frete em horario comercial (07:00 - 17:59) - Cliente Comum", () => {
    const distancia = 4000;
    const hora = 15;
    const perfil = "R";
    const valor = calcular(distancia, hora, perfil);
    expect(valor).toBe(4);
});

test("Deve calcular o frete em horario comercial (07:00 - 17:59) - Cliente Silver", () => {
    const distancia = 4000;
    const hora = 15;
    const perfil = "S";
    const valor = calcular(distancia, hora, perfil);
    expect(valor).toBe(3.6);
});

test("Deve calcular o frete em horario comercial (07:00 - 17:59) - Cliente Gold", () => {
    const distancia = 4000;
    const hora = 15;
    const perfil = "G";
    const valor = calcular(distancia, hora, perfil);
    expect(valor).toBe(3.2);
});

test("Deve calcular o frete noturno (18:00 - 23:59) - Cliente Comum", () => {
    const distancia = 4000;
    const hora = 20;
    const perfil = "R";
    const valor = calcular(distancia, hora, perfil);
    expect(valor).toBe(6);
});

test("Deve calcular o frete noturno (18:00 - 23:59) - Cliente Silver", () => {
    const distancia = 4000;
    const hora = 20;
    const perfil = "S";
    const valor = calcular(distancia, hora, perfil);
    expect(valor).toBe(5.4);
});

test("Deve calcular o frete noturno (18:00 - 23:59) - Cliente Gold", () => {
    const distancia = 4000;
    const hora = 20;
    const perfil = "G";
    const valor = calcular(distancia, hora, perfil);
    expect(valor).toBe(4.8);
});

test("Deve calcular o frete na madrugada (00:00 - 06:59) - Cliente Comum", () => {
    const distancia = 4000;
    const hora = 4;
    const perfil = "R";
    const valor = calcular(distancia, hora, perfil);
    expect(valor).toBe(12);
});

test("Deve calcular o frete na madruga (00:00 - 06:59) - Cliente Silver", () => {
    const distancia = 4000;
    const hora = 4;
    const perfil = "S";
    const valor = calcular(distancia, hora, perfil);
    expect(valor).toBe(10.8);
});

test("Deve calcular o frete na madrugada (00:00 - 06:59) - Cliente Gold", () => {
    const distancia = 4000;
    const hora = 4;
    const perfil = "G";
    const valor = calcular(distancia, hora, perfil);
    expect(valor).toBe(9.6);
});

test("Deve calcular o frete de um cliente Diamond", () => {
    const distancia = 4000;
    const hora = 4;
    const perfil = "D";
    const valor = calcular(distancia, hora, perfil);
    expect(valor).toBe(0);
});

test("Deve calcular o frete minimo", () => {
    const distancia = 600;
    const hora = 17;
    const perfil = "R";
    const valor = calcular(distancia, hora, perfil);
    expect(valor).toBe(3);
});