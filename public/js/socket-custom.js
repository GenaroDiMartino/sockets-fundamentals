var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//enviar info al servidor
socket.emit('enviarMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('resp server: ', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});