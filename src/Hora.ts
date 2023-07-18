const HORA_INICIO = 0;
const HORA_FIM = 23;
const HORARIO_COMERCIAL_INICIO = 7;
const HORARIO_NOTURNO_INICIO = 18;
const HORARIO_MADRUGADA_INICIO = 0;

export default class Hora {
    constructor(readonly valor: number) {
        if (!this.horaValida()) {
            throw new Error("Hora inválida.");
        }
    }

    private horaValida() {
        return this.valor >= HORA_INICIO && this.valor <= HORA_FIM;
    }

    ehDeMadrugada() {
        return this.valor >= HORARIO_MADRUGADA_INICIO && this.valor < HORARIO_COMERCIAL_INICIO;
    }
    
    ehHorarioComercial() {
        return this.valor >= HORARIO_COMERCIAL_INICIO && this.valor < HORARIO_NOTURNO_INICIO;
    }

    ehNoturno() {
        return this.valor >= HORARIO_NOTURNO_INICIO && this.valor <= HORA_FIM;
    }
}