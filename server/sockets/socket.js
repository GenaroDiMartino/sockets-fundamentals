const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // escuchar el cliente
    client.on('enviarMensaje', (mensaje, callback) => {

        console.log(data);

        // envia a todos los usuarios conectados
        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo ok'
        //     });
        // } else {
        //     callback({
        //         resp: 'Todo mal'
        //     });
        // }
    });
});