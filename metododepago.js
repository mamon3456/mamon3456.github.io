
// script.js
document.getElementById('payment-method').addEventListener('change', function() {
    const selectedMethod = this.value;

    // Ocultar todos los elementos de información de pago
    document.querySelectorAll('.payment-info').forEach(info => {
        info.classList.add('hidden');
    });

    // Mostrar el elemento correspondiente según el método de pago seleccionado
    if (selectedMethod === 'mercado-pago') {
        document.getElementById('mercado-pago-info').classList.remove('hidden');
    } else if (selectedMethod === 'tarjeta-debito' || selectedMethod === 'tarjeta-credito') {
        document.getElementById('tarjeta-info').classList.remove('hidden');
    } else if (selectedMethod === 'monedas-digitales') {
        document.getElementById('monedas-info').classList.remove('hidden');
    }
});

document.getElementById('go-to-mercado-pago').onclick = function() {
    // Redirigir a la aplicación de Mercado Pago (simulado)
    window.open('https://www.mercadopago.com', '_blank'); // Abre la página de Mercado Pago
};

document.getElementById('purchase-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Obtener los valores del formulario
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value; // Capturar el apellido
    const email = document.getElementById('email').value;
    const quantity = document.getElementById('quantity').value;
    const paymentMethod = document.getElementById('payment-method').value;

    // Calcular el costo total
    const pricePerUnit = 120; // Precio del producto
    const totalCost = pricePerUnit * quantity;

    // Mostrar mensaje de éxito con globos
    const statusMessage = `
        <span style="font-size: 20px;">¡Felicidades ${name} ${surname}! Has adquirido nuestro producto.</span><br>
        <span style="font-size: 18px;">El costo total será de $${totalCost}.</span><br>
        <img src="https://i.imgur.com/q4B8CkV.png" alt="Globo" style="width: 50px; vertical-align: middle;">
        <img src="https://i.imgur.com/q4B8CkV.png" alt="Globo" style="width: 50px; vertical-align: middle;">
        <img src="https://i.imgur.com/q4B8CkV.png" alt="Globo" style="width: 50px; vertical-align: middle;">
    `;
    document.getElementById('status').innerHTML = statusMessage;

    // Mostrar el botón de consulta de entrega
    document.getElementById('check-delivery').classList.remove('hidden');
    document.getElementById('delivery-info').classList.remove('hidden');

    // Resetear el formulario
    this.reset();
    document.querySelectorAll('.payment-info').forEach(info => {
        info.classList.add('hidden');
    });

    // Configuración del evento para el botón de consulta de entrega
    document.getElementById('check-delivery').onclick = function() {
        let deliveryDays;
        if (quantity >= 1 && quantity <= 6) {
            deliveryDays = 3;
        } else if (quantity >= 7 && quantity <= 10) {
            deliveryDays = 4;
        } else if (quantity >= 11 && quantity <= 19) {
            deliveryDays = 8;
        } else if (quantity >= 20 && quantity <= 50) {
            deliveryDays = 10;
        }

        // Mostrar la animación del camión y el mensaje de entrega
        document.getElementById('delivery-animation').classList.remove('hidden');
        document.getElementById('delivery-message').innerText = `Su pedido llegará en ${deliveryDays} días hábiles.`;
    };
});

