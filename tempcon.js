const tb = document.getElementById("tb");
const tof = document.getElementById("tof");
const foc = document.getElementById("foc");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
let temp;


submit.addEventListener("click", function(event) {
    event.preventDefault();

    if(tof.checked){
        temp = Number(tb.value);
        temp = temp* 9 / 5 + 32;
        result.textContent=temp + "fehrnheit"
    }
    else if(foc.checked){
        temp = Number(tb.value);
        temp = (temp-32) *(5/9);
        result.textContent=temp + "cel"
    }
    else{
        result.textContent = "Select a Unit";
    }
});
