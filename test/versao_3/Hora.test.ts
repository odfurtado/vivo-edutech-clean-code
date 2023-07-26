import exp from 'constants';
import Hora from '../../src/versao_3/Hora';

test("Não deve criar uma Hora com o valor negativo", () => {
    expect(() => new Hora(-1)).toThrowError("Hora inválida.");
});

test("Não deve criar uma Hora com o valor maior que 23", () => {
    expect(() => new Hora(24)).toThrowError("Hora inválida.");
});

test("Deve criar uma Hora no horario comercial", () => {
    const hora = new Hora(10);
    expect(hora.ehDeMadrugada()).toBeFalsy();
    expect(hora.ehNoturno()).toBeFalsy();
    expect(hora.ehHorarioComercial()).toBeTruthy();
});

test("Deve criar uma Hora no horario noturno", () => {
    const hora = new Hora(20);
    expect(hora.ehDeMadrugada()).toBeFalsy();
    expect(hora.ehNoturno()).toBeTruthy();
    expect(hora.ehHorarioComercial()).toBeFalsy();
});

test("Deve criar uma Hora na madrugada", () => {
    const hora = new Hora(4);
    expect(hora.ehDeMadrugada()).toBeTruthy();
    expect(hora.ehNoturno()).toBeFalsy();
    expect(hora.ehHorarioComercial()).toBeFalsy();
});