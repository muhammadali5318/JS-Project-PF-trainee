'use strict'

console.log("I'm Listing script");


/*
Purpose: This file listingScript.js is responsible redner all the data from "data.json" file in the tabel.
user can search data by name and user can also use advance search to find specific record
*/




//getting table body in which we want to render date
const TableBody = document.querySelector(".table-body");


// ***************  Fetching Data From "Data.JSON" By API calling ****************
const xhr = new XMLHttpRequest();

xhr.open('get', "data.json", "true");


// getting all the json.data   and storing its response into an object 

xhr.onload = function() {
    const obj = JSON.parse(this.responseText);
    
    // "for each" loop treverse all the JSON data and render it on table
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




// *************************** Add New Transaction ************************

const AddTransBtn = document.querySelector(".AddTransBtn");
let AddTransDate = document.querySelector("#AddTransDate");
let AddTransName = document.querySelector("#AddTransName");
let AddTransEmail = document.querySelector("#AddTransEmail");
let AddTransFund = document.querySelector("#AddTransFund");
let AddTransAmount = document.querySelector("#AddTransAmount");


AddTransBtn.addEventListener("click", function(e) {

        e.preventDefault();

        AddTransDate = AddTransDate.value;
        AddTransName = AddTransName.value;
        AddTransEmail = AddTransEmail.value;
        AddTransFund = AddTransFund.value;
        AddTransAmount = AddTransAmount.value;




        const transObj = {
            TransDate: AddTransDate,
            TransName: AddTransName,
            TransEmail: AddTransEmail,
            TransFund: AddTransFund,
            TransAmount: AddTransAmount
        }

        localStorage.setItem("Transaction", JSON.stringify(transObj));


        const transactionData = JSON.parse(localStorage.getItem("Transaction"));

        TableBody.insertAdjacentHTML('beforeend', `

    <tr  class="tabRow" >

     <th scope="row">22</th>
     <td>${transactionData.TransDate}</td>
     <td>${transactionData.TransName}</td>
     <td>${transactionData.TransEmail}</td>
     <td>${transactionData.TransFund}</td>
     <td>${transactionData.TransAmount}</td>



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


    }

);



// ************************** simple search function *******************


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



// **************************** Advance Search Function ********************


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


