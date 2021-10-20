import {Human} from './human.js'
import {chat} from './chat.js'
import { patients } from './patient.js'
import { salleDattente } from './lieux.js'
export class Doctor extends Human{
    constructor(nom,argent,cabinet){
        super(nom, argent)
        this.cabinet = cabinet
    }
    diagnostique(patient){
        switch (patient.maladie) {
            case 'mal indenté':
                patient.traitement = 'ctrl+maj+f'
                console.log('votre traitement est ctrl+maj+f aller a la pharmacie prendre cela');
                break;
            case 'unsave':
                patient.traitement = 'ctrl+maj+f'
                console.log('votre traitement est ctrl+maj+f aller a la pharmacie prendre cela');
                break;
            case '404':
                patient.traitement = 'ctrl+maj+f'
                console.log('votre traitement est ctrl+maj+f aller a la pharmacie prendre cela');
                break;
            case 'azmatique':
                patient.traitement = 'ctrl+maj+f'
                console.log('votre traitement est ctrl+maj+f aller a la pharmacie prendre cela');
                break;
            case 'syntaxError':
                patient.traitement = 'ctrl+maj+f'
                console.log('votre traitement est ctrl+maj+f aller a la pharmacie prendre cela');
                break;
            default:
                break;
        }
    }
    patientIn(patients){
        console.log(`Entrer svp mr ${patients.nom}`);
        patients.etatDeSante = 'traitement'
        this.cabinet[0].push(patients)
        salleDattente.salle.splice(patients)
    }
    patientOut(patients){
        console.log(`au revoir mr ${patients.nom}`);
        patients.etatDeSante = 'malade'
        this.cabinet[0].splice(patients)
        salleDattente.salle.push(patients)
    }
}


//docteur Debugger
export let Debugger = new Doctor('Debugger', 0, [[], chat])
