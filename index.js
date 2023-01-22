const functionalityProducts = document.querySelector('.js-functionality-products');
const jsButton = document.querySelector('.js-button');
const jsAlertAlertSecondary = document.querySelector('.js-alert-alert-secondary');
const jsCardBodyBorderTop = document.querySelector('.js-card-body-border-top');

functionalityProducts.addEventListener('click', function() {
    const purchase = jsAlertAlertSecondary.value;
    let output = 'Товар в карзине';
    
    if (purchase == 'functionalityProducts') {
        output ='Ашбка';
    }
    
    jsAlertAlertSecondary.innerHTML = output;
    });
    
