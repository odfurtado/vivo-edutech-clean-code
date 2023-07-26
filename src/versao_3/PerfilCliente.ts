const PERFIL_REGULAR = "R";
const PERFIL_PRATA = "S";
const PERFIL_OURO = "G";
const PERFIL_DIAMANTE = "D";

export default class PerfilCliente {
    constructor(readonly valor: Perfil) {
        if (!this.perfilDoClienteValido()) {
            throw new Error("Perfil do cliente inválido.");
        }
    }

    private perfilDoClienteValido() {
        return [PERFIL_REGULAR, PERFIL_PRATA, PERFIL_OURO, PERFIL_DIAMANTE].includes(this.valor);
    }

    ehRegular() {
        return this.valor === PERFIL_REGULAR;
    }

    ehPrata() {
        return this.valor === PERFIL_PRATA;
    }

    ehOuro() {
        return this.valor === PERFIL_OURO;
    }

    ehDiamante() {
        return this.valor === PERFIL_DIAMANTE;
    }
}

type Perfil = typeof PERFIL_REGULAR | typeof PERFIL_PRATA | typeof PERFIL_OURO | typeof PERFIL_DIAMANTE;