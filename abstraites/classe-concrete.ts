import { ClasseAbstraite } from "./classe-abstraite";



export class ClasseConcrete extends ClasseAbstraite {
    
    maMethodeAbstraite(arg: number): string {
        return arg+'';
    }

}