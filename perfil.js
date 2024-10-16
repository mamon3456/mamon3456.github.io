document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const imgElement = document.getElementById('profilePic');
        imgElement.src = e.target.result;
    };

    if (file) {
        reader.readAsDataURL(file);
    }
});

document.getElementById('updateButton').addEventListener('click', function() {
    const nameInput = document.getElementById('nameInput').value;
    const messageDiv = document.getElementById('message');
    
    if (nameInput) {
        messageDiv.textContent = `Nombre actualizado a: ${nameInput}`;
    } else {
        messageDiv.textContent = 'Por favor, ingresa un nombre.';
    }
});
