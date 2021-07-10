const nums = document.getElementsByName("data-num");
const ops = document.getElementsByName("data-op");
const borra = document.getElementsByName("data-borra");
const igual = document.getElementsByName("data-igual");
const del = document.getElementsByName("data-del")
var result = document.getElementById("resultado");
var opeAct = "";
var opeAnt = "";
var operacion = undefined;



nums.forEach(function(button) {
    button.addEventListener("click", function() {
        escribirNumero(button.innerText);
    })
})


ops.forEach(function(button) {
    button.addEventListener("click", function() {
        operar(button.innerText);
    })
})


igual.forEach(function(button) {
    button.addEventListener("click", function() {
        calcular();
        actualizarDisplay();
    })
})


borra.forEach(function(button) {
    button.addEventListener("click", function() {
        clear();
        actualizarDisplay();
    })
})

del.forEach(function(button) {
    button.addEventListener("click", function() {
        erase();
        actualizarDisplay();
    })
})



function escribirNumero(x) {
    opeAct = opeAct.toString() + x.toString();
    actualizarDisplay();
}

function actualizarDisplay() {
    result.value = opeAct;
}

function clear() {
    opeAct = "";
    opeAnt = "";
    operacion = "";
}

function operar(op) {

    if (opeAct === "") return;

    operacion = op.toString();

    if (op === "+/-") {
        opeAnt = opeAct;
        calcularMostrar();
        return;
    }

    if (opeAnt !== "") {
        calcular();
    }

    opeAnt = opeAct;
    opeAct = "";

}


function calcular() {
    var calc;
    const actual = parseFloat(opeAct);
    const anterior = parseFloat(opeAnt);

    if (isNaN(anterior) || isNaN(actual)) return;

    switch (operacion) {
        case "+":
            calc = anterior + actual;
            break;
        case "-":
            calc = anterior - actual;
            break;
        case "*":
            calc = anterior * actual;
            break;
        case "/":
            calc = anterior / actual;
            break;
        case "^":
            calc = potencia(anterior, actual);
            break;
        case "√": ///Se podria usar directamente Math.sqrt(), por defecto saca raiz cuadrada del numero entre los parentesis
            calc = raiz(actual, anterior);
            break;
        case "+/-":
            calc = actual * -1
            break;
    }

    opeAct = calc;
    operacion = undefined;
    opeAnt = "";

}

function calcularMostrar() {
    calcular();
    actualizarDisplay();
}

function erase() {
    opeAct = opeAct.toString().slice(0, -1);
    actualizarDisplay();
}

function potencia(base, exponente) {

    var vInicial = 1;

    for (var i = 0; i < exponente; i++) {
        vInicial = vInicial * base;
    }
    return vInicial;
}

function raiz(base, exponente) {
    var raiz;

    for (var i = 1; i <= base; i++) {
        raiz = i;
        for (var x = 1; x < exponente; x++) {
            raiz = raiz * i;
        }
        if (raiz === base) {
            return i;
        }
    }

    /*

    Para sacar unicamente raiz cuadrada con esta funcion tengo que separar el ingreso de raiz como el ingreso
    de cambio de signo. 

    var cuadrada;
    for (var i = 1; i <= anterior; i++) {
        cuadrada = anterior / i;
        if (cuadrada == i) {
            calc = cuadrada;
        }
    }*/
}