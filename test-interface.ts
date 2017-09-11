

import { AnimalCompagnie } from "./interfaces/animal-compagnie";
import { Chien } from "./interfaces/chien";
import { Chat } from "./interfaces/chat";


let chien = new Chien('fido', 'corgi');

chien.allerChercher();

const animaux: AnimalCompagnie[] = [];
animaux.push(chien);
animaux.push(new Chat('moumouche', 'persan'));


for(let animal of animaux) {
    animal.manger('pâtée');
    console.log(animal.emettreSon());
    animal.seGratter();
}