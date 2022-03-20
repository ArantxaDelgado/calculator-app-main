let solution = "";
let numbers = document.querySelector("#numbers");
numbers.addEventListener("click", function (event) {
    let keyNumber = event.target.textContent;
    let boxNumber = document.querySelector("#resultado");

    function acumular() {
        if (event.target.nodeName == "BUTTON") {

            if (keyNumber == "DEL") {
                solution = solution.slice(0, -1);
            }
            else if (keyNumber == igual.textContent) {
                solution = "" + eval(solution);

            }
            else if (keyNumber == "RESET") {
                solution = "";
            }

            else if (solution.length < 20) {
                solution += keyNumber;

            }
            else {
                return;
            }

        }
    }
    console.log(keyNumber);
    acumular();

    boxNumber.textContent = solution;

    if (solution.length == 12) {
        console.log("Tengo más de 12");
        boxNumber.classList.add("letraPequena");
    }

    else if (solution.length == 11) {
        boxNumber.classList.remove("letraPequena");

    }


})

let tema2 = document.querySelector("#theme2");

tema2.addEventListener("click", function () {
    tema2.classList.add("t2Btn");
})

//Hacer una función para cambiar el color.
//Hacer libreria

