'use strict'

console.log("hello I'm forgot password");



let ForgotEmail = document.querySelector("#ForgotPasswordEmail");
let forgotPas = document.querySelector("#password");
let ForgotDiv = document.querySelector(".forgotDiv");



function ForgotPass() {
    // e.preventDefault();


    ForgotEmail = ForgotEmail.value;



    if (ForgotEmail != "") {


        const keys = Object.keys(localStorage);
        for (let key of keys) {

            if (ForgotEmail === key) {

                // ForgotDiv.classList.remove("visibility");
                ForgotDiv.insertAdjacentHTML("beforeend", `<h5 form-txt mb-4 text-center> Your Password:  ${JSON.parse(localStorage.getItem(key)).password} </h5>`)

                // forgotPas.textContent = ;


            }
        }


    }

}
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