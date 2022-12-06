let readline = require('readline-sync');
let person = {
    Name: "loc",
    Old: 2022,
    
};
function hople(person){
    if (person.Name.length != 0 && person.Name.length < 20){
        console.log('person hop le')
    }
    else {
        console.log('person khong hop le')
    }
}
hople(person)   