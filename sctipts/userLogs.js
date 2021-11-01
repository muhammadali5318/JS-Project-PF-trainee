'use strict'


/*
Purpose: This file userlogs.js is responsible to render user logs data on userlog.html page.
We use localStorage to save users data.
*/

//tabel in which we want to render data
const userLogTable = document.querySelector(".userLogTable");

// fetching user ip and current user key
const userLog = localStorage.getItem("currentUser");
const UserLogIp = localStorage.getItem("userIp");


// getting all the data keys from local storage and store it into a variable
// for loop treverse all the key and fetch the data againset desired email. and render that specific data on page
const keysOfUL = Object.keys(localStorage);
for (let key of keysOfUL) {

    if (key === userLog) {
        const CurrentUserData = JSON.parse(localStorage.getItem(key));

        userLogTable.insertAdjacentHTML("afterbegin", `

        <tr>
        <td>${CurrentUserData.SignUpTime}</td>
        <td>${CurrentUserData.name}</td>
        <td>${CurrentUserData.email}</td>
        <td>${CurrentUserData.UserAgent}</td>
        <td>${UserLogIp}</td>
    </tr>

        `);
    }
}