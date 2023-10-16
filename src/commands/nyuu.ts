import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'nyuu',
  run: async (toolbox) => {
    const { print } = toolbox 
    const {welcome} = global.translations
    
    print.success(welcome)
  },
}

module.exports = command
