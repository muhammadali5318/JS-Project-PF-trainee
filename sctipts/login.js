'use strict'

console.log("I'm Login Script");



let SignInEmail = document.querySelector("#signInEmail");
let SignInpassword = document.querySelector("#password");
let SignInBtn = document.querySelector(".SignInBtn");

let WelcomeName = "";


// const keys = Object.keys(localStorage);
// for (let key of keys) {

//     if (SignInEmail === key) {

//         if (SignInpassword === JSON.parse(localStorage.getItem(key)).password) {

//             window.location.href = "../index.html";
//             alert("Logged In");

//         }

//     }
// }



// const welcomeTag = document.querySelector(".WelcomeTag");

// console.log(welcomeTag);


// let currentUser = "";



function SignInForm() {
    // e.preventDefault();
    // console.log("form");

    // const pro1 = new pr





    SignInEmail = SignInEmail.value;
    SignInpassword = SignInpassword.value;




    if ((SignInEmail && SignInpassword) != "") {



        localStorage.setItem("currentUser", SignInEmail);

        const keys = Object.keys(localStorage);
        for (let key of keys) {

            if (SignInEmail === key) {

                if (SignInpassword === JSON.parse(localStorage.getItem(key)).password) {


                    WelcomeName = JSON.parse(localStorage.getItem(key)).name;
                    // console.log(WelcomeName);
                    // timeOut();
                    alert("Logged In");
                    window.location.href = "../index.html";

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