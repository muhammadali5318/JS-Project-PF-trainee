'use strict'

console.log("hello");



let SignInEmail = document.querySelector("#signInEmail");
let SignInpassword = document.querySelector("#password");
let SignInBtn = document.querySelector(".SignInBtn");
console.log(SignInEmail);
console.log(SignInpassword);



function SignInForm() {
    // e.preventDefault();



    SignInEmail = SignInEmail.value;
    SignInpassword = SignInpassword.value;




    if ((SignInEmail && SignInpassword) != "") {


        const keys = Object.keys(localStorage);
        for (let key of keys) {

            if (SignInEmail === key) {

                if (SignInpassword === JSON.parse(localStorage.getItem(key)).password) {

                    alert("Logged In");
                    window.location.href = "../index.html";
                    // return false;
                }

            }
        }
    }


};


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