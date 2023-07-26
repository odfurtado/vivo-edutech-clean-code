import PerfilCliente from '../../src/versao_3/PerfilCliente';

test("Não deve criar um PerfilCliente com o valor vazia/nula", () => {
    expect(() => new PerfilCliente("" as any)).toThrowError("Perfil do cliente inválido.");
});

test("Não deve criar um PerfilCliente com o valor inválido", () => {
    expect(() => new PerfilCliente("J" as any)).toThrowError("Perfil do cliente inválido.");
});

test("Deve criar um PerfilCliente Regular", () => {
    const perfilCliente = new PerfilCliente("R");
    expect(perfilCliente.ehRegular()).toBeTruthy();
    expect(perfilCliente.ehPrata()).toBeFalsy();
    expect(perfilCliente.ehOuro()).toBeFalsy();
    expect(perfilCliente.ehDiamante()).toBeFalsy();
});

test("Deve criar um PerfilCliente Prata", () => {
    const perfilCliente = new PerfilCliente("S");
    expect(perfilCliente.ehRegular()).toBeFalsy();
    expect(perfilCliente.ehPrata()).toBeTruthy();
    expect(perfilCliente.ehOuro()).toBeFalsy();
    expect(perfilCliente.ehDiamante()).toBeFalsy();
});

test("Deve criar um PerfilCliente Ouro", () => {
    const perfilCliente = new PerfilCliente("G");
    expect(perfilCliente.ehRegular()).toBeFalsy();
    expect(perfilCliente.ehPrata()).toBeFalsy();
    expect(perfilCliente.ehOuro()).toBeTruthy();
    expect(perfilCliente.ehDiamante()).toBeFalsy();
});

test("Deve criar um PerfilCliente Diamante", () => {
    const perfilCliente = new PerfilCliente("D");
    expect(perfilCliente.ehRegular()).toBeFalsy();
    expect(perfilCliente.ehPrata()).toBeFalsy();
    expect(perfilCliente.ehOuro()).toBeFalsy();
    expect(perfilCliente.ehDiamante()).toBeTruthy();
});