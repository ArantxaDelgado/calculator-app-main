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
    t1btn.classList.remove("t1");
    t3btn.classList.remove("t3");
    t2btn.classList.add("t2");
    body.style.backgroundColor = "hsl(0, 0%, 90%)";
    calcBg.style.backgroundColor = "hsl(0, 5%, 81%)";
    resultadocontainer.style.backgroundColor = "hsl(0, 0%, 100%)";
    cabecera.style.color = "black";
    resultado.style.color = "black";

    igual.style.backgroundColor = "hsl(25, 98%, 40%)";
    igual.style.borderBottomColor = "hsl(25, 99%, 27%)";

    borrar.style.backgroundColor = "hsl(185, 42%, 37%)";
    borrar.style.borderBottomColor = "hsl(35, 11%, 61%)";

    btnColor.style.backgroundColor = "white";
    btnColor.style.borderBottomColor = "hsl(35, 11%, 61%)";
    btnColor.style.color = "black";
})

t3btn.addEventListener("click", function () {
    t1btn.classList.remove("t1");
    t2btn.classList.remove("t2");
    t3btn.classList.add("t3")
    body.style.backgroundColor = "hsl(268, 75%, 9%)";
    calcBg.style.backgroundColor = "hsl(268, 71%, 12%)";
    resultadocontainer.style.backgroundColor = "hsl(268, 71%, 12%)";
    cabecera.style.color = "hsl(52, 100%, 62%)";
    resultado.style.color = "hsl(52, 100%, 62%)";
    

    igual.style.backgroundColor = "hsl(176, 100%, 44%)";
    igual.style.borderBottomColor = "hsl(177, 92%, 70%)";

    borrar.style.backgroundColor = "hsl(281, 89%, 26%)";
    borrar.style.borderBottomColor = "hsl(285, 91%, 52%)";

    btnColor.style.backgroundColor = "hsl(268, 47%, 21%)";
    btnColor.style.borderBottomColor = "hsl(290, 70%, 36%)";
    btnColor.style.color = "hsl(52, 100%, 62%)";
})

t1btn.addEventListener("click", function () {
    t3btn.classList.remove("t1");
    t2btn.classList.remove("t2");
    t1btn.classList.add("t3")
    body.style.backgroundColor = "hsl(222, 26%, 31%)";
    calcBg.style.backgroundColor = "hsl(223, 31%, 20%)";
    resultadocontainer.style.backgroundColor = "hsl(224, 36%, 15%)";
    cabecera.style.color = "white)";
    resultado.style.color = "white";
    

    igual.style.backgroundColor = "hsl(6, 63%, 50%)";
    igual.style.borderBottomColor = "hsl(6, 70%, 34%)";

    borrar.style.backgroundColor = "hsl(225, 21%, 49%)";
    borrar.style.borderBottomColor = "hsl(222, 26%, 31%)";

    btnColor.style.backgroundColor = "white";
    btnColor.style.borderBottomColor = "hsl(28, 16%, 65%)";
    btnColor.style.color = "hsl(225, 21%, 49%)";
})