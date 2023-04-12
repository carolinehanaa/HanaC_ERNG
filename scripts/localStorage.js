function saveToLocalStorageByName(people){
    //get current values that are saved into local storage
    //create an array of values to store into local storage

    //save updated array to local storage
    localStorage.setItem('people', JSON.stringify(people));

}

function getLocalStorage(){
    // get all of the values that are stored in people in local storage
    let localStorageData = localStorage.getItem('people');

    if(localStorageData == null){
       return []; 
    }


    return JSON.parse(localStorageData);
}

function removeFromLocalStorage(name){
    let people = getLocalStorage();
    
    //find the index of the name in local storage
    let nameIndex = people.indexOf(name);

    //remove the name from the array using the splice method
    people.splice(nameIndex,1);

    //save updated array to local storage
    localStorage.setItem('people', JSON.stringify(people));
    
}

export { saveToLocalStorageByName, getLocalStorage, removeFromLocalStorage }