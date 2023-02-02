const functionalityProducts = document.querySelector('.js-functionality-products');
const jsAlertAlertSecondary = document.querySelector('.js-alert-alert-secondary');

// Вывод товара в корзину
functionalityProducts.addEventListener('click', function() {
    const purchase = jsAlertAlertSecondary.value;
    let output = 'Товар в карзине';
    jsAlertAlertSecondary.innerHTML = output; 
});

//Функция удаления товара из карзины
let deletebutton = document.getElementById('delete-button');

deletebutton.addEventListener('click', function() {
  const deletebutton = jsAlertAlertSecondary.value;
  let output = 'Корзина пуста';
  jsAlertAlertSecondary.innerHTML = output;
});