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
