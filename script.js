document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    const forgotPassword = document.getElementById('forgot-password');

   
    if (username === 'pepe' && password === '1234') {
        errorMessage.textContent = '';
        forgotPassword.style.display = 'none';
        window.location.href = 'inicio.html'; 
    } else if (username !== 'pepe') {
        errorMessage.textContent = 'Usuario incorrecto.';
        forgotPassword.style.display = 'none';
    } else {
        errorMessage.textContent = 'Contraseña incorrecta.';
        forgotPassword.style.display = 'block';
    }
});


document.getElementById('send-email').addEventListener('click', function() {
    const email = 'cerraduras.electronicas@ejemplo.com'; 
    window.location.href = `mailto:${email}?subject=Recuperar Contraseña&body=Hola, necesito ayuda para recuperar mi contraseña.`;
});
