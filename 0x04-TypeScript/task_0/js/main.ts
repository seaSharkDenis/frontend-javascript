// Interface for a student
interface Student{
    firstName:string,
    lastName:string,
    age:number,
    location:string
}


const student1:Student = {
    firstName:"Ken",
    lastName: "Zimmer",
    age: 23,
    location:"America"
};
const student2:Student = {
    firstName:"Daniel",
    lastName: "Tsunoda",
    age: 25,
    location:"Japan"
};
const studentList: Student[] = [student1, student2];

const table = document.createElement("table");

studentList.forEach((student)=>{
    const row = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
});

document.body.appendChild(table);