import {Doctor, Debugger} from './modules/doctor.js'
import { Patient, patients } from './modules/patient.js'
import { chat } from './modules/chat.js'
import { Lieux, pharmacie, salleDattente, cimetiere } from './modules/lieux.js';

// les patiens sont a la salle d attente
console.log('--------');
salleDattente.salle.push(patients)
console.log(salleDattente);
console.log('----------');

// le docteur fait rentrer un patient (Marcus)
Debugger.patientIn(patients.Marcus)
console.log(Debugger.cabinet)

// la patient paye le docteur
patients.Marcus.payer(50)
// le docteur recupere l argent de c main
Debugger.argent -= 50

// Le docteur accepte et donne le diagnostique
Debugger.diagnostique(patients.Marcus)

// le docteur autorise le patient a quitte la salle
Debugger.patientOut(patients.Marcus)

//le patient va a la pharmacie
patients.Marcus.goTo(salleDattente, pharmacie)
console.log(pharmacie);

//il espere pouvoir acheter un medicament


console.log('----------');
console.log(salleDattente);
console.log('----------');













// Debugger.patientOut(patients.Marcus)
// patients.Marcus.goTo(salleDattente, pharmacie)
// pharmacie.caisse(patients.Marcus)
// console.log(patients.Marcus);

// Debugger.patientIn(patients.Marcus)
// console.log(Debugger.cabinet);

// // patients.Marcus.goTo(salleDattente.salle, Debugger.cabinet[0]) 
// // cabinet[0] car il y a deux tableaux dans cabinets



// // console.log(Debugger.cabinet);
// // console.log(salleDattente);






//Method diagnostique
// Debugger.diagnostique(patients.Marcus);
// console.log(patients.Marcus);

// //payer Docteur puis recevoir diagnostique
// Debugger.argent = Debugger.argent + patients.Marcus.payer(25)
// Debugger.diagnostique(patients.Marcus);


// console.log(Debugger, patients.Marcus)
// console.log(Debugger);

