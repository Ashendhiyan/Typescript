// Arrays

let num_array:number[] = [1,2,3,4,5];
let str_array:string[] = ['ranil', 'gota', 'mahinda'];
let str_num_array:(number | string)[] = [1,2,'ranil',3,'mahinda'];


let student1 = {id:1, name:'kavindu', age:28, faculty:'CSE'};
let student2 =  {id:2, name:'Kamal', age:22, faculty:'TONIC'};

let student3 =  {id:3, name:'Ashen', age:23, faculty:'SE', uni: 'uoC'};


let students : {id: number; name: string; age: number; faculty: string, uni?: string}[] = [];

students.push(student1);
students.push(student2);
students.push(student3);