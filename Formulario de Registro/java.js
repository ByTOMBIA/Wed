function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    document.getElementById('nombreError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';
    
    let esValido = true;
    
    if (nombre === '') {
        document.getElementById('nombreError').textContent = 'El nombre es obligatorio.';
        esValido = false;
    }
    
    if (email === '') {
        document.getElementById('emailError').textContent = 'El correo electronico es obligatorio.';
        esValido = false;
    }
    
    if (password === '') {
        document.getElementById('passwordError').textContent = 'La contraseña es obligatoria.';
        esValido = false;
    } else if (password.length < 6) {
        document.getElementById('passwordError').textContent = 'La contraseña debe tener al menos 6 caracteres.';
        esValido = false;
    }
    
    if (esValido) {
        const datos = {
            nombre: nombre,
            email: email,
            password: password
        };
        console.log('Nombre:', datos.nombre);
        console.log('Correo Electronico:', datos.email);
        console.log('Contraseña:', datos.password);
        alert("Formulario valido. Datos capturados en la consola.");
    }
}
