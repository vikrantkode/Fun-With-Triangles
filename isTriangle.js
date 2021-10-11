var inputs = document.querySelectorAll(".angle-input")
var isTriangleBtn = document.querySelector("#is-triangle-btn")
var outputEl = document.querySelector("#output")

function calculateSumOfAngles(angle1, angle2, angle3) {
    var sumOfAngles = angle1 + angle2 + angle3;
    // console.log(sumOfAngles);
    return sumOfAngles;
}

function isTriangle() {
    if(Number(inputs[0].value) > 0 && (Number(inputs[1].value) > 0 && (Number(inputs[2].value) > 0 && 
      (Number(inputs[0].value) != 0 &&  (Number(inputs[1].value) != 0 && (Number(inputs[2].value) != 0)))))) 
    {
    var sumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (sumOfAngles === 180) {
        outputEl.innerText = "Yayy..! Your given angles forms a triangle.";
    } else {
        outputEl.innerText = "Oops..! Your given angles are not  forming a triangle.";
    } 
}
    else{
        outputEl.innerText = "Please Enter Valid Inputs...!";
    }
}

isTriangleBtn.addEventListener("click", isTriangle)