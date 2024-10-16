// Manejo de selección de modo para la cámara
document.getElementById('camera-mode').addEventListener('change', function() {
    const startButton = document.getElementById('start-camera');
    startButton.style.display = 'inline';  // Mostrar botón de iniciar
    document.getElementById('stop-camera').style.display = 'none';  // Ocultar botón de finalizar si aún está visible
});

// Iniciar cámara
document.getElementById('start-camera').addEventListener('click', function() {
    const video = document.getElementById('video');
    const stopButton = document.getElementById('stop-camera');
    
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            this.style.display = 'none';  // Ocultar botón de iniciar
            stopButton.style.display = 'inline';  // Mostrar botón de finalizar
        })
        .catch(err => console.error("Error al activar la cámara: ", err));
});

// Finalizar cámara
document.getElementById('stop-camera').addEventListener('click', function() {
    const video = document.getElementById('video');
    video.srcObject.getTracks().forEach(track => track.stop());
    video.srcObject = null;
    this.style.display = 'none';  // Ocultar botón de finalizar
    document.getElementById('start-camera').style.display = 'inline';  // Mostrar botón de iniciar
});

// Manejo de selección de modo para el micrófono
document.getElementById('mic-mode').addEventListener('change', function() {
    const startButton = document.getElementById('start-microphone');
    startButton.style.display = 'inline';  // Mostrar botón de iniciar
    document.getElementById('stop-microphone').style.display = 'none';  // Ocultar botón de finalizar si aún está visible
    document.getElementById('save-recording').style.display = 'none';  // Ocultar botón de guardar grabación si es visible
});

// Iniciar micrófono
document.getElementById('start-microphone').addEventListener('click', function() {
    const audio = document.getElementById('audio');
    const stopButton = document.getElementById('stop-microphone');
    const micMode = document.getElementById('mic-mode').value;
    
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            audio.srcObject = stream;
            this.style.display = 'none';  // Ocultar botón de iniciar
            stopButton.style.display = 'inline';  // Mostrar botón de finalizar
            
            if (micMode === 'reproductor') {
                stopButton.addEventListener('click', function() {
                    document.getElementById('save-recording').style.display = 'inline';  // Mostrar botón de guardar grabación
                });
            }
        })
        .catch(err => console.error("Error al activar el micrófono: ", err));
});

// Finalizar micrófono
document.getElementById('stop-microphone').addEventListener('click', function() {
    const audio = document.getElementById('audio');
    audio.srcObject.getTracks().forEach(track => track.stop());
    audio.srcObject = null;
    this.style.display = 'none';  // Ocultar botón de finalizar
    document.getElementById('start-microphone').style.display = 'inline';  // Mostrar botón de iniciar
});

// Guardar grabación
document.getElementById('save-recording').addEventListener('click', function() {
    alert("Grabación guardada exitosamente.");
    this.style.display = 'none';  // Ocultar botón de guardar grabación
});

// Activar alarma con sonido
document.getElementById('activate-alarm').addEventListener('click', function() {
    const alarmStatus = document.getElementById('alarm-status');
    const policeButton = document.getElementById('llamarPolicia');
    if (alarmStatus.textContent.includes("Inactiva")) {
        alarmStatus.textContent = "Estado: Activa";
        alert("Alarma activada");
        const audio = new Audio('alarm-sound.mp3');  // Asegúrate de tener este archivo
        audio.play();
        policeButton.style.display = 'inline';  // Mostrar botón de llamar a la policía
    } else {
        alarmStatus.textContent = "Estado: Inactiva";
        policeButton.style.display = 'none';  // Ocultar botón de llamar a la policía
    }
});

// Llamar a la policía
document.getElementById('llamarPolicia').addEventListener('click', function() {
    alert("Llamando a la policía...");
});

// Mostrar formulario de agregar dispositivo
document.getElementById('add-device').addEventListener('click', function() {
    document.getElementById('device-form').style.display = 'block';
});

// Manejar envío del formulario
document.getElementById('form-device').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const deviceName = document.getElementById('device-name').value;
    const deviceDate = document.getElementById('device-date').value;
    const deviceDescription = document.getElementById('device-description').value;
    const deviceAlias = document.getElementById('device-alias').value || 'Sin alias';
    const connectionMethod = document.getElementById('connection-method').value;

    const newDevice = document.createElement('li');
    newDevice.textContent = `Dispositivo: ${deviceName}, Método: ${connectionMethod}, Alias: ${deviceAlias}`;
    
    document.getElementById('device-list').appendChild(newDevice);
    
    document.getElementById('device-form').reset();
    document.getElementById('device-form').style.display = 'none';
});

