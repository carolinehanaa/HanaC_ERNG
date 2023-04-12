import { saveToLocalStorageByName, getLocalStorage  } from "./localStorage.js";

// function getJson(){
//     fetch('../data/data.json').then(
//         response => response.json()
//     ).then(
//         data => {classNames = data.classNames
//             pickRandom(classNames)}
//     )
// }

let jsonBtn = document.getElementById("jsonBtn");
let personNameTxt = document.getElementById("personNameTxt");
let lastFive = document.getElementById("lastFive");

let people = []
let personList = document.getElementById("personList")
let addBtn = document.getElementById("addBtn")
let newPerson = document.getElementById('newPerson')
let deleteBtn = document.getElementById('deleteBtn')
let selectedPerson = null;

lastFive.textContent = getLocalStorage();
populateDropdown();

addBtn.addEventListener('click', function(){
    people.push(newPerson.value)
    saveToLocalStorageByName(people)
    populateDropdown()
})

deleteBtn.addEventListener('click', function(){
    people = people.filter(v => v !== selectedPerson); 
    saveToLocalStorageByName(people)
    populateDropdown();
})

function populateDropdown(){
    personList.innerHTML = '';
    people = getLocalStorage()
    for(let i = 0; i < people.length; i++)
    {
        let person = document.createElement('li')
        let personText = document.createElement('a')
        person.addEventListener('click', function(){
            selectedPerson = people[i]
        })
        personText.innerHTML = people[i];
        person.className = 'dropdown-item'
        person.appendChild(personText)
        personList.appendChild(person)
    }
}

jsonBtn.addEventListener("click", function(){
    pickRandom()
})

 function pickRandom(){
    var personName = people[Math.floor(Math.random() * people.length)]
    personNameTxt.textContent = personName;
    console.log(getLocalStorage());
    lastFive.textContent = getLocalStorage();
}