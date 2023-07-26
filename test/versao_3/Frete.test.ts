import Frete from '../../src/versao_3/Frete';

test("Deve calcular o frete em horario comercial (07:00 - 17:59) - Cliente Comum", () => {
    const distancia = 4000;
    const hora = 15;
    const perfil = "R";
    const valor = new Frete(distancia, hora, perfil).calcular();
    expect(valor).toBe(4);
});

test("Deve calcular o frete em horario comercial (07:00 - 17:59) - Cliente Silver", () => {
    const distancia = 4000;
    const hora = 15;
    const perfil = "S";
    const valor = new Frete(distancia, hora, perfil).calcular();
    expect(valor).toBe(3.6);
});

test("Deve calcular o frete em horario comercial (07:00 - 17:59) - Cliente Gold", () => {
    const distancia = 4000;
    const hora = 15;
    const perfil = "G";
    const valor = new Frete(distancia, hora, perfil).calcular();
    expect(valor).toBe(3.2);
});

test("Deve calcular o frete noturno (18:00 - 23:59) - Cliente Comum", () => {
    const distancia = 4000;
    const hora = 20;
    const perfil = "R";
    const valor = new Frete(distancia, hora, perfil).calcular();
    expect(valor).toBe(6);
});

test("Deve calcular o frete noturno (18:00 - 23:59) - Cliente Silver", () => {
    const distancia = 4000;
    const hora = 20;
    const perfil = "S";
    const valor = new Frete(distancia, hora, perfil).calcular();
    expect(valor).toBe(5.4);
});

test("Deve calcular o frete noturno (18:00 - 23:59) - Cliente Gold", () => {
    const distancia = 4000;
    const hora = 20;
    const perfil = "G";
    const valor = new Frete(distancia, hora, perfil).calcular();
    expect(valor).toBe(4.8);
});

test("Deve calcular o frete na madrugada (00:00 - 06:59) - Cliente Comum", () => {
    const distancia = 4000;
    const hora = 4;
    const perfil = "R";
    const valor = new Frete(distancia, hora, perfil).calcular();
    expect(valor).toBe(12);
});

test("Deve calcular o frete na madruga (00:00 - 06:59) - Cliente Silver", () => {
    const distancia = 4000;
    const hora = 4;
    const perfil = "S";
    const valor = new Frete(distancia, hora, perfil).calcular();
    expect(valor).toBe(10.8);
});

test("Deve calcular o frete na madrugada (00:00 - 06:59) - Cliente Gold", () => {
    const distancia = 4000;
    const hora = 4;
    const perfil = "G";
    const valor = new Frete(distancia, hora, perfil).calcular();
    expect(valor).toBe(9.6);
});

test("Deve calcular o frete de um cliente Diamond", () => {
    const distancia = 4000;
    const hora = 4;
    const perfil = "D";
    const valor = new Frete(distancia, hora, perfil).calcular();
    expect(valor).toBe(0);
});

test("Deve calcular o frete minimo", () => {
    const distancia = 600;
    const hora = 17;
    const perfil = "R";
    const valor = new Frete(distancia, hora, perfil).calcular();
    expect(valor).toBe(3);
});