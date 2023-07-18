const PERFIL_COMUM = "R";
const PERFIL_SILVER = "S";
const PERFIL_GOLD = "G";
const PERFIL_DIAMOND = "D";
const HORARIO_COMERCIAL_INICIO = 7;
const HORARIO_NOTURNO_INICIO = 18;
const HORARIO_MADRUGADA_INICIO = 0;
const HORA_INICIO = 0;
const HORA_FIM = 23;
const VALOR_FRETE_MINIMO = 3;
const DISTANCIA_MINIMA = 1;
const TAXA_NOTURNA = 1.5;
const TAXA_MADRUGADA = 3;
const TAXA_DESCONTO_PERFIL_SILVER = 0.9;
const TAXA_DESCONTO_PERFIL_GOLD = 0.8;
const VALOR_FRETE_GRATIS = 0;
const PRECISAO = 2;

function calcularFrete(distancia: number, hora: number, perfilDoCliente: string) {
    validarParametrosEntrada(distancia, hora, perfilDoCliente);
    if (ehClienteComFreteGratis(perfilDoCliente)) {
        return VALOR_FRETE_GRATIS;
    }
    let valorDaDistancia = aplicarCalculaDaDistancia(distancia);
    let valorComTaxaDeHorario = aplicarCalculoDaTaxaHorario(valorDaDistancia, hora);
    let valorComDescontoDoPerfil = aplicarCalculoDeDescontoDoPerfilDoCliente(valorComTaxaDeHorario, perfilDoCliente);
    return aplicarCalculoDeFreteMinimoEPrecisao(valorComDescontoDoPerfil);
}

function validarParametrosEntrada(distancia: number, hora: number, perfilDoCliente: string) {
    if (!distanciaValida(distancia)) {
        throw new Error("Distancia inválida.");
    }
    if (!horaValida(hora)) {
        throw new Error("Hora inválida.");
    }
    if (!perfilDoClienteValido(perfilDoCliente)) {
        throw new Error("Perfil do cliente inválido.");
    }
}

function distanciaValida(distancia: number) {
    return distancia >= DISTANCIA_MINIMA;
}

function horaValida(hora: number) {
    return hora >= HORA_INICIO && hora <= HORA_FIM;
}

function perfilDoClienteValido(perfilDoCliente: string) {
    return perfilDoCliente === PERFIL_COMUM || perfilDoCliente === PERFIL_SILVER || 
        perfilDoCliente === PERFIL_GOLD || perfilDoCliente === PERFIL_DIAMOND;
}

function ehClienteComFreteGratis(perfilDoCliente: string) {
    return perfilDoCliente === PERFIL_DIAMOND;
}

function aplicarCalculaDaDistancia(distancia: number) {
    return distancia / 1000;
}

function aplicarCalculoDaTaxaHorario(valor: number, hora: number) {
    if (ehDeMadrugada(hora)) {
        return valor * TAXA_MADRUGADA;
    } else if (ehHorarioComercial(hora)) {
        return valor;
    } 
    return valor * TAXA_NOTURNA;
}

function ehDeMadrugada(hora: number) {
    return hora >= HORARIO_MADRUGADA_INICIO && hora < HORARIO_COMERCIAL_INICIO;
}

function ehHorarioComercial(hora: number) {
    return hora >= HORARIO_COMERCIAL_INICIO && hora < HORARIO_NOTURNO_INICIO;
}

function aplicarCalculoDeDescontoDoPerfilDoCliente(valor: number, perfilDoCliente: string) {
    if (perfilDoCliente === PERFIL_SILVER) {
        return valor * TAXA_DESCONTO_PERFIL_SILVER
    } else if (perfilDoCliente === PERFIL_GOLD) {
        return  valor * TAXA_DESCONTO_PERFIL_GOLD;
    }
    return valor;
}

function aplicarCalculoDeFreteMinimoEPrecisao(valor: number) {
    return valor < VALOR_FRETE_MINIMO ? 
        VALOR_FRETE_MINIMO : 
        parseFloat(valor.toFixed(PRECISAO));
}

export default calcularFrete;