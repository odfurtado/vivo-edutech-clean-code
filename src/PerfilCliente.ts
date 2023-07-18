const PERFIL_COMUM = "R";
const PERFIL_PRATA = "S";
const PERFIL_OURO = "G";
const PERFIL_DIAMANTE = "D";

export default class PerfilDoCliente {
    constructor(readonly valor: Perfil) {
        if (!this.perfilDoClienteValido()) {
            throw new Error("Perfil do cliente inválido.");
        }
    }

    private perfilDoClienteValido() {
        return [PERFIL_COMUM, PERFIL_PRATA, PERFIL_OURO, PERFIL_DIAMANTE].includes(this.valor);
    }

    ehPadrao() {
        return this.valor === PERFIL_COMUM;
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

type Perfil = typeof PERFIL_COMUM | typeof PERFIL_PRATA | typeof PERFIL_OURO | typeof PERFIL_DIAMANTE;