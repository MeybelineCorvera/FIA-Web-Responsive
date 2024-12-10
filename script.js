// Resaltar enlaces de la barra lateral al pasar el mouse
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = '#ffc107'; // Cambia el color al pasar el mouse
        link.style.textDecoration = 'underline';
    });

    link.addEventListener('mouseout', () => {
        link.style.color = 'white'; // Restablece el color original
        link.style.textDecoration = 'none';
    });
});

// Mostrar un mensaje de bienvenida al cargar la página
window.addEventListener('load', () => {
    alert('Bienvenido/a a las Carreras de la F.I.A UNIVO');
});
