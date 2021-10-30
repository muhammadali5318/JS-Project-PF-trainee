'use strict'


const TableBody = document.querySelector(".table-body");
// console.log(TableBody);

const xhr = new XMLHttpRequest();

xhr.open('get', "data.json", "true");

xhr.onload = function() {
    const obj = JSON.parse(this.responseText);
    // console.log(obj);
    let i = 1;
    obj.forEach(element => {

        TableBody.insertAdjacentHTML('beforeend', `

        <tr  class="tabRow" >

        <th scope="row">${element.key}</th>
        <td>${element.date}</td>
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.fundraiser}</td>
        <td>${element.amount}</td>

        <td >
            <a    style="color: orangered; text-decoration:
                    none;" class="p-1 " href="#">

                <i  class="fas fa-times ali"></i>
            </a>

            <a style="color: #12b886; text-decoration:
                    none;" class="p-1" href="">

                <i class="fas fa-edit"></i> 
                
                
            </a>
            </td>
        </tr> 
        
        `);
    });
}





xhr.send();





// const del = document.getElementById('deleteReco');
// const del = document.getElementsByTagName("i"); // return html collection
const x = document.querySelector(".tabRow");
const del = document.getElementsByTagName("i");
console.log(x);



























function searchFunc() {


    const myTable = document.querySelector(".table1");
    const tr = myTable.getElementsByTagName('tr');

    let searchKey = document.querySelector("#searchId").value.toUpperCase();
    console.log(searchKey);

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[1];

        if (td) {
            let textvalue = td.textContent || td.innerHTML;
            console.log(textvalue);

            if (textvalue.toUpperCase().indexOf(searchKey) > -1) {
                tr[i].style.display = "";
                console.log("second if");
            } else {
                console.log("else");
                tr[i].style.display = "none";
            }
        }
    }
};


const SearchBtn = document.querySelector(".searchBtn");

SearchBtn.addEventListener('click', function(e) {

    e.preventDefault();



    const myTable = document.querySelector(".table1");
    const tr = myTable.getElementsByTagName('tr');
    console.log("I am advance search");

    let searchByDate = document.querySelector("#searchByDate").value.toUpperCase();
    let searchByName = document.querySelector("#searchByName").value.toUpperCase();
    let searchByEmail = document.querySelector("#searchByEmail").value.toUpperCase();
    let searchByFund = document.querySelector("#searchByFund").value.toUpperCase();
    let searchByAmount = document.querySelector("#searchByAmount").value.toUpperCase();


    for (let i = 1; i < tr.length; i++) {

        var date = tr[i].getElementsByTagName('td')[0];
        var name = tr[i].getElementsByTagName('td')[1];
        var email = tr[i].getElementsByTagName('td')[2];
        var fund = tr[i].getElementsByTagName('td')[3];
        var amount = tr[i].getElementsByTagName('td')[4];


        if (name || date || email || fund || amount) {

            var date = date.textContent || date.innerHTML;
            var name = name.textContent || name.innerHTML;
            var email = email.textContent || email.innerHTML;
            var fund = fund.textContent || fund.innerHTML;
            var amount = amount.textContent || amount.innerHTML;

            console.log(email.toUpperCase().indexOf(searchByEmail));


            if ((name.toUpperCase().indexOf(searchByName) > -1) || (email.toUpperCase().indexOf(searchByEmail) > -1) && (fund.toUpperCase().indexOf(searchByFund) > -1) && (amount.toUpperCase().indexOf(searchByAmount) > -1) && (date.toUpperCase().indexOf(searchByDate) > -1)) {

                tr[i].style.display = "";
                console.log("second if");
                console.log(tr[i]);
            } else {
                console.log("else");
                tr[i].style.display = "none";
            }


        }
    }


});



// const del = document.querySelector(".deleteRecord");
// const del = document.getElementsByTagName('i');