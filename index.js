// Все объявленные переменные
const jsAlertAlertSecondary = document.querySelector('.js-alert-alert-secondary');

//Массив с товарами
let products = [
  bread = document.querySelector('.bread'),
  Ioaf = document.querySelector('.Ioaf'),
  croisant = document.querySelector('.croisant'),
  cupcakes = document.querySelector('.cupcakes'),
  donut = document.querySelector('.donut'),
  buns = document.querySelector('.buns'),
];

// Вывод товара в корзину
bread.addEventListener('click', function() {
  const purchase = jsAlertAlertSecondary.value;
  let output = 'Хлеб';
  jsAlertAlertSecondary.innerHTML = output; 
});

Ioaf.addEventListener('click', function() {
  const purchase = jsAlertAlertSecondary.value;
  let output = 'Батоны';
  jsAlertAlertSecondary.innerHTML = output; 
});

croisant.addEventListener('click', function() {
  const purchase = jsAlertAlertSecondary.value;
  let output = 'Круасаны';
  jsAlertAlertSecondary.innerHTML = output; 
});

cupcakes.addEventListener('click', function() {
  const purchase = jsAlertAlertSecondary.value;
  let output = 'Кексы';
  jsAlertAlertSecondary.innerHTML = output; 
});

donut.addEventListener('click', function() {
  const purchase = jsAlertAlertSecondary.value;
  let output = 'Пончики';
  jsAlertAlertSecondary.innerHTML = output; 
});

buns.addEventListener('click', function() {
  const purchase = jsAlertAlertSecondary.value;
  let output = 'Булочки';
  jsAlertAlertSecondary.innerHTML = output; 
});

//Функция удаления товара из карзины
let deletebutton = document.getElementById('delete-button');

deletebutton.addEventListener('click', function() {
  const deletebutton = jsAlertAlertSecondary.value;
  let output = 'Корзина пуста';
  jsAlertAlertSecondary.innerHTML = output;
});