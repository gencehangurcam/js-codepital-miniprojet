import { Doctor } from './modules/doctor.js'
import { Patient } from './modules/patient.js'
import { chat } from './modules/chat.js'
import { Lieux } from './modules/lieux.js';


// PERSONNAGE
let Debugger = new Doctor('Debugger', 0, [chat]);
let patient1 = new Patient('Marcus', 'mal indenté', 100, [], 'malade');
let patient2 = new Patient('Optimus', 'unsave', 200, [], 'malade');
let patient3 = new Patient('Sangoku', '404', 80, [], 'malade');
let patient4 = new Patient('DarthVader', 'azmatique', 110, [], 'malade');
let patient5 = new Patient('Semicolon', 'syntaxError', 60, [], 'malade');


// les patiens sont a la salle d attente
Lieux.salleDattente = [patient1, patient2, patient3, patient4, patient5];
console.log("SALLE DATTENTE", Lieux.salleDattente, "----");

// // le docteur fait rentrer un patient (Marcus)
// Debugger.patientIn(patients.Marcus)
// console.log("CABINET DOCTEUR", Debugger.cabinet, "----")

// // la patient paye le docteur
// patients.Marcus.payer(50)
// // le docteur recupere l argent de c main
// Debugger.argent -= 50

// // Le docteur accepte et donne le diagnostique
// Debugger.diagnostique(patients.Marcus)

// // le docteur autorise le patient a quitte la salle
// Debugger.patientOut(patients.Marcus)

// //le patient va a la pharmacie
// patients.Marcus.goTo(salleDattente, pharmacie)

console.log(Lieux.salleDattente);

let consultation = patient => {
    Debugger.patientIn(patient);
    Debugger.diagnostique(patient);
    Debugger.patientOut(patient);
    patient.goTo(Lieux.salleDattente, Lieux.pharmacie);
    // patient.takeCare();
};


while(Lieux.salleDattente.length > 0){
    chat.miauler();
    consultation(Lieux.salleDattente[0]);
};


//il espere pouvoir acheter un medicament

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

