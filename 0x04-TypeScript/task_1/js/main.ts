interface Teacher{
    readonly firstName:string,
    fullTimeEmployee: boolean,
    readonly lastName:string,
    location:string,
    yearsOfExperience?:number,
    [key:string]:any
}

const teacher1:Teacher = {
    firstName:"Stephen",
    fullTimeEmployee:true,
    lastName:"Kingori",
    location:"Nakuru",
    contract:true,
    hasHealthFund: false
};

const teacher2:Teacher = {
    firstName:"Stephen",
    fullTimeEmployee:true,
    lastName:"Kingori",
    location:"Nakuru",
    contract:true,
    hasHealthFund: "Yes"
};

console.log(teacher1);
console.log(`contract: ${teacher1["contract"]}`);
console.log(`firstName: ${teacher1["firstName"]}`);
console.log(`fullTimeEmployee: ${teacher1["fullTimeEmployee"]}`);
console.log(`lastName: ${teacher1["lastName"]}`);
console.log(`location: ${teacher1["location"]}`);