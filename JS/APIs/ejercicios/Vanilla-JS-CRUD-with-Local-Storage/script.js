let selectedRow = null

// function exceuted when form is submitted
function onFormSubmit() {
    if (validate()) {
        let formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

// function to read recieve data submitted by user
function readFormData() {
    let formData = {};
    formData.fullName = document.getElementById("fullName").value;
    formData.empCode = document.getElementById("empCode").value;
    formData.salary = document.getElementById("salary").value;
    formData.city = document.getElementById("city").value;
    return formData; 
}

//function to display submitted data in a different table
function insertNewRecord(data) {
    let table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    // create a new row and insert data continuosly over the lenght of table
    let newRow = table.insertRow(table.length); // table.length for the subsquent data to be submitted
    cell1 = newRow.insertCell(0); 
    cell1.innerHTML = data.fullName; //cell 1 of row 1
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode; //cell 2 of row 1
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary; //cell 3 of row 1
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;   //cell 4 of row 1
    cell5 = newRow.insertCell(4); 
    cell5.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("empCode").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("empCode").value = selectedRow.cells[1].innerHTML;
    document.getElementById("salary").value = selectedRow.cells[2].innerHTML;
    document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;
    selectedRow.cells[1].innerHTML = formData.empCode;
    selectedRow.cells[2].innerHTML = formData.salary;
    selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

localStorage.setItem('items', JSON.stringify(newRow));
const data = JSON.parse(localStorage.getItem('items'));

const liMaker = (text) => {
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

localStorage.setItem('items', )