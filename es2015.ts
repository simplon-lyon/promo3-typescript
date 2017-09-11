//Le let est une variable de block qui n'existera que
//dans le block de code actuel (un block est défini par
// des accolades) et dans les block enfant (si non redéfinie)
let variableScope: string = "bloup";
//Une variable const est une variable read-only qui
//ne pourra pas être redéfinie.
const variableConstante: string = "blip";
//variableConstante = "bonjour tout le monde"; //erreur

if (true) {
    let variableScope = "blip";
    console.log(variableScope); //blip
}

console.log(variableScope); //bloup

let monTableau: string[] = [];

monTableau.filter(function (valeur) {
    return valeur === 'bloup';
});
//Cette instruction est strictement équivalente à celle
//du dessus.
monTableau.filter((valeur) => valeur === 'bloup');
//Et elle est également équivalente à celle ci
monTableau.filter((valeur) => {
    return valeur === 'bloup';
});

//Syntaxe d'import de module
import { MaClasse } from './ma-classe';