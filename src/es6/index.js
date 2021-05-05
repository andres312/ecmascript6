function newFunction(name, age, country) {
    var name = name || 'oscar';
    var age = age || 32;
    var country = country || 'MX'
}

//es6
function newFunction2(name = 'oscar', age = 32, country = 'MX') {
    console.log(name, age, country);    
};
newFunction2();
newFunction2('andres', 35, 'col');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world
console.log(epicPhrase);

//es6
let epicPhrase2 = `${hello} ${world}` 

let lorem = 'lorem adfasd adfasdf akadfads lad adf adlfk \n'
    + 'otra fase epica que necesitamos';
//es6
let lorem2 = `otra frase epica que necesitamos
    ahora es otra frase epica
`;

console.log(lorem)
console.log(lorem2)

let person = {
    'name': 'andres',
    'age': 35,
    'country': 'MX'
}
//antes de es6
console.log(person.name)
//es6
let {name, age} = person;
console.log(name, age);
let team1 = ['oscar', 'julian', 'andres']
let team2 = ['valeria', 'jessica', 'camila']
let education = ['david', ...team1, ...team2];
console.log(education)
{
    var globalVar = 'Global var';
}
{
    let globalLet = 'Global let';
    console.log(globalLet);
}
console.log(globalVar);

//antes de es6
var b = 'b';
b = 'b';
//es6
const a = 'a';
a = 'a';

let name = 'andres';
let age = 35;

// antes de es6
obj = {name: name, age: age};
//es6
obj2 = {name, age}

console.log (obj, obj2);

const names = [
    { name: 'andres', age: 35},
    { name: 'Yesica', age: '29'}
]
// antes de es6
let listOfNames = names.map(function (item) {
    console.log(item.name);
})
//es6
let listOfNames2 = names.map(item => console.log(item.name));
const listOfNames3 = (name, age, country) => {
    console.log(name, age, country)
}
const listOfNames4 = name => {
    console.log(name)
}
const square = num => num * num;
console.log(square(4));

const helloPromise = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey salio bien')
        } else {
            reject('Ups algo salio mal');
        }
    })
}
helloPromise()
    .then(response => console.log(response))    
    .catch(error => console.log(error))