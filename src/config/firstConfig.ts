import { filesystem, print, prompt } from "gluegun"
import getTranslation, { Languages } from "./translations"
import Translations from "./translations/Translation"

export async function runConfig(){
  global.configPath = filesystem.homedir()+"/.config/nyuu/nyuu.json"
  if(!global.config){
    //Load Config
    global.config = await filesystem.readAsync(global.configPath, "json")

    //If config file doesnt exist
    if(!global.config) {
        //Then create it
        const result = await prompt.ask([
          {
            type:'select',
            name: "language",
            message: "First Time Configuration\nSelect language",
            choices: Object.values(Languages)
          },
        ])
        await filesystem.writeAsync(global.configPath, result)
        global.config = await filesystem.readAsync(global.configPath, "json")
        global.translations = getTranslation()
        const {finishConfig} = global.translations

        //And Return, whe dont want to getTranslation() 2 times
        return print.success(finishConfig)
    }
    global.translations = getTranslation()
  }
}

declare global {
  namespace NodeJS {
    interface Global {
       config: {
          language: Languages
       };
       configPath: string;
       translations: Translations
    } 
  }
}