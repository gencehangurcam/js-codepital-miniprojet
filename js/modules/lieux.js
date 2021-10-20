import {patients} from './patient.js'
export class Lieux{
    constructor(nom, salle){
        this.nom = nom
        this.salle = salle
    }
    // caisse(patient){
    //     switch (patient.traitement) {
    //         case 'ctrl+maj+f':
    //             // if (patients.Marcus.argent >= 60) {
    //             //     patients.Marcus.etatDeSante = 'gueris'
    //             //     console.log('voici votre traitement');    
    //             // // } else{
    //             // //     patients.Marcus.goTo(pharmacie, cimetiere.salle)
    //             // // }
    //             break;
    //         case 'unsave':
    //             patient.etatDeSante = 'gueris'
    //             console.log('votre traitement est ctrl+maj+f aller a la pharmacie prendre cela');
    //             break;
    //         case '404':
    //             patient.etatDeSante = 'gueris'
    //             console.log('votre traitement est ctrl+maj+f aller a la pharmacie prendre cela');
    //             break;
    //         case 'azmatique':
    //             patient.etatDeSante = 'gueris'
    //             console.log('votre traitement est ctrl+maj+f aller a la pharmacie prendre cela');
    //             break;
    //         case 'syntaxError':
    //             patient.etatDeSante = 'gueris'
    //             console.log('votre traitement est ctrl+maj+f aller a la pharmacie prendre cela');
    //             break;
    //         default:
    //             break;
    //     }
    // }
}

//lieu
export let pharmacie = new Lieux('pharmacie', [])
export let salleDattente = new Lieux('salleDattente', [])
export let cimetiere = new Lieux('cimetiere', [])
