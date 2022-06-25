'use strict'
const cartWrapper = document.querySelector('.cart-wrapper');

window.addEventListener('click', (event) => {
    if (event.target.hasAttribute('data-cart')) {
       const card = event.target.closest('.card');
        
       const produktInfo = {
           id: card.dataset.id,
           image: card.querySelector('.product-img').getAttribute('src'),
           title: card.querySelector('.item-title').innerText,
           counter: card.querySelector('.items__current').innerText,
           price: card.querySelector('.price__currency').innerText,
       };

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
							<div class="price__currency">${produktInfo.price}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
       `;
       cartWrapper.insertAdjacentHTML('beforeend', cartItem);
    }
})