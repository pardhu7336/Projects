let inc = document.getElementById("inc")
let reset = document.getElementById("reset")
let dec = document.getElementById("Dec")
let num = document.getElementById("num")
let count = 0;

inc.onclick = function(){
    count ++;
    num.textContent = count ;
}
reset.onclick = function(){
    count = 0;
    num.textContent = count ;
}
dec.onclick = function(){
    count --;
    num.textContent = count ;
}