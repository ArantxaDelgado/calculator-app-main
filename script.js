let solution = "";
let numbers = document.querySelector("#numbers");

numbers.addEventListener("click", function (event) {
    let keyNumber = event.target.textContent;
    let boxNumber = document.querySelector("#resultado");

    if (event.target.nodeName != "BUTTON" || solution.length > 20) {
        return;
    }


    console.log(keyNumber);
    acumular(keyNumber);

    boxNumber.textContent = solution;

    if (solution.length == 12) {
        console.log("Tengo más de 12");
        boxNumber.classList.add("letraPequena");
    }

    else if (solution.length==11){
        boxNumber.classList.remove("letraPequena");

    }


})

function acumular(keyNumber) {

    if (keyNumber == "C") {
        solution = solution.slice(0, -1);
    }
    else if (keyNumber == "=") {
        solution = "" + eval(solution);

    }
    else if (keyNumber == "RESET") {
        solution = "";
    }
    else {
        solution += keyNumber;
    }

}
let t1btn = document.querySelector("#theme1");
let t2btn = document.querySelector("#theme2");
let t3btn = document.querySelector("#theme3");

let body = document.querySelector("body");
let calcBg = document.querySelector("#numbers");
let cabecera = document.querySelector("#cabecera");
let resultado = document.querySelector("#resultado");
/* No me estan funcionando querySelectoAll Uncaught TypeError: Cannot set properties of undefined (setting 'backgroundColor')
    at HTMLSpanElement.<anonymous> */
let btnColor = document.querySelector("button");

let igual = document.querySelector("#igual");

let borrar = document.querySelector("#borrar"); /* no funciona querySelectorAll */



t2btn.addEventListener("click", function () {
    t2btn.style.color = "hsl(25, 98%, 40%)";
    body.style.backgroundColor = "hsl(0, 0%, 90%)";
    calcBg.style.backgroundColor = "hsl(0, 5%, 81%)";
    resultadocontainer.style.backgroundColor = "hsl(0, 0%, 100%)";
    cabecera.style.color = "black";
    resultado.style.color = "black";
    btnColor.style.color = "black";
    igual.style.backgroundColor = "hsl(25, 98%, 40%)";
    igual.style.borderBottomColor = "hsl(25, 99%, 27%)";
    borrar.style.backgroundColor = "hsl(185, 42%, 37%)";
})
