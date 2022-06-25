'use strict'
const cartWrapper = document.querySelector('.cart-wrapper'); // mein Warenkorb
	  

window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
       const card = event.target.closest('.card');
        
       const produktInfo = {
           id: card.dataset.id,
           image: card.querySelector('.product-img').getAttribute('src'),
           title: card.querySelector('.item-title').innerText,
           counter: card.querySelector('[data-counter]').innerText,
           price: card.querySelector('.price__currency .value').innerText,
       };

	   const wareInKorb = cartWrapper.querySelector(`[data-id = "${produktInfo.id}"]`); // mein Buch im Korb

	   if (wareInKorb) {
		   const counterElement = wareInKorb.querySelector('[data-counter]');
		   counterElement.innerText = parseInt(counterElement.innerText) + parseInt(produktInfo.counter);
	   } else { 
		   const cartItem = `
			<div class="cart-item" data-id="${produktInfo.id}">
					<div class="cart-item__top">
						<div class="cart-item__img">
							<img src="${produktInfo.image}" alt="buch">
						</div>
						<div class="cart-item__desc">
							<div class="cart-item__title">${produktInfo.title}</div>
							<div class="cart-item__details">
								<div class="items items--small counter-wrapper">
									<div class="items__control" data-action="minus">-</div>
									<div class="items__current" data-counter="">${produktInfo.counter}</div>
									<div class="items__control" data-action="plus">+</div>
								</div>
								<div class="price">
									<div class="price__currency">
									<span class="value">${produktInfo.price}</span> 
									<span class="euro">€</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			`;
       cartWrapper.insertAdjacentHTML('beforeend', cartItem);
	   }
	   
	   calcPrice();
    }

})