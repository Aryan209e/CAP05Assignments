let Name = document.getElementById('name')
let Password = document.getElementById('age')
let display1 = document.getElementById('display1')
let display2 = document.getElementById('display2')
let tableName = document.getElementById('Name')
let tableage = document.getElementById('Age')

function btn(){
  let Name1 = Name.value;
  let age = Password.value
localStorage.setItem(Name1,age);
// console.log(localStorage.getItem(Name1));
}

function data(){
  display1.textContent = age.value
  tableName.textContent = Name.value;
  tableage.textContent = age.value
    

}

