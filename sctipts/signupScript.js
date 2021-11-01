'use strict'
console.log("I'm sign up script");


/*
Purpose: This file SignupScript.js is responsible to store all the User Sign up data into local storage .
*/




//Getting fields in which user enters data
var signUpname = document.querySelector("#signUpInputname");
var SignUpEmail = document.querySelector("#SignUpInputEmail");
var SignUpPassword = document.querySelector("#password");
var SignUpConPassword = document.querySelector("#password1");
const SignUpBtn = document.querySelector('.SignUpBtn');


// this variable is responsible for checking emails it is already exists or not
let validate = true;


// When we click on sign up now button this function will be invoked
function signUpForm() {


    // *********************IP Request to fetch an ip from remote API*********************
    const xhr = new XMLHttpRequest();

    xhr.open('get', "https://api.ipify.org?format=json", "true");

    xhr.onload = function() {
        const UserIp = JSON.parse(this.responseText).ip;
        localStorage.setItem("userIp", UserIp);
        console.log(UserIp);
    }

    xhr.send();




    //Fetching the value that user entered in the fields
    signUpname = signUpname.value;
    SignUpEmail = SignUpEmail.value;
    SignUpPassword = SignUpPassword.value;
    SignUpConPassword = SignUpConPassword.value;


    //Saving Signup date and user agent
    const time = new Date();
    const agent = navigator.userAgent;


    // Storing all the data into an object
    const obj = {
        name: signUpname,
        email: SignUpEmail,
        password: SignUpPassword,
        confirmPassword: SignUpConPassword,
        SignUpTime: time,
        UserAgent: agent

    }


    //Sign up Form validation
    if ((signUpname && SignUpEmail && SignUpPassword && SignUpConPassword) != "") {

        // getting all the data keys from local storage and store it into a variable
        // "for of" loop treverse all the keys and if email is unique than data will be stored is L.S.
        const keys = Object.keys(localStorage);
        for (let key of keys) {

            if (SignUpEmail === key) {
                validate = false;
                alert("Email Already Exists");

            }
        }

        if (validate) {

            if ((SignUpPassword === SignUpConPassword)) {

                localStorage.setItem(obj.email, JSON.stringify(obj));
                alert("Congrats Yours account is successfully created");
                reload();

            } else {
                alert("Password Does not match")
            }

        }
    } else {
        alert("Kindly Fill the information Correctly");
    }

}