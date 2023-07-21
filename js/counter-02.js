// добавляем прослушку на всём окне
window.addEventListener('click', function(){
    
    //Обьявляем переменную для счетчика
    let counter 
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus'){
        // Находим обертку счетчика
        const counterWrapper = event.target.closest('.counter-wrapper')
        // Находим див с числом счетчика 
        counter = counterWrapper.querySelector('[data-counter]')
    }

        
    
    
    // Проверяем является ли элемент кнопкой плюс
    if(event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText
    }





    // Проверяем является ли элемент кнопкой минус
    if(event.target.dataset.action === 'minus') {

       if(parseInt(counter.innerText) > 1 ){
            // Изменяем текст в счётчике уменьшая его на 1
            counter.innerText = --counter.innerText
        } else // Проверка на товар который находиться в корзине
        if (this.event.target.closest('.cart-wrapper') && parseInt(counter.innerText) === 1) {
            // Удаление товара из корзины
            this.event.target.closest('.cart-item').remove()

            // Отображение статуса корзины Пустая/Полная
            toggleCartStatus()

            // Пересчитываем общую стоимость товаров в корзине
            calcCartPriceAndDelyvery();
        }

       
        
    }

    // Проверяем клик на + или - внутри корзины 
    if (this.event.target.hasAttribute('data-action') && this.event.target.closest('.cart-wrapper')) {
        calcCartPriceAndDelyvery();
    }


})