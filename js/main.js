const typed = new Typed('.typed', {
    strings: [
        'ventas reales',  
        'nuevos clientes',
        'leads auténticos', 
        'mas juntas de ventas',
        'audiencias perdurables', 
        'diferenciación en el mercado'
    ],
    typeSpeed: 50, //Velocidad en milisegundo por letra
    loop: true, // Repetir el array de strings
    curshorChar: '|', // Caracter para el cursor
    contentType: 'null', //html o null para texto sin formato
    smartBackspace: true, //Elimina solo palabras nuevas
});
/*
stringsElement: '#cadenas-textp', //String de los elementos
    typeSpeed: 200, //Velocidad en milisegundo por letra
    startDelay: 50, //Tiempo para iniciar la animacion
    backSpeed: 125, //Valocidad para borrar las letras
    smartBackspace: true, //Elimina solo palabras nuevas
    shuffle: true, //Alterar orden de las palabras
    backDelay: 500, //Tiempo de espera tras terminar de escribir una palbra
    loop: true, // Repetir el array de strings
    loopCount: false, //cantidad de veces a repetir el array. false=infinite
    showCursor: true, //Mostrar el cursos palpitando
    curshorChar: '|', // Caracter para el cursor
    contentType: 'null', //html o null para texto sin formato
*/