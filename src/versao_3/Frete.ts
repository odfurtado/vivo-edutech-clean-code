import Distancia from "./Distancia";
import Hora from "./Hora";
import PerfilCliente from "./PerfilCliente";

const TAXA_NOTURNA = 1.5;
const TAXA_MADRUGADA = 3;
const TAXA_DESCONTO_PERFIL_PRATA = 0.9;
const TAXA_DESCONTO_PERFIL_OURO = 0.8;
const VALOR_FRETE_GRATIS = 0;
const VALOR_FRETE_MINIMO = 3;
const PRECISAO = 2;

export default class Frete {
    readonly distancia: Distancia;
    readonly hora: Hora;
    readonly perfilDoCliente: PerfilCliente;

    constructor(valorDistancia: number, valorHora: number, valorPerfilDoCliente: string) {
        this.distancia = new Distancia(valorDistancia);
        this.hora = new Hora(valorHora);
        this.perfilDoCliente = new PerfilCliente(valorPerfilDoCliente as any);
    }

    private aplicarCalculoDaDistancia() {
        return this.distancia.valor / 1000;
    }
    
    private aplicarCalculoDaTaxaDeHorario(valor: number) {
        if (this.hora.ehNoturno()) {
            return  valor * TAXA_NOTURNA;
        } else if (this.hora.ehDeMadrugada()) {
            return valor * TAXA_MADRUGADA;
        }
        return valor;
    }
    
    private aplicarCalculoDoDescontoDoCliente(valor: number) {
        if (this.perfilDoCliente.ehPrata()) {
            return valor * TAXA_DESCONTO_PERFIL_PRATA;
        } else if (this.perfilDoCliente.ehOuro()) {
            return valor * TAXA_DESCONTO_PERFIL_OURO;
        } 
        return valor;
    }
    
    private aplicarCalculoDoValorMinimoEPrecisao(valor: number) {
        if (valor < VALOR_FRETE_MINIMO) {
            return VALOR_FRETE_MINIMO;
        }
        return parseFloat(valor.toFixed(PRECISAO));
    }
    
    calcular() {
        if (this.perfilDoCliente.ehDiamante()) {
            return VALOR_FRETE_GRATIS;
        }
        let valorCalculadoDaDistancia = this.aplicarCalculoDaDistancia();
        let valorCalculadoDaTaxaDeHorario = this.aplicarCalculoDaTaxaDeHorario(valorCalculadoDaDistancia);
        let valorCalculadoComDescontoDoCliente = this.aplicarCalculoDoDescontoDoCliente(valorCalculadoDaTaxaDeHorario);
        return this.aplicarCalculoDoValorMinimoEPrecisao(valorCalculadoComDescontoDoCliente);
    }
}