var nums = document.getElementsByName("data_num");
var opera = document.getElementsByName("data_op");
var igual = document.getElementsByName("data_igual");
var borra = document.getElementsByName("data_borra");
var del = document.getElementsByName("data_delete");
var result = document.getElementById("resultado");
var opeAct = "";
var opeAnt = "";
var operacion = undefined;


nums.forEach(function(button) {
    button.addEventListener("click", function() {
        escribirNumero(button.innerText);
    })
})

opera.forEach(function(button) {
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
        borrar();
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

function operar(op) {
    if (opeAct === "") return;
    operacion = op.toString();

    if (op === "√") {
        opeAnt = opeAct;
        calcularMostrar();
        return;
    }

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
    var calculo;
    const actual = parseFloat(opeAct);
    const anterior = parseFloat(opeAnt);
    if (isNaN(actual) || isNaN(anterior)) return;

    switch (operacion) {
        case "+":
            calculo = anterior + actual;
            break;
        case "-":
            calculo = anterior - actual;
            break;
        case "*":
            calculo = anterior * actual;
            break;
        case "/":
            calculo = anterior / actual;
            break;
        case "^":
            calculo = potencia(anterior, actual);
            break;
        case "√":
            calculo = raiz(actual);
            break;
        case "+/-":
            calculo = actual * -1;
            break;
    }

    opeAct = calculo;
    operacion = undefined;
    opeAnt = "";
}

function potencia(base, exponente) {
    var vInicial = 1;

    for (var i = 0; i < exponente; i++) {
        vInicial = vInicial * base;
    }
    return vInicial;
}

function raiz(numero) {
    return Math.sqrt(numero);
}

function calcularMostrar() {
    calcular();
    actualizarDisplay();
}

function borrar() {
    opeAct = "";
    opeAnt = "";
    operacion = undefined;
}

function erase() {
    opeAct = opeAct.toString().slice(0, -1);
}