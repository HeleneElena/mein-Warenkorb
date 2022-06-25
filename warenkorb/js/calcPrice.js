function calcPrice() {
    const cartWrapper = document.querySelector('.cart-wrapper'); // mein Korb
    const warenArr = cartWrapper.querySelectorAll('[data-id]'); // Waren im Korb
    const gesamtSumme = document.querySelector('.total-price'); 

    let totalPrice = 0;

    warenArr.forEach((item) => {
        console.log(item);

        const mengeWare = item.querySelector('[data-counter]').innerText;
        const priceWare = item.querySelector('.price__currency .value').innerText; 

        console.log(mengeWare);
        console.log(priceWare);

        totalPrice += parseInt(mengeWare) * parseInt(priceWare);
        console.log(totalPrice);
        
    })
    gesamtSumme.innerText = totalPrice;
}