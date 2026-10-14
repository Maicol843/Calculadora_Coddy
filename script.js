/*
FUNCION CLEARDISPLAY

1. Escribe una función clearDisplay() que borre todo el texto escrito en 'display'.
2.Para un botón con el texto ‘C’ establece un atributo onclick con la función clearDisplay() para que pueda funcionar cada vez que hagamos clic en el botón.
3. Pruébalo: Refresca la web y, después de hacer clic en los números, ¡haz clic en el botón 'C' para ver si funciona!
*/


// Función para mostrar el valor del número o símbolo pulsado en la pantalla
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Función para borrar todo en la pantalla (C)
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Función para borrar el último carácter (retroceso)
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Función para calcular y mostrar el resultado
function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
