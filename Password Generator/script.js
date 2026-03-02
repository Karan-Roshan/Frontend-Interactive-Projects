const slider = document.querySelector(".slider");
const sliderLength = document.querySelector(".length-value");
const passwordBox = document.querySelector("#passwordBox");
const copyBtn =  document.querySelector(".copy-btn");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const number = document.getElementById("number");
const symbol = document.getElementById("symbols");
const generateBtn = document.querySelector(".generate-btn");



//  Password Length
slider.addEventListener("input", function() {
    sliderLength.textContent = slider.value;
})


let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!@$%^&*+#";


// function to generate password
function generatePassword() {
    let password = "";
    let allChars = "";

    allChars+= uppercase.checked ? upperChars : "";
    allChars+= lowercase.checked ? lowerChars : "";
    allChars+= number.checked ? numbers : "";
    allChars+= symbol.checked ? symbols : "";


    for(let i=1; i<=slider.value; i++) {
        password += allChars.charAt(Math.floor(Math.random()* allChars.length));
    }

    return password;
}


// return the password
generateBtn.addEventListener("click", ()=> {
    passwordBox.value = generatePassword();
    
})



// Password copy
copyBtn.addEventListener("click", ()=> {
    if(passwordBox.value === "") return;

    navigator.clipboard.writeText(passwordBox.value);
    copyBtn.textContent = "Copied!";

    setTimeout(()=>{
        copyBtn.textContent = "Copy";
    },1500);
})