const upperSet = "ABCDEFGHIJHKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "0123456789";
const symbolSet = "~!@#$%^&*()_+-/";

// selectors
const passbox = document.getElementById("pswrdbox");
const userlength = document.getElementById("html"); 
const useruppercase = document.getElementById("uppercase");
const userlowercase = document.getElementById("lowercase");
const usernumber = document.getElementById("numbers");
const usersymbols = document.getElementById("symbols");

// function jo set me se use krega 
const getrandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
};

// generate password
const generatePassword = () => {
    let password = "";
    let length = parseInt(userlength.value);

//loop jbtk chlega tbtk passwrd ki length less rhegi 
    while (password.length < length) {
        if (useruppercase.checked && password.length < length) {
            password += getrandomData(upperSet);
        }
        if (userlowercase.checked && password.length < length) {
            password += getrandomData(lowerSet);
        }
        if (usernumber.checked && password.length < length) {
            password += getrandomData(numberSet);
        }
        if (usersymbols.checked && password.length < length) {
            password += getrandomData(symbolSet);
        }
        // If no checkboxes are checked then it will break from the loop
        if (!useruppercase.checked && !userlowercase.checked && !usernumber.checked && !usersymbols.checked) {
            break;
        }
    }
// input button m show krega password
    passbox.value = password;
};

//event listener
document.getElementById("changepswrd").addEventListener("click", generatePassword);
