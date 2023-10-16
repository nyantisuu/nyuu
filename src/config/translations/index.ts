import { english } from "./en"
import { portugues } from "./pt"

export default function getTranslation(){
    const selectedLang = global.config.language

    if(selectedLang===Languages.english) return english
    if(selectedLang===Languages.portugues) return portugues
}

export enum Languages {
  english = "English",
  portugues = "Português",
}
