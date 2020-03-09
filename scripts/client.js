$(document).ready(onReady);

function onReady() {

    console.log('js');

    $("#btn-submit").on('click', handleClick);

    addSalary();
}

//global list of employees
let employeeList = [];

function handleClick(event) {
    console.log('in handleClick');
    event.preventDefault();

    //Get our input values
    const fname = $('#first-name').val();
    const lname = $('#last-name').val();
    const id = $('#id').val();
    const title = $('#title').val();
    const salary = $('#annual-salary').val();

    console.log('Got the inputs:', fname, lname, id, title, salary);

    $('#first-name').val('');
    $('#last-name').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annual-salary').val('');


    addEmployee(fname, lname, id, title, salary);
    console.log('All employee', employeeList);

    // //Show our pets on thee DOM
    appendEmployeesToDom()

    addSalary();
}


function addEmployee(fname, lname, id, title, salary) {
    console.log('In addEmployee');
    let employee = { fname, lname, id, title, salary }
    console.log('New employee is:', employee);
    employeeList.push(employee);
}

function appendEmployeesToDom() {
    console.log('In-appendEmployeeToDom');
    $('#myTable').empty();
    for (let i = 0; i < employeeList.length; i++) {
        let employee = employeeList[i];
        let table = document.getElementById("myTable");
        let row = table.insertRow(0);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);
        cell1.innerHTML = employeeList[i].fname;
        cell2.innerHTML = employeeList[i].lname;
        cell3.innerHTML = employeeList[i].id;
        cell4.innerHTML = employeeList[i].title;
        cell5.innerHTML = employeeList[i].salary;
        cell6.innerHTML = '';


        
    } 
    
}


    function addSalary() {
        console.log('in add salary');
        let totalSalary = 0;
        for (let h = 0; h < employeeList.length; h++) {
            totalSalary += Number(employeeList[h].salary);
            console.log('total salary', employeeList[h].salary);
            let el = $('#totalsalary');
            el.empty();
            el.append(totalSalary);

            if (totalSalary > 20000) {
                $('#totalsalary').addClass('red');
            }
        }
    }




