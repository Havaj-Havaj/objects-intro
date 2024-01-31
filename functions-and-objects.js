let person = {
  name: "Havaj",
};

function getName(obj) {
  return obj.name;
}

console.log(getName(person));

let persons = {
  firstname: "JDIN",
  lastname: "dwa",
};

function getNames(obj) {
  let arr = [];
  arr.push(obj.firstname, obj.lastname);
  return arr;
}
console.log(getNames(persons));

const personss = {
  firstname: "Adam",
  age: 21,
};

function concatNames(obj, lastname) {
  return `${obj.firstname} ${lastname}`;
}

console.log(concatNames(personss, "Baysarov"));

const firstPerson = {
    firstname: 'Adam',
    lastname: 'Baysarov',
    fathername: undefined
  };
  
  const secondPerson = {
    firstname: 'Adam',
    lastname: 'Baysarov',
    fathername: 'Ruslanovich'
  };
  
  
    function correctName (obj) {
       if (obj.fathername === undefined){
         return obj.firstname
       } else return `${obj.firstname}  ${obj.lastname}  ${obj.fathername}` 
    }
    
  console.log(correctName(firstPerson)); 
  console.log(correctName(secondPerson)); 