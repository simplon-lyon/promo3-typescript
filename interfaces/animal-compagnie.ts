/*
    Une interface ne contiendra que des définitions
    de méthodes et propriétés.
    Comme elle ne contient aucune algorithmie, on ne
    peut l'utiliser telle quelle, il faudra d'abord
    l'implémenter sur une classe explicitement ou
    implicitement (sur un objet)
    L'intérêt d'une interface réside dans le typage
    uniquement, elle n'apporte pas de fonctionnalités
    "concrètes" mis à part dans l'organisation du
    code. (La preuve, une fois compilée en JS, les 
    interfaces disparaissent)
*/
export interface AnimalCompagnie {
    seGratter():void;
    manger(aliment:string):void;
    emettreSon():string;
}