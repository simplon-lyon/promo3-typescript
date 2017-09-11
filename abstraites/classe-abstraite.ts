
/*
Une classe abstraite est une classe qui se comporte 
comme une classe normale à la différence qu'elle peut
définir des méthodes abstraites : des méthodes sans
algorithmie avec juste un nom, des types d'entrées
et un type de retour.

Elle ne peut pas être instanciée directement, il faudra
créer une classe qui héritera de la classe abstraite
et implémentera toutes ses méthodes abstraites.

(ça peut permettre d'avoir par exemple un tronc de
méthodes et d'algorithmie communs, tout en laissant
certaines méthodes dans le "flou" afin de rendre le
code modulaire)
*/
export abstract class ClasseAbstraite {
    private maProp:string = 'bloup';

    maMethode():string {
        return this.maProp+' !!! '
            +this.maMethodeAbstraite(10);
    }

    abstract maMethodeAbstraite(arg:number):string;

}