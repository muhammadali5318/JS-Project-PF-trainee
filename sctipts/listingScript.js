'use strict'


const TableBody = document.querySelector(".table-body");
// console.log(list);
console.log(TableBody);

const xhr = new XMLHttpRequest();

xhr.open('get', "data.json", "true");

xhr.onload = function() {
    const obj = JSON.parse(this.responseText);
    console.log(obj);
    obj.forEach(element => {

        TableBody.insertAdjacentHTML('beforeend', `

        <tr>
        <th scope="row">${element.key}</th>
        <td>${element.date}</td>
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.fundraiser}</td>
        <td>${element.amount}</td>

        <td>
            <a class="deleteRecord" style="color: orangered; text-decoration:
                    none;" class="p-1" href="#">

                <i class="fas fa-times"></i>
            </a>

            <a style="color: #12b886; text-decoration:
                    none;" class="p-1" href="">

                <i class="fas fa-edit"></i> </td>
        </a>
    </tr>
        
        
        `);
    });



    ar[0].name
}

xhr.send();



const myTable = document.querySelector(".table1");
const tr = myTable.getElementsByTagName('tr');
const deleteRecord = document.querySelector(".deleteRecord");


function searchFunc() {

    console.log("hello");



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


}


const SearchBtn = document.querySelector(".searchBtn");

SearchBtn.addEventListener('click', function(e) {

    e.preventDefault();




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



// function AdvanceSearch(a) {

//     a.pr


//     console.log("I am advance search");



//     let searchByDate = document.querySelector("#searchByDate").value.toUpperCase();
//     let searchByName = document.querySelector("#searchByName").value.toUpperCase();
//     let searchByEmail = document.querySelector("#searchByEmail").value.toUpperCase();
//     let searchByFund = document.querySelector("#searchByFund").value.toUpperCase();
//     let searchByAmount = document.querySelector("#searchByAmount").value.toUpperCase();
//     // console.log(searchKey);


//     const myTable = document.querySelector(".table1");
//     const tr = myTable.getElementsByTagName('tr');

//     for (let i = 1; i < tr.length; i++) {

//         let td = tr[i].getElementsByTagName('td')[2];

//         if (td) {
//             let textvalue = td.textContent || td.innerHTML;
//             console.log(textvalue);

//             if (textvalue.toUpperCase().indexOf(searchByName) > -1) {
//                 tr[i].style.display = "";
//                 console.log("second if");
//             } else {
//                 console.log("else");
//                 tr[i].style.display = "none";
//             }


//         }
//     }


// }