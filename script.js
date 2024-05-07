const convertButton = document.querySelector(".convert-button")
const option = document.querySelector(".option-two")
const optionConvert = document.querySelector(".option-one")




const realToday = 1
const dolarToday = 5.2
const euroToday = 6.2
const libraToday = 2.3
const bitCoinToday = 300.2 

function convertValues() {
    
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyConvert = document.querySelector(".currency-value")
    const inputCurrencyValue = document.querySelector(".input-currency").value
    // formatação nas moedas de cima  //
    if (optionConvert.value == "Real"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }
    if (optionConvert.value == "Dolar"){
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }
    if (optionConvert.value == "libra"){
        currencyConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }


    //caso o segundo select esteja selecionado a moeda dolar, podera fazer a conversão nas seguintes moedas//
    if (option.value == "dolar" && optionConvert.value == "Dolar") {
        currencyConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    } else if (option.value == "dolar" && optionConvert.value == "Real"){
        currencyConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    } else if (option.value == "dolar" && optionConvert.value == "libra"){
        currencyConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * 1.26)
    }
    //caso o segundo select esteja selecionado a moeda euro, podera fazer a conversão nas seguintes moedas //
    if (option.value == "euro" && optionConvert.value == "Dolar") {
        currencyConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 0.93)
        
    } else if (option.value =="euro" && optionConvert.value == "Real"){
        currencyConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    } else if (option.value == "euro" && optionConvert.value == "libra"){
        currencyConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * 1.16)
    }

    //caso o segundo select esteja selecionado a moeda Bitcoin, podera fazer a conversão nas seguintes moedas //
    if (option.value == "BitCoin" && optionConvert.value == "Real"){
        currencyConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitCoinToday)
    } else if (option.value == "BitCoin" && optionConvert.value == "Dolar"){
        currencyConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * 0.16)
    } else if (option.value == "BitCoin" && optionConvert.value == "libra"){
        currencyConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue * 0.20)
    }

//caso o segundo select esteja selecionado a moeda libra, podera fazer a conversão nas seguintes moedas //
    if (option.value == "Libra" && optionConvert.value == "Real"){
        currencyConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    } else if (option.value == "Libra" && optionConvert.value == "Dolar"){
        currencyConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * 1.26)
    } else if (option.value == "Libra" && optionConvert.value == "libra"){
        currencyConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }
}
// mudança na logo e no nome da meoda que vai ser convertida //
function mudancaDeValor (){
    const nameAlterar = document.querySelector(".currencyName")
    const imgAlterar = document.querySelector(".pais")
    
    if (option.value == "dolar"){
        imgAlterar.src = "./assets/estados-unidos1.png"
        nameAlterar.innerHTML = "Dólar Americano"
    }
    if (option.value == "euro") {
        imgAlterar.src = "./assets/logoEuro.png"
        nameAlterar.innerHTML = "Euro"
    }
    if (option.value == "Libra"){
        imgAlterar.src = "./assets/libra1.png"
        nameAlterar.innerHTML = "Libra"
    }
    if (option.value == "BitCoin"){
        imgAlterar.src = "./assets/bitcoin1.png"
        nameAlterar.innerHTML = "Bit Coin"
    }
    

    
convertValues()

}
// Mudança na logo e no nome da moeda de cima //
function selectOne (){
    const imgalt = document.querySelector(".trocaPais")
    const name = document.getElementById("name")

    if (optionConvert.value == "Real"){
        imgalt.src = "./assets/brasil 2.png"
        name.innerHTML = "Real"
    }
    if (optionConvert.value == "Dolar"){
        imgalt.src = "./assets/estados-unidos1.png"
        name.innerHTML = "Dólar Americano"
             
    }
    if (optionConvert.value == "libra"){
        imgalt.src = "./assets/libra1.png"
        name.innerHTML = "Libra"
    }
    convertValues()
}

optionConvert.addEventListener("change", selectOne)
option.addEventListener("change", mudancaDeValor)
convertButton.addEventListener("click", convertValues)


