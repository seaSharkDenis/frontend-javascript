var teacher1 = {
    firstName: "Stephen",
    fullTimeEmployee: true,
    lastName: "Kingori",
    location: "Nakuru",
    contract: true,
    hasHealthFund: false
};
var teacher2 = {
    firstName: "Stephen",
    fullTimeEmployee: true,
    lastName: "Kingori",
    location: "Nakuru",
    contract: true,
    hasHealthFund: "Yes"
};
console.log(teacher1);
console.log("contract: ".concat(teacher1["contract"]));
console.log("firstName: ".concat(teacher1["firstName"]));
console.log("fullTimeEmployee: ".concat(teacher1["fullTimeEmployee"]));
console.log("lastName: ".concat(teacher1["lastName"]));
console.log("location: ".concat(teacher1["location"]));
var director1 = {
    firstName: "Denis",
    lastName: "Ndiritu",
    location: "Nairobi",
    fullTimeEmployee: false,
    numberOfReports: 23
};
console.log(director1);
console.log("firstName: ".concat(director1.firstName));
console.log("fullTimeEmployee: ".concat(director1.fullTimeEmployee));
console.log("lastName: ".concat(director1.lastName));
console.log("location: ".concat(director1.location));
console.log("numberOfReports: ".concat(director1.numberOfReports));
// printTeaccher function that accepts two arguments and returns the first
// letter of the firstName and the full lastName
function printTeacher(firstName, lastName) {
    var firstLetter = firstName[0];
    return "".concat(firstLetter, ". ").concat(lastName);
}
var myName = printTeacher;
console.log(myName("John", "Doe"));
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    StudentClass.prototype.workOnHomeWork = function () {
        return "Currently working";
    };
    StudentClass.prototype.displayName = function () {
        return "".concat(this.firstName);
    };
    return StudentClass;
}());
