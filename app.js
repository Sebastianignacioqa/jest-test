const sum = (a,b) => {
    return a+b
}

console.log(sum(7,3));


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = (valueInDollar) => {
    let valueInYen = valueInDollar*110.59;
    return valueInYen;

}

const fromYenToPound = (valueInYen) => {
    let valueInPound = valueInYen*0.00658;
    return valueInPound;
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound  };
