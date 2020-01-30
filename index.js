const input1 = window.document.querySelector('#email');
const input2 = window.document.querySelector('#passwd');
const boton = window.document.querySelector('#LOGIN');
const mensajeErr = document.querySelector('.mensaje-error');
const mensajeIn = document.querySelector('.mensaje-in');
boton.addEventListener('click', comparaIngreso);
input1.addEventListener('focus', borraMensaje);
input2.addEventListener('focus', borraMensaje);

function comparaIngreso() {
    if (input1.value === 'ejemplo@gmail.com' && input2.value === '123456') {
        mensajeIn.classList.remove(['hide']);
        mensajeIn.classList.add(['visible']);
    }
    
    else {
        mensajeErr.classList.remove(['hide']);
        mensajeErr.classList.add(['visible']);
    }
}

function borraMensaje() {
    mensajeErr.classList.remove(['visible']);
    mensajeIn.classList.remove(['visible']);
    mensajeErr.classList.add(['hide']);
    mensajeIn.classList.add(['hide']);
}
