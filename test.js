import {generateUniqueID, addAccount} from './index.js'


var firstName = 'Alan';
var lastName = 'Turing';
var email1 = 'aturing@w3c.com';
var email2 = 'aturingw3c.com'
var email3 = 'aturing@w3c'


generateUniqueID(firstName, lastName);
addAccount(["Alan", "Turing", email1, 58]);
addAccount(["Tim", "Berner", email1, 58]);

addAccount(["Ted", "Nelson", email3, 58]);