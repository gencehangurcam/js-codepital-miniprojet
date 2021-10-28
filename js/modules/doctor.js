import {Human} from './human.js'
import {Lieux} from './lieux.js'


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
    patientIn(patient){
        console.log(`Entrer svp mr ${patient.nom}`);
        patient.etatDeSante = 'traitement'
        this.cabinet.push(patient);
        Lieux.salleDattente.splice(Lieux.salleDattente.indexOf(patient), 1)
    }
    patientOut(patient){
        console.log(`au revoir mr ${patient.nom}`);
        this.cabinet.pop();
        Lieux.salleDattente.push(patient)
    }
}
