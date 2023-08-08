const sockertClient = io();

const formulario = document.getElementById('formulario');
const messageInput = document.getElementById('message');

formulario.onsubmit = (e) => {
    e.preventDefault(); // Evita que se recargue la pagina
    const message = messageInput.value;
    sockertClient.emit('mensaje', message);
    messageInput.value = '';
}