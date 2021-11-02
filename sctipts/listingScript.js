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
                    none;" class="p-1 deleteRecord" href="#">

                <i  class="fas fa-times ali"></i>
            </a>

            <a style="color:  #12b886; text-decoration:
                    none;" data-bs-toggle="modal" data-bs-target="#SearchModal11" data-bs-whatever="@mdo" class="p-1 viewRecDetails" href="#">

                <i class="fas fa-edit"></i> 
                
                
            </a>
            </td>
        </tr> 
        
        `);
    });
}


xhr.send();



setTimeout(() => {

    deleteRec();
    viewAllDetails();

}, 1000);



//This function fetches all details from json file and display the complete record
function viewAllDetails() {
    const viewRecDetails = document.querySelectorAll(".viewRecDetails");

    viewRecDetails.forEach((element, index) => {

        // console.log(element);
        element.addEventListener('click', function() {

            // console.log(index);



            const ViewAllKey = document.querySelector("#ViewAllKey");
            const ViewAllDate = document.querySelector("#ViewAllDate");
            const ViewAllTransId = document.querySelector("#ViewAllTransId");
            const ViewAllName = document.querySelector("#ViewAllName");
            const ViewAllFatherName = document.querySelector("#ViewAllFatherName");
            const ViewAllEmail = document.querySelector("#ViewAllEmail");
            const ViewAllFund = document.querySelector("#ViewAllFund");
            const ViewAllAmount = document.querySelector("#ViewAllAmount");
            const ViewAllCountry = document.querySelector("#ViewAllCountry");
            const ViewAllMobile = document.querySelector("#ViewAllMobile");
            const ViewAllAge = document.querySelector("#ViewAllAge");
            const ViewAllPassport = document.querySelector("#ViewAllPassport");
            const ViewAllIncome = document.querySelector("#ViewAllIncome");
            const ViewAllCity = document.querySelector("#ViewAllCity");



            const xhr = new XMLHttpRequest();

            xhr.open('get', "data.json", "true");


            // getting all the json.data   and storing its response into an object 

            xhr.onload = function() {
                const obj1 = JSON.parse(this.responseText);

                // console.log(obj1[index].name);
                ViewAllKey.setAttribute("value", obj1[index].key);
                ViewAllDate.setAttribute("value", obj1[index].date);
                ViewAllTransId.setAttribute("value", obj1[index].transactoinid);
                ViewAllName.setAttribute("value", obj1[index].name);
                ViewAllFatherName.setAttribute("value", obj1[index].fatherName);
                ViewAllEmail.setAttribute("value", obj1[index].email);
                ViewAllFund.setAttribute("value", obj1[index].fundraiser);
                ViewAllAmount.setAttribute("value", obj1[index].amount);
                ViewAllCountry.setAttribute("value", obj1[index].country);
                ViewAllMobile.setAttribute("value", obj1[index].mobile);
                ViewAllAge.setAttribute("value", obj1[index].age);
                ViewAllPassport.setAttribute("value", obj1[index].Passport);
                ViewAllIncome.setAttribute("value", obj1[index].income);
                ViewAllCity.setAttribute("value", obj1[index].city);



            }


            xhr.send();






        })
    });
}


//This function deletes the record from table. 
function deleteRec() {

    const myTable = document.querySelector(".table1");
    const tr = myTable.getElementsByTagName('tr');
    const DeleteId = document.querySelector("#DeleteId1");
    const deleteRecord = document.querySelectorAll(".deleteRecord");

    deleteRecord.forEach((element, index) => {
        element.addEventListener('click', function() {

            const confirmation = confirm("Are you sure you want to delete this record?")
            if (confirmation) {
                tr[index + 1].style.display = "none";
            }

        })
    });
}

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
    // console.log(searchKey);

    for (let i = 1; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[2];

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