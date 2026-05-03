function exchange(sumUAH,currencyValues,exchangeCurrency){
    let temp = sumUAH[0];
    sumUAH[currencyValues] = sumUAH[exchangeCurrency]
    sumUAH[exchangeCurrency] = temp;

    return sumUAH;
}

console.log(exchange(400));