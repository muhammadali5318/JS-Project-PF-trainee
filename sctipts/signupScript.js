'use strict'
console.log("I'm sign up script");


var signUpname = document.querySelector("#signUpInputname");
var SignUpEmail = document.querySelector("#SignUpInputEmail");
var SignUpPassword = document.querySelector("#password");
var SignUpConPassword = document.querySelector("#password1");
const SignUpBtn = document.querySelector('.SignUpBtn');
// console.log(signUpname);
// const dataObj = {};


let validate = true;

function signUpForm() {

    console.log("signuprun");


    signUpname = signUpname.value;
    SignUpEmail = SignUpEmail.value;
    SignUpPassword = SignUpPassword.value;
    SignUpConPassword = SignUpConPassword.value;
    // console.log(signUpname);

    const time = new Date();
    const agent = navigator.userAgent;



    const obj = {
            name: signUpname,
            email: SignUpEmail,
            password: SignUpPassword,
            confirmPassword: SignUpConPassword,
            SignUpTime: time,
            UserAgent: agent

        }
        // console.log(obj);
        // const XHReq = new XMLHttpRequest();

    // XHReq.open('Get', "https://api.ipify.org?format=json", "true");

    // XHReq.onload = function() {

    //     var Ip = JSON.parse(this.responseText);
    //     Ip = Ip.ip;
    //     obj.UserIp = Ip;
    //     console.log(obj.UserIp);
    //     // return UserIp
    // }
    // XHReq.send();
    // console.log(obj);






    if ((signUpname && SignUpEmail && SignUpPassword && SignUpConPassword) != "") {


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
                // window.location.href = "../index.html"
                // return false;

            } else {
                alert("Password Does not match")
            }

        }
    } else {
        alert("Kindly Fill the information Correctly");
    }

}








// var UserIp;

// function fetchUserIp() {



//     return UserIp;
// }


// fetchUserIp();
// console.log(fetchUserIp());