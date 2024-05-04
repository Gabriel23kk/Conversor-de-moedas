const convertButton = document.querySelector(".convert-button")

function convertValues (){
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyConvert = document.querySelector(".currency-value")

    const dolarToday = 5.2
    const convertValue = inputCurrencyValue / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"

    }).format(inputCurrencyValue)


    currencyConvert.innerHTML = new Intl.NumberFormat("en-US",{
        style: "currency",
        currency: "USD"
    }).format(convertValue)


}
convertButton.addEventListener("click", convertValues)


   