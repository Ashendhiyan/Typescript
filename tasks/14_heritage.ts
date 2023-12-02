
// heritage


enum Classification{
    MAMMAL = "MAMMAL",
    BIRD="BIRD"
}

interface Animal{
    classification:Classification;
}

class Person implements Animal{
    name:string;
    protected nic:number;
    age:number;
    classification: Classification = Classification.MAMMAL;


    constructor(name: string, nic: number, age: number) {
        this.name = name;
        this.nic = nic;
        this.age = age;
    }
}

class Teacher extends Person{
    // name:string;
    // nic:number;
    // age:number;

    subject:string;
    college:string;

    constructor(name: string, nic: number, age: number, subject: string, college: string) {
        // this.name = name;
        // this.nic = nic;
        // this.age = age;

        super(name,nic,age);

        this.subject = subject;
        this.college = college;
    }
    getNic():number{
        return this.nic;
    }

}

let teacher = new Teacher("Kavindu",200100603359,25,"RMAD","IJSE");

console.log(teacher.name);
console.log(teacher.getNic());
console.log(teacher.age);
console.log(teacher.subject);
console.log(teacher.college);