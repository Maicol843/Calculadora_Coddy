/*
FUNCION DELETELAST

1. Escribe una función deleteLast() que elimine el último valor del id ‘display’ cada vez que hagas clic en el botón ‘←’.
2. Establece el atributo onclick a “deleteLast()” para el botón con el texto ‘←’.

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
