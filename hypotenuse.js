var sides = document.querySelectorAll(".side-input")
var hypotenuseBtn = document.querySelector("#hypotenuse-btn")
var outputEl = document.querySelector("#output")


function calculateSumOfSquares(a, b) {
    var sumOfSquares = a * a + b * b;
    return sumOfSquares;
}


function calculateHypotenuse() {
    if (Number(sides[0].value) === "" || (Number(sides[1].value) === "")) {
        outputEl.innerText = "Enter Sides to calculate Hypotenuse...!";
    } else if (Number(sides[0].value) < 0 || (Number(sides[1].value) < 0)) {
        outputEl.innerText = "Please Enter Positive Inputs";
    } else {
        var sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
        var lengthOfHypotenuse = Math.sqrt(sumOfSquares);
        outputEl.innerText = "The Length of hypotenuse is " + lengthOfHypotenuse;
    }
}

hypotenuseBtn.addEventListener("click", calculateHypotenuse)