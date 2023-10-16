import { GluegunCommand } from 'gluegun'
import getTranslation, { Languages } from '../config/translations'

const command: GluegunCommand = {
  name: 'config',
  run: async (toolbox) => {
    const { print, prompt, filesystem} = toolbox

    const result = await prompt.ask([
      {
        type:'select',
        name: "language",
        message: "Select a language / Selecione o idioma",
        choices: Object.values(Languages), 
      },
    ])

    await filesystem.writeAsync(global.configPath, result)

    //FINISH
    global.config = await filesystem.readAsync(global.configPath, "json")
    global.translations = getTranslation()
    const {finishConfig} = global.translations
    
    print.success(finishConfig)
  }
}
module.exports = command