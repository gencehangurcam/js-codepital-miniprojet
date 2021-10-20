import { Debugger } from './doctor.js'
import {Human} from './human.js'
import { pharmacie } from './lieux.js'

export class Patient extends Human{
    constructor(nom,argent, maladie, poche, etatDeSante, traitement){
        super(nom, argent)
        this.maladie = maladie
        this.poche = poche
        this.etatDeSante = etatDeSante
        this.traitement = traitement
    }
    goTo(depart,arriver){
        arriver.salle.push(this.nom)
        depart.salle.splice(this.nom)
    }
    takeCare(){
        
    }
    payer(cout){
        this.argent = this.argent - cout;
        return cout;
    }
}

//patient
export let patients = {
    Marcus : new Patient('Marcus', 100, 'mal indenté', '', 'malade'),
    Optimus : new Patient('Optimus', 200, 'unsave', '', 'malade'),
    Sangoku : new Patient('Sangoku', 80, '404', '', 'malade'),
    Dark : new Patient('DarkVador', 110, 'azmatique', '', 'malade'),
    billy : new Patient('Semicolon', 60, 'syntaxError', '', 'malade')
}
