let converterElement = document.querySelector(".js-PLN");
let formElement = document.querySelector(".js-form");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");



formElement.addEventListener("input", () => {
    let amount = converterElement.value;
    let currency = currencyElement.value;

    let result = amount / currency;

    resultElement.innerText = result.toFixed(2);
});