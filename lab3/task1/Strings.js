function ucFirst(str) {
    if (!str) return str;
  
    return str[0].toUpperCase() + str.slice(1);
  }
  
  alert( ucFirst("john") );


  function checkSpam(str) {
    let lowerStr = str.toLowerCase();
  
    return lowerStr.includes('qwer') || lowerStr.includes('wert');
  }
  
  alert( checkSpam('buy qwer') );
  alert( checkSpam('free wert') );
  alert( checkSpam("innocent rabbit") );


  function extractCurrencyValue(str) {
    return +str.slice(1);
  }