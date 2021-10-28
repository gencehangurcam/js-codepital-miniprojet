import {Human} from './human.js'
import {Lieux} from './lieux.js'

let traitement = {
    "ctrl+maj+f": 60,
    "saveOnFocusChange": 100,
    "CheckLinkRelation": 35,
    "Ventoline": 40,
    "f12+doc": 20,
};

export class Patient extends Human{
    constructor(nom,argent, maladie, poche, etatDeSante){
        super(nom, argent)
        this.maladie = maladie
        this.poche = poche
        this.etatDeSante = etatDeSante
        this.goTo = function(depart,arriver){
            console.log(depart, arriver);
            depart.splice(depart.indexOf(this), 1);
            arriver.push(this);
        }
        this.takeCare = function(){
            if(Lieux.pharmacie.indexOf(this) != -1){
                if(this.argent >= traitement[this.traitement]){
                    console.log(this.nom, ' a assez d\'argent pour son traitement !');
                    this.etatSante = "Bonne santé";
                    this.argent -= traitement[this.traitement];
                    this.goTo(Lieux.pharmacie.salle, Lieux.rue);
                } else {
                    console.log(this.nom, ' n\'a pas assez d\'argent pour son traitement...');
                    this.etatSante = "Mort";
                    this.goTo(Lieux.pharmacie, Lieux.cimetiere);
                }
                console.log('L\'état du patient est: "', this.etatSante,'"');
            } else {
                console.log("Le patient n'est pas à la Pharmacie.");
            }
        }
        this.payer = function(cout){
            this.argent = this.argent - cout;
            return cout;
        }
    }
}