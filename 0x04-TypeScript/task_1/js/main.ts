interface ITeacher {
    readonly firstName: string,
    fullTimeEmployee: boolean,
    readonly lastName: string,
    location: string,
    yearsOfExperience?: number,
    [key: string]: any
}

const teacher1: ITeacher = {
    firstName: "Stephen",
    fullTimeEmployee: true,
    lastName: "Kingori",
    location: "Nakuru",
    contract: true,
    hasHealthFund: false
};

const teacher2: ITeacher = {
    firstName: "Stephen",
    fullTimeEmployee: true,
    lastName: "Kingori",
    location: "Nakuru",
    contract: true,
    hasHealthFund: "Yes"
};

console.log(teacher1);
console.log(`contract: ${teacher1["contract"]}`);
console.log(`firstName: ${teacher1["firstName"]}`);
console.log(`fullTimeEmployee: ${teacher1["fullTimeEmployee"]}`);
console.log(`lastName: ${teacher1["lastName"]}`);
console.log(`location: ${teacher1["location"]}`);

// Interface called Directors that extends Teacher. It requires an attribute
// named numberOfReports(number)
interface Directors extends ITeacher {
    numberOfReports: number;
}

const director1: Directors = {
    firstName: "Denis",
    lastName: "Ndiritu",
    location: "Nairobi",
    fullTimeEmployee: false,
    numberOfReports: 23
};

console.log(director1);
console.log(`firstName: ${director1.firstName}`)
console.log(`fullTimeEmployee: ${director1.fullTimeEmployee}`)
console.log(`lastName: ${director1.lastName}`)
console.log(`location: ${director1.location}`)
console.log(`numberOfReports: ${director1.numberOfReports}`)

// printTeaccher function that accepts two arguments and returns the first
// letter of the firstName and the full lastName
function printTeacher(firstName: string, lastName: string): string {
    const firstLetter = firstName[0];
    return `${firstLetter}. ${lastName}`;
}

interface printTeacherFunction {
    (firstName: string, secondName: string): string;
}

const myName: printTeacherFunction = printTeacher;
console.log(myName("John", "Doe"));


// Student class
interface StudentClassInterface {
    workOnHomeWork(): string;
    displayName(): string;
}
interface StudentClassConstructor {
    new(firstName: string, lastName: string): StudentClassInterface;
}
class StudentClass implements StudentClassInterface {
    constructor(private firstName: string, private lastName: string) { }

    workOnHomeWork(): string {
        return `Currently working`;
    }

    displayName(): string {
        return `${this.firstName}`;
    }
}

interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
}

interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
}

class Director implements DirectorInterface {
    workFromHome(): string {
        return `Working from home`;
    }
    getCoffeeBreak(): string {
        return `Getting a coffee break`;
    }
    workDirectorTasks(): string {
        return `Getting to director tasks`;
    }
}

class Teacher implements TeacherInterface {
    workFromHome(): string {
        return `Cannot work from home`;
    }
    getCoffeeBreak(): string {
        return `Cannot have a break`;
    }
    workTeacherTasks(): string {
        return `Getting to work`;
    }
}

function createEmployee(salary: number | string): Teacher | Director {
    if (typeof salary === "number" && salary < 500) {
        return new Teacher();
    } else {
        return new Director();
    }
}

console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

