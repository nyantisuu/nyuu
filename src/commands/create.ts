import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'create',
  run: async (toolbox) => {
    const { print, prompt } = toolbox 
    const {promptsNewProj} = global.translations

    const result = await prompt.ask(promptsNewProj)
    print.debug(result)
  },
}

module.exports = command
