// Obtener los elementos de los controles y las secciones
const greenRange = document.getElementById('greenRange');
const whiteRange = document.getElementById('whiteRange');
const redRange = document.getElementById('redRange');

const greenBox = document.getElementById('greenBox');
const whiteBox = document.getElementById('whiteBox');
const redBox = document.getElementById('redBox');

const greenHex = document.getElementById('greenHex');
const whiteHex = document.getElementById('whiteHex');
const redHex = document.getElementById('redHex');

// Función para actualizar el color de fondo y el valor hexadecimal
function updateColor() {
    const greenValue = greenRange.value;
    const whiteValue = whiteRange.value;
    const redValue = redRange.value;

    // Actualizar el color de fondo de cada sección
    greenBox.style.backgroundColor = `rgb(${green}, 103, 71)`; // Verde de la bandera de México (más fijo)
    whiteBox.style.backgroundColor = `rgb(${whiteValue}, ${whiteValue}, ${whiteValue})`;
    redBox.style.backgroundColor = `rgb(${redValue}, 0, 0)`;

    // Actualizar el valor hexadecimal
    greenHex.textContent = `#${Number(greenValue).toString(16).padStart(2, '0')}000`;
    whiteHex.textContent = `#${Number(whiteValue).toString(16).padStart(2, '0')}${Number(whiteValue).toString(16).padStart(2, '0')}${Number(whiteValue).toString(16).padStart(2, '0')}`;
    redHex.textContent = `#${Number(redValue).toString(16).padStart(2, '0')}0000`;
}

// Agregar eventos de cambio para los controles de rango
greenRange.addEventListener('input', updateColor);
whiteRange.addEventListener('input', updateColor);
redRange.addEventListener('input', updateColor);

// Llamar a la función de actualización de color al cargar
updateColor();
