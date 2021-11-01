'use strict'

console.log("I'm Login Script");


/*
Purpose: This file Login.js is responsible Data validation of user and log him into the system
*/




//Getting fields in which user enters data
let SignInEmail = document.querySelector("#signInEmail");
let SignInpassword = document.querySelector("#password");
let SignInBtn = document.querySelector(".SignInBtn");




// When we click on "sign in"  button this function will be invoked
function SignInForm() {

    //Fetching the value that user entered in the fields
    SignInEmail = SignInEmail.value;
    SignInpassword = SignInpassword.value;


    //Sign in Form validation
    if ((SignInEmail && SignInpassword) != "") {


        // storing the user information into who is logged in into 
        localStorage.setItem("currentUser", SignInEmail);

        // getting all the data keys from local storage and store it into a variable
        // "for of" loop treverse all the keys and if email is unique than data will be stored is L.S.
        const keys = Object.keys(localStorage);
        for (let key of keys) {

            if (SignInEmail === key) {

                if (SignInpassword === JSON.parse(localStorage.getItem(key)).password) {


                    alert("Logged In");
                    window.location.href = "../index.html";

                }

            }
        }
    }


};




// these two fuctions are responsile for show password option. When user click on show password icon password will be visible to user 
let state = false;

function toggle() {
    const pass = document.getElementById("password");


    if (state) {
        pass.setAttribute("type", "password");
        state = false;

    } else {
        pass.setAttribute("type", "text");
        state = true;

    }

}

function toggle1() {
    const pass1 = document.getElementById("password1");

    if (state) {
        pass1.setAttribute("type", "password");
        state = false;

    } else {
        pass1.setAttribute("type", "text");
        state = true;

    }

}