'use strict'


const userLogTable = document.querySelector(".userLogTable");

const userLog = localStorage.getItem("currentUser");

const UserLogIp = localStorage.getItem("userIp");
console.log(UserLogIp);

const keysOfUL = Object.keys(localStorage);
for (let key of keysOfUL) {
    // console.log(key);
    if (key === userLog) {
        const CurrentUserData = JSON.parse(localStorage.getItem(key));
        // console.log(CurrentUserData);

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