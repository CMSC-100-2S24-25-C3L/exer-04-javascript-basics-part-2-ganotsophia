import {v4 as uuidv4} from 'uuid';

function generateUniqueID(FName, LName){
    let myuuid = uuidv4();
    var first = FName[0];
    let firstResult = first.toLowerCase();
    let lastResult = LName.toLowerCase();

    var final = firstResult + lastResult + myuuid;
    console.log(final);
}

function addAccount([fName, lName, email, age]){

    

}

export default generateUniqueID;