{
    const converterElement = document.querySelector(".js-PLN");
    const currencyElement = document.querySelector(".js-currency");
    const formElement = document.querySelector(".js-form");    
    const resultElement = document.querySelector(".js-result");

    const caltulateResult = () => {
        formElement.addEventListener("input", () => {
            const amount = converterElement.value;
            const currency = currencyElement.value;
            const result = amount >= 0 ? amount / currency : 0;
            resultElement.innerText = result.toFixed(2);
        })
    };
    caltulateResult();
}