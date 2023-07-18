const DISTANCIA_MINIMA = 1;

export default class Distancia {
    constructor(readonly valor: number) {
        if (!this.distanciaValida()) {
            throw new Error("Distancia inválida.");
        }
    }

    private distanciaValida() {
        return this.valor >= DISTANCIA_MINIMA;
    }
}