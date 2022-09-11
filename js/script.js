{
    const init = () => {
      const formElement = document.querySelector(".js-form");
      
      formElement.addEventListener("input", () => {
        const result = caltulateResult();
        setResult(result);
      });
    };
  
    const caltulateResult = () => {
      const converterElement = document.querySelector(".js-PLN");
      const currencyElement = document.querySelector(".js-currency");
      
      const amount = converterElement.value;
      const currency = currencyElement.value;
      const result = amount >= 0 ? amount / currency : 0;
      return result;
    };
  
    const setResult = (result) => {
      const resultElement = document.querySelector(".js-result");
      
      resultElement.innerText = result.toFixed(2);
    };
    
    init();
  }