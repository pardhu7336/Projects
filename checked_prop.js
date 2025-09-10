const Age = document.getElementById("Age");
const Mastercard = document.getElementById("Mastercard");
const Visa = document.getElementById("Visa");
const age = document.getElementById("age");
const card = document.getElementById("card");
const Submit = document.getElementById("Submit");

Submit.onclick = function(){
    if(Age.checked){
        age.textContent='U r permitted'
    }
    else{
        age.textContent='U cant pay go and play'
    }
    if(Mastercard.checked){
        card.textContent='U pay with mastercard'
    }
    else if(Visa.checked){
        card.textContent='U pay with visa'
    }
    else{
        card.textContent='get out u dont wanna pay'
    }
}

