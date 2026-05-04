const exchange = (sumUAN, currencyValue, exchangeCurrency) => {
    let chooseCurrency;
    for (let currency of currencyValue){
        if (currency.currency === exchangeCurrency){
            chooseCurrency = currency;
        }
    }
    let result = sumUAN / chooseCurrency.value
    return result;
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));