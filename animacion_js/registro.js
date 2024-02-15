
const email = document.getElementById('email');


// SE CREA FUNCION CON VALIDACION DE FORMULARIO
function validarFormulario() {
    if (email.value.trim() === '') {
        alert('Por favor, completa el campo del correo.');
    } else {
    }
}

//  SE AGREGA EVENTO DE CLICK AL BOTON DE REGISTRARSE 

const botonRegistrarse = document.getElementById('button');
botonRegistrarse.addEventListener('click', validarFormulario);