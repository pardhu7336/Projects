const myText = document.getElementById("myText");
const Myb = document.getElementById("Myb");
const result =  document.getElementById("result");
let age;

Myb.onclick = function() {
    age = myText.value;

    if(age>=5){
        result.textContent = `enter`
    }
    else{
         result.textContent = `not enter`
    }

}