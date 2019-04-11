// Funcion para realizar el calculo de las tablas de multiplicacion
function multiplicationTables(num) {
    var table = [];
    var resultado;
    for(let i = 1; i <= 10; i++) {
        resultado =  `${num} x ${i} = ${num * i}`;
        table.push(resultado);
    }
    return table;
}

// Funcion para desplegar las tablas de multiplicacion en el HTML
function tables(numTable, numMultiplication) {
    var table = document.getElementById(numTable);
    const multiplication = multiplicationTables(numMultiplication);
    var tr = document.createElement('TR');
    table.appendChild(tr);
    for(let i = 0; i < 10; i++) {
        var td = document.createElement('TD');
        td.appendChild(document.createTextNode(multiplication[i]));
        tr.appendChild(td);
    }
}

// Se ejecutan las funciones para mostrar todas las tablas
for(let i = 1; i <= 10; i++) {
    tables(`tabla${i}`, i);
}

// Traer Boton Practicar
var buttonPracticar = document.getElementById('button_practicar');
buttonPracticar.addEventListener('click', practicarTablas);

// Funcion del Boton Practicar
function practicarTablas() {
    ocultarTables(true);
    var contenedor = document.getElementById('contenedor');
    // Crear Boton Finalizar
    var buttonFinalizar = document.createElement('BUTTON');
    buttonFinalizar.id = 'button_finalizar';
    buttonFinalizar.innerHTML = 'Finalizar/Finish';
    buttonFinalizar.addEventListener('click', () => {
        ocultarTables(false);
        buttonFinalizar.remove();
        buttonVerificar.remove();
        labelEjercicio.remove();
        inputResultado.remove();
    });
    contenedor.appendChild(buttonFinalizar);
    //Crear Ejercicios de Practica
    var labelEjercicio = document.createElement('LABEL');
    labelEjercicio.id = 'label_ejercicio';
    labelEjercicio.textContent = `${num1 = aleatorio(2, 9)} x ${num2 = aleatorio(2, 9)} = `;
    contenedor.appendChild(labelEjercicio);
    // Crear Input para guardar resultado
    var inputResultado = document.createElement('INPUT');
    inputResultado.type = 'number';
    inputResultado.id = 'input_resultado';
    contenedor.appendChild(inputResultado);
    inputResultado.focus();
    // Crear Boton para Verificar Resultado
    var buttonVerificar = document.createElement('BUTTON');
    buttonVerificar.innerHTML = 'Comprobar/Check';
    buttonVerificar.id = 'button_verificar';
    buttonVerificar.addEventListener('click', () => {
        var resultado = num1 * num2;
        var mensaje = document.createElement('P');
        mensaje.id = 'p_mensaje';
       if(resultado == parseInt(inputResultado.value)) {
           mensaje.innerHTML = 'Correcto';
           contenedor.appendChild(mensaje);
           setTimeout(() => {mensaje.remove()}, 3000);
           labelEjercicio.textContent = `${num1 = aleatorio(2, 9)} x ${num2 = aleatorio(2, 9)} = `;
           inputResultado.value = "";
           inputResultado.focus();
       } else {
            mensaje.innerHTML = 'Intente de nuevo';
            contenedor.appendChild(mensaje);
            setTimeout(() => {mensaje.remove()}, 3000);
           inputResultado.value = "";
           inputResultado.focus();
       }
    });
    contenedor.appendChild(buttonVerificar);
}

// Funcion para generar numeros aleatorios
function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

// Funcion para ocultar tablas de multiplicar y su titulo
function ocultarTables(valor) {
    var contenedor = document.getElementsByClassName('contenedor');
    var listaContenedor = contenedor[0].childNodes;
    if(valor == true) {
        for (let i = 3; i < 25; i++) {
            if (i % 2 != 0) {
                listaContenedor[i].hidden = true;
            }
        }
    } else {
        for (let i = 3; i < 25; i++) {
            if (i % 2 != 0) {
                listaContenedor[i].hidden = false;
            }
        }
    }
}