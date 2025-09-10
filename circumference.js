const pi = 3.14159;
let radius;
let circumference;

document.getElementById("submit").onclick = function () {
    radius = document.getElementById("rad").value;
    radius = Number(radius);  // Correct variable name
    circumference = 2 * pi * radius;
    document.getElementById("result").textContent = "Circumference: " + circumference;
}