'use strict'

console.log("I'm user profile");


// ********************Nav bar welcome *********************** 
let ProfileName = document.querySelector("#ProfileName");
let ProfileEmail = document.querySelector("#ProfileEmail");
let ProfilePassword = document.querySelector("#ProfilePassword");
let ProfileConPassword = document.querySelector("#ProfileConPassword");

console.log(ProfilePassword);


const user = localStorage.getItem("currentUser");


const keys = Object.keys(localStorage);
for (let key of keys) {
    // console.log(key);
    if (key === user) {
        const CurrentUserData = JSON.parse(localStorage.getItem(key));
        ProfileName.setAttribute("value", CurrentUserData.name);
        ProfileEmail.setAttribute("value", CurrentUserData.email);
        ProfilePassword.setAttribute("value", CurrentUserData.password);
        ProfileConPassword.setAttribute("value", CurrentUserData.confirmPassword);


    }
}


ProfileName = ProfileName.value;
ProfileEmail = ProfileEmail.value;
ProfilePassword = ProfilePassword.value;
ProfileConPassword = ProfileConPassword.value;
console.log(ProfileEmail);
let validate = true;

function UpdateInfo() {


    let ProfileNameUpdate = document.querySelector("#ProfileName");
    let ProfilePasswordUpdate = document.querySelector("#ProfilePassword");
    let ProfileConPasswordUpdate = document.querySelector("#ProfileConPassword");
    let ProfileEmailUpdate = document.querySelector("#ProfileEmail");


    ProfileNameUpdate = ProfileNameUpdate.value;
    ProfileEmailUpdate = ProfileEmailUpdate.value;
    ProfilePasswordUpdate = ProfilePasswordUpdate.value;
    ProfileConPasswordUpdate = ProfileConPasswordUpdate.value;
    console.log(ProfileEmailUpdate);


    // console.log(signUpname);

    const time = new Date();
    const agent = navigator.userAgent;



    const obj = {
        name: ProfileNameUpdate,
        email: ProfileEmailUpdate,
        password: ProfilePasswordUpdate,
        confirmPassword: ProfileConPasswordUpdate,
        SignUpTime: time,
        UserAgent: agent
    }




    console.log(obj);

    if (true) {


        const keys = Object.keys(localStorage);
        for (let key of keys) {

            if (ProfileEmailUpdate === key) {
                validate = false;
                alert("Email Already Exists");

            }
        }

        if (validate) {

            if ((ProfilePassword === ProfileConPassword)) {

                localStorage.setItem(obj.email, JSON.stringify(obj));
                localStorage.setItem("currentUser", ProfileEmailUpdate);
                localStorage.removeItem(ProfileEmail);
                alert("Your account Information is Updated");
            } else {
                alert("Password Does not match")
            }

        }
    }
}