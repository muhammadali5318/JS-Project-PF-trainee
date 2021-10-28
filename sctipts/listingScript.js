'use strict'


const TableBody = document.querySelector(".table-body");
// console.log(list);
console.log(TableBody);

const xhr = new XMLHttpRequest();

xhr.open('get', "data.json", "true");

xhr.onload = function() {
    const obj = JSON.parse(this.responseText);
    console.log(obj);
    // console.log(obj[0].key);



    obj.forEach(element => {

        // console.log(element);

        TableBody.insertAdjacentHTML('beforeend', `

        <tr>
        <th scope="row">${element.key}</th>
        <td>${element.date}</td>
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.fundraiser}</td>
        <td>${element.amount}</td>

        <td>
            <a style="color: orangered; text-decoration:
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


}

xhr.send();