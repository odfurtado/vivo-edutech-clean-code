const TABLE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function calcular(str: string) {
    let concatenado = "";
    let saida = "";
    let pos = 0;

    if (str == null || str == undefined || str === "") {
        return -1;
    }

    for (let i = 0; i < str.length; i++) {
        concatenado += str[i].charCodeAt(0).toString(2).padStart(8,"0");

    }

    while (concatenado.length != 0) {

        if (concatenado.length > 6) {
            pos = parseInt(concatenado.slice(0, 6).padStart(8, "0"), 2);
            concatenado = concatenado.slice(6);
            saida += TABLE.charAt(pos);

        } 
        else {
            pos = parseInt(concatenado.padEnd(6, "0").padStart(8, "0"), 2);
            concatenado = "";
            saida += TABLE.charAt(pos);

        }
    }
    const falta = saida.length % 4;
    
    return saida.padEnd(saida.length + falta, "=");
}

console.log(calcular("hoje vamos falar sobre clean code"));