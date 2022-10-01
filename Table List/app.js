// All variables
const studentName = document.getElementById("name");
const courseName = document.getElementById("course");
const coursePrice = document.getElementById("price");
const addBtn = document.querySelector(".submit");
const studentList = document.getElementById("studentList");

addBtn.addEventListener("click", function (event) {
  event.preventDefault();

  if (
    studentName.value == "" ||
    courseName.value == "" ||
    coursePrice.value == ""
  ) {
    alert("Please fill all the field...");
  } else {
    // creating row
    const newRow = document.createElement("tr");

    // creating student name
    const newStudentName = document.createElement("td");
    newStudentName.innerHTML = studentName.value;
    newRow.appendChild(newStudentName);

    // creating course name
    const newCourseName = document.createElement("td");
    newCourseName.innerHTML = courseName.value;
    newRow.appendChild(newCourseName);

    // creating price tag
    const newPriceName = document.createElement("td");
    newPriceName.innerHTML = "TK " + coursePrice.value;
    newRow.appendChild(newPriceName);

    // creating delete Field
    const newDeleteField = document.createElement("td");
    newRow.appendChild(newDeleteField);

    // creating a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("btn");
    deleteBtn.classList.add("btn-danger");
    deleteBtn.classList.add("delete");
    deleteBtn.innerHTML = "Delete Item";
    newDeleteField.appendChild(deleteBtn);

    // inserting the data to table body
    studentList.appendChild(newRow);

    studentName.value = "";
    courseName.value = "";
    coursePrice.value = "";

    let deleteItems = document.querySelectorAll(".delete");

    console.log(deleteItems);
    // deleteItems.addEventListener("click", function(event){
    //     event.target.parentElement.parentElement.remove()
    // })

    // for (const btn of deleteItems) {
    //   btn.addEventListener("click", function (e) {
    //     e.target.parentElement.parentElement.remove();
    //   });
    // }

    deleteItems.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.target.parentElement.parentElement.remove();
      });
    });

    // if(deleteItems.length){
    //   deleteItems.map((btn) => {
    //     console.log(btn);
    //     btn.addEventListener("click", (e) => {
    //       console.log(e.target.parentElement);
    //     });
    //   });
    // }
  }
});
