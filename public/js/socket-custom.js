var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

// Los on escuchar información
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Los emit son para enviar información
socket.emit('enviarMensaje', {
    usuario: 'Martin',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log('Respuesta del servidor:', resp.respuesta);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});