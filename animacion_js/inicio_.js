
const usuario = document.getElementById('usuario');
const usuario_dos = document.getElementById('usuario_dos');

function validarFormulario() {
    if (usuario.value.trim() === '') {
        alert('Por favor, completa el campo de usuario.');
    } else {
        alert('Formulario válido. ¡Iniciar sesión!');
    }
}

//  SE Agrega un evento de clic al botón de inicio de sesión

const botonIniciarSesion = document.querySelector('button');
botonIniciarSesion.addEventListener('click', validarFormulario);
