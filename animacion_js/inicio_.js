
const usuario = document.getElementById('usuario');
const usuario_dos = document.getElementById('usuario_dos');


// SE CREA FUNCION CON VALIDACION DE FORMULARIO

function validarFormulario() {
    if (usuario.value.trim() === '') {
        alert('Por favor, completa el campo de usuario.');
    } else {
        alert('Formulario válido. ¡Iniciar sesión!');
    }
}

//  SE AGREGA EVENTO DE CLICK A BOTON DE INICIO

const botonIniciarSesion = document.querySelector('button');
botonIniciarSesion.addEventListener('click', validarFormulario);
