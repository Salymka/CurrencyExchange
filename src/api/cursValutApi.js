const getCurrencyExchange = async () => {

    try {
        const response =  await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchangenew?json')
        const currencyData =  await response.json();
        currencyData.push({
            r030: 980,
            txt: 'Українська Гривня',
            rate: 1,
            cc: 'UAH',
            exchangedate: new Date().toLocaleDateString().replace('/', '.')
        })
        return currencyData
    } catch (e) {
        console.log({message: "No Data"})
    }
}
export default getCurrencyExchange;