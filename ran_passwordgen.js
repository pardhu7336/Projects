function genpassword (passwordLenght,incLowerCase,incUpperCase,incNumber,incSymbols)
{
    const lower = "abcdefghijklmniopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numb = "1234567890";
    const sym = "!@#$%^&*()_+";
    let achar = "";
    let pass = "";
    

    achar += incLowerCase ? lower : "";
    achar += incUpperCase ? upper : "";
    achar += incNumber ? numb : "";
    achar += incSymbols ? sym : "";


    for(i=1;i<=passwordLenght;i++){
        const ranindex = Math.floor(Math.random() * achar.length);
        pass += achar[ranindex];
    }
    return pass;
}
const passwordLenght = 12;
const incLowerCase = true;
const incUpperCase = true;
const incNumber = true;
const incSymbols = true;

const pass = genpassword(passwordLenght,incLowerCase,incUpperCase,incNumber,incSymbols);

console.log(`Generated password : ${pass}`);
