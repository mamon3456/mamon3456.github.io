let bluetoothDevice;
let characteristic;

async function connectBluetooth() {
    try {
        bluetoothDevice = await navigator.bluetooth.requestDevice({
            filters: [{ services: ['your_service_uuid'] }]  // Cambia esto a tu UUID
        });

        const server = await bluetoothDevice.gatt.connect();
        const service = await server.getPrimaryService('your_service_uuid'); // Cambia esto
        characteristic = await service.getCharacteristic('your_characteristic_uuid'); // Cambia esto
        document.getElementById('status').innerText = 'Conectado a la cerradura';
    } catch (error) {
        console.error('Error de conexión:', error);
        document.getElementById('status').innerText = 'Error al conectar: ' + error.message;
    }
}

// Abrir cerradura
document.getElementById('open-lock').onclick = async () => {
    if (!characteristic) {
        await connectBluetooth();
    }
    try {
        const command = new TextEncoder().encode('O\n');  // 'O' para abrir
        await characteristic.writeValue(command);
        document.getElementById('status').innerText = 'Cerradura abierta';
    } catch (error) {
        console.error(error);
        document.getElementById('status').innerText = 'Error al abrir la cerradura';
    }
};

// Cerrar cerradura
document.getElementById('close-lock').onclick = async () => {
    if (!characteristic) {
        await connectBluetooth();
    }
    try {
        const command = new TextEncoder().encode('C\n');  // 'C' para cerrar
        await characteristic.writeValue(command);
        document.getElementById('status').innerText = 'Cerradura cerrada';
    } catch (error) {
        console.error(error);
        document.getElementById('status').innerText = 'Error al cerrar la cerradura';
    }
};

// Cambiar contraseña
document.getElementById('change-password').onclick = async () => {
    if (!characteristic) {
        await connectBluetooth();
    }
    try {
        const oldPassword = document.getElementById('old-password').value;
        const newPassword = document.getElementById('new-password').value;
        const command = new TextEncoder().encode('C' + newPassword + ',' + oldPassword + '\n');  // 'C' seguido de nueva y antigua contraseña
        await characteristic.writeValue(command);
        
        // Mostrar mensaje de éxito
        document.getElementById('status').innerText = 'Intentando cambiar la contraseña...';
    } catch (error) {
        console.error(error);
        document.getElementById('status').innerText = 'Error al cambiar la contraseña';
    }
};
const menuIcon = document.getElementById('menu-icon');
const sideMenu = document.getElementById('side-menu');


menuIcon.addEventListener('click', function() {
    
    sideMenu.classList.toggle('open');
    
    
    menuIcon.classList.toggle('active');
});
