function exchange(sumUAH,currencyValue,exchangeCurrency){
    let  chooseCurrency;
    for(let currency of currencyValue){
        if(currency.currency === exchangeCurrency){
            chooseCurrency = currency;
        }
    }

    let result = sumUAH / chooseCurrency.value
    return result;
}

console.log(exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD'));