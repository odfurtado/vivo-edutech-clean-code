function calcular(d: number, h: number, p: string) {

    if (d != undefined && d > 0) {

        if (h != undefined && h >= 0 && h <= 23) {

            if (p != null && p != undefined && p != "") {

                let v1 = 0;
                let v2 = 0;

                if (h >= 7 && h < 18) {
                    v1 = d / 1000;
                }
            
                if (h >= 18 && h < 23) {
                    v1 = (d / 1000) * 1.5;
                }

                if (h >= 0 && h < 7 ) {
                    v1 = (d / 1000) * 3;
                }

                v2 = v1;

                if (p === "S") {
                    v2 = v1 * 0.9
                }

                if (p === "G") {
                    v2 = v1 * 0.8;
                }

                if (p === "D") {
                    return 0;
                }

                if (v2 < 3) {

                    return 3;
                } else {

                    return parseFloat(v2.toFixed(2));
                }

            } else {
                
                return -3;
            }

        } else {

            return -2;
        }
    } else {

        return -1;
    }
}

export default calcular;