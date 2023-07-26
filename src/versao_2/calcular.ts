const DISTANCIA_MINIMA = 1;
const HORA_INICIO = 0;
const HORA_FIM = 23;
const HORARIO_COMERCIAL_INICIO = 7;
const HORARIO_NOTURNO_INICIO = 18;
const HORARIO_MADRUGADA_INICIO = 0;
const PERFIL_REGULAR = "R";
const PERFIL_PRATA = "S";
const PERFIL_OURO = "G";
const PERFIL_DIAMANTE = "D";
const TAXA_NOTURNA = 1.5;
const TAXA_MADRUGADA = 3;
const TAXA_DESCONTO_PERFIL_PRATA = 0.9;
const TAXA_DESCONTO_PERFIL_OURO = 0.8;
const VALOR_FRETE_GRATIS = 0;
const VALOR_FRETE_MINIMO = 3;
const PRECISAO = 2;

function distanciaValida(distancia: number) {
    return distancia >= DISTANCIA_MINIMA;
}

function horaValida(horaDoPedido: number) {
    return horaDoPedido >= HORA_INICIO && horaDoPedido <= HORA_FIM;
}

function perfilDoClienteValido(perfilDoCliente: string) {
    return perfilDoCliente === PERFIL_REGULAR || perfilDoCliente === PERFIL_PRATA || 
    perfilDoCliente === PERFIL_OURO || perfilDoCliente === PERFIL_DIAMANTE;
}

function aplicarCalculoDaDistancia(distancia: number) {
    return distancia / 1000;
}

function aplicarCalculoDaTaxaDeHorario(valor: number, horaDoPedido: number) {
    if (horaDoPedido >= HORARIO_NOTURNO_INICIO && horaDoPedido < HORA_FIM) {
        return  valor * TAXA_NOTURNA;
    } else if (horaDoPedido >= HORARIO_MADRUGADA_INICIO && horaDoPedido < HORARIO_COMERCIAL_INICIO) {
        return valor * TAXA_MADRUGADA;
    }
    //Valor do Horario Comercial
    return valor;
}

function aplicarCalculoDoDescontoDoCliente(valor: number, perfilDoCliente: string) {
    if (perfilDoCliente === PERFIL_PRATA) {
        return valor * TAXA_DESCONTO_PERFIL_PRATA;
    } else if (perfilDoCliente === PERFIL_OURO) {
        return valor * TAXA_DESCONTO_PERFIL_OURO;
    } 
    return valor;
}

function aplicarCalculoDoValorMinimoEPrecisao(valor: number) {
    if (valor < VALOR_FRETE_MINIMO) {
        return VALOR_FRETE_MINIMO;
    }
    return parseFloat(valor.toFixed(PRECISAO));
}

function validarParametrosEntrada(distancia: number, horaDoPedido: number, perfilDoCliente: string) {
    if (!distanciaValida(distancia)) {
        throw new Error("Distancia inválida.");
    }
    if (!horaValida(horaDoPedido)) {
        throw new Error("Hora inválida.");
    }
    if (!perfilDoClienteValido(perfilDoCliente)) {
        throw new Error("Perfil do cliente inválido.");
    }
}

function calcularFrete(distancia: number, horaDoPedido: number, perfilDoCliente: string) {
    validarParametrosEntrada(distancia, horaDoPedido, perfilDoCliente);
    if (perfilDoCliente === PERFIL_DIAMANTE) {
        return VALOR_FRETE_GRATIS;
    }
    let valorCalculadoDaDistancia = aplicarCalculoDaDistancia(distancia);
    let valorCalculadoDaTaxaDeHorario = aplicarCalculoDaTaxaDeHorario(valorCalculadoDaDistancia, horaDoPedido);
    let valorCalculadoComDescontoDoCliente = aplicarCalculoDoDescontoDoCliente(valorCalculadoDaTaxaDeHorario, perfilDoCliente);
    return aplicarCalculoDoValorMinimoEPrecisao(valorCalculadoComDescontoDoCliente);
}

export default calcularFrete;