/*
FUNCION EVAL

En JavaScript, la función eval se utiliza para ejecutar una cadena de código JavaScript. 
Esta función toma una cadena como argumento y la trata como si fuera una línea de código, 
evaluándola dentro del ámbito actual. Aquí tienes una explicación detallada de cómo funciona 
eval, junto con algunos ejemplos:
Sintaxis: eval(string)
Ejemplo:
let x = 10;
let y = 20;
let result = eval("x + y");  // Evalúa a 30
console.log(result);  // Salida: 30

1. Escribe una función calculateResult para concluir el cálculo después de hacer clic en el botón ‘=’.
2. Establece el atributo onclick a calculateResult() para el botón ‘=’.
3. ¡Refresca la web y pruébalo!
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
