function calcCartPriceAndDelyvery() {
  const cartItems = document.querySelectorAll('.cart-item');
  const totalPriceEl = document.querySelector('.total-price');
  const deliveryCost = document.querySelector('.delivery-cost');
  const cartDelivery = document.querySelector('[data-cart-delivery]');
  
  // Общая стоимость товаров
  let totalPrice = 0


  cartItems.forEach(function (item) {
    const amounEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.price__currency');
    const curentPrice = parseInt(amounEl.innerText) * parseInt(priceEl.innerText)
    totalPrice += curentPrice
  })


  if (totalPrice > 0) {
    cartDelivery.classList.remove('none')
  } else {
    cartDelivery.classList.add('none')
  }

  if (totalPrice >= 600) {
    deliveryCost.classList.add('free');
    deliveryCost.innerText = 'Бесплатно'
  } else {
    deliveryCost.classList.remove('free')
    deliveryCost.innerText = '250 ₽'
    totalPrice += parseInt(250)
  }

  totalPriceEl.innerText = totalPrice;

}