// Находим жлменты на странице
// const btmMinus = document.querySelector('[data-action="minus"]')
// const btmPlus = document.querySelector('[data-action="plus"]')
// const counter = document.querySelector('[data-counter]')

// Отслеживаем клик на кнопку btnMinus
btmMinus.addEventListener('click', function(){

    // Проверяем чтобы счётчик был больше 1
if(parseInt(counter.innerText) > 1 ){
    // Изменяем текст в счётчике уменьшая его на 1
    counter.innerText = --counter.innerText
}

    
})

// Отслеживаем клик на кнопку btmPlus
btmPlus.addEventListener('click', function(){
    // Изменяем текст в счётчике уменьшая его на 1
    counter.innerText = ++counter.innerText
})


 