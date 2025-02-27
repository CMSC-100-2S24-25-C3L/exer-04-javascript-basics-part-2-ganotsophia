import validator from 'validator';
import {v4 as uuidv4} from 'uuid';
import {appendFileSync, closeSync, openSync} from 'node:fs'

function generateUniqueID(FName, LName){
    let myuuid = uuidv4();
    myuuid = myuuid.substring(0,8);
    var first = FName[0];
    let firstResult = first.toLowerCase();
    let lastResult = LName.toLowerCase();

    var final = firstResult + lastResult + myuuid;
    return final;
    
}

function addAccount([fName, lName, email, age]){

    let fd;
        
    var id = generateUniqueID(fName, lName);
        if(validator.isEmail(email) == true){
            if(age >= 18){
                try{
                    fd = openSync('users.txt', 'a');
                    appendFileSync(fd, `${fName}, ${lName}, ${email}, ${age}, ${id} \n`, 'utf8');

                    console.log('true');
                }catch (err){
                    console.log("file not appended");
                }
                finally{
                    if (fd !=undefined){
                        closeSync(fd);
                    }
                }
                
            }
        }
        else{
            console.log('false');
        }
    

}

export {generateUniqueID, addAccount};