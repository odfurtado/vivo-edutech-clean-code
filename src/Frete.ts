import Distancia from "./Distancia";
import Hora from "./Hora";
import PerfilDoCliente from "./PerfilCliente";

const TAXA_NOTURNA = 1.5;
const TAXA_MADRUGADA = 3;
const TAXA_DESCONTO_PERFIL_SILVER = 0.9;
const TAXA_DESCONTO_PERFIL_GOLD = 0.8;
const VALOR_FRETE_GRATIS = 0;
const VALOR_FRETE_MINIMO = 3;
const PRECISAO = 2;

export default class Frete {
    private valorFrete: number = 0;

    constructor(readonly distancia: Distancia, readonly hora: Hora, readonly perfilDoCliente: PerfilDoCliente) {
        this.calcular();
    }

    calcular() {
        if (this.ehClienteComFreteGratis()) {
            this.valorFrete = VALOR_FRETE_GRATIS;
            return;
        }
        this.aplicarCalculaDaDistancia();
        this.aplicarCalculoDaTaxaHorario();
        this.aplicarCalculoDeDescontoDoPerfilDoCliente();
        this.aplicarCalculoDeFreteMinimoEPrecisao();
    }

    private ehClienteComFreteGratis() {
        return this.perfilDoCliente.ehDiamante();
    }

    private aplicarCalculaDaDistancia() {
        return this.distancia.valor / 1000;
    }

    private aplicarCalculoDaTaxaHorario() {
        if (this.hora.ehDeMadrugada()) {
            this.valorFrete = this.valorFrete * TAXA_MADRUGADA;
        } else if (this.hora.ehNoturno()) {
            this.valorFrete = this.valorFrete * TAXA_NOTURNA;
        }
    }

    private aplicarCalculoDeDescontoDoPerfilDoCliente() {
        if (this.perfilDoCliente.ehPrata()) {
            this.valorFrete = this.valorFrete * TAXA_DESCONTO_PERFIL_SILVER
        } else if (this.perfilDoCliente.ehOuro()) {
            this.valorFrete =  this.valorFrete * TAXA_DESCONTO_PERFIL_GOLD;
        }
    }

    private aplicarCalculoDeFreteMinimoEPrecisao() {
        if (this.valorFrete < VALOR_FRETE_MINIMO) {
            this.valorFrete = VALOR_FRETE_MINIMO;
        }
        this.valorFrete = parseFloat(this.valorFrete.toFixed(PRECISAO));
    }
}