// ------------- let/ const --------------
var a=1 ;
for (let index = 0; index < 6; index++) {
    console.log(index);   
}
console.log(index); //error

// ------------- arrow functions -------------
function sum (a,b) {
    return (a+b);
}

console.log(sum(1,2));

let sum = () => (1+2);
console.log(first)

//array
const jobs = [
    {id: 1, isActive: true}, 
    {id: 2, isActive: true}, 
    {id: 3, isActive: false}
];
let active = jobs.filter(function (job) {
    return job.isActive;
});
let activeJob = jobs.filter(job => job.isActive);

const color = ["red", "green", "white"];
const items = colors.map(color => '<li>${color}</li>');

//---------------- spread operator ------------------
//array
const first =[1,2,3];
const second =[4,5,6];
const combined = first.concat(second);
const combined_1 = [...first, ...second];

const clone =[...first];

//combined 2 objects -> 1 object
const f = {name: 'Hien'};
const s = {job: 'Doctor'};

const combined_obj = {...f, ...s, location 'Q7' };
const clone_obj ={...s};

//function
function sum1 (a,b,c) {
    return a+b+c;
}

const numbers= [1,2,3];
console.log(sum.apply(null, numbers));
console.log(sum(...numbers));

//--------------------- objects -------------------------
const person ={
    name:'Hien'
    age:16,
    walk: function() {},
    talk() {console.log('talk')}
};
person.talk();
person ['name'] ='Ky';
const target = 'age';
person [target] = 18;
console.log(person.name);
console.log(person.age);

//---------------- this keyword ------------------
const human = {name:'Hien', walk () {console.log(this)}}
human.walk(); //return this object

// --------------- binding this ------------------
const obj = {
    name: 'Hien',
    walk () {
        console.log(this);
    }
}

const walk = obj.walk.bind(obj);
walk();

// --------------- arrow functions & this ----------------
const obj = {
    name:"Hien"
    talk() {
        setTimeout(function(){
            console.log('this', this);
        }),1000;
    }
}

// personalbar.talk(); //error -> bc outside object (pass 2 funcs)
const obj_solved = {
    name:"Hien";
    talk () {
        var self = this ; // declare a new var to save the value of 'this'
        setTimeout (() => console.log("this", self), 1000);
    },
};
console.log(obj_solved.talk());

//--------------classes----------------
class Person {
    constructor(name){
        this.name = name;
    }

    walk () {
        console.log('walk');
    }
}

const p1 = new Person ("Hien");
p1.walk();
console.log(p.name);

// ---------------- Inheritance ------------------
class Teacher extends Person {
    constructor(name, degree){
        super(name);
        this.degree = degree
    }
}

const rs1 = list.filter(item => item%2==0);
console.log (rs1);

const rs2 = list.filter (item => item>10);
console.log (rs2);