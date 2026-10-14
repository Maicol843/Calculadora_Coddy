/*
FUNCION APPENDTODISPLAY

Necesitamos crear cuatro funciones, las cuales son:
1. appendToDisplay: para mostrar el valor del número o símbolo pulsado
2. clearDisplay: para borrar todo en la pantalla (C)
3. deleteLast: para borrar cada número o símbolo (funcionamiento de retroceso)
4. calculateResult: Después de hacer clic en el botón igual, se genera un resultado.

1. Crea una función appendToDisplay que tenga un value como parámetro y añada los números o símbolos al 'display'.
2. Ahora que nuestra función está lista, tenemos que hacer que funcione. Así que usa el atributo onclick y establece 
appendToDisplay(value) en todos los botones excepto ‘C’, '←', y ‘='. A continuación se muestra un ejemplo:
<button class="btn" onclick="appendToDisplay('/')">/</button>

*/


// Función para mostrar el valor del número o símbolo pulsado en la pantalla
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Función para borrar todo en la pantalla (C)
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
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
        // Usamos eval para calcular la expresión matemática de forma sencilla
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}