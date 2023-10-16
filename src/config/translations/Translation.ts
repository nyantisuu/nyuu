
type Translations = {
    welcome: string,
    promptsNewProj:[
        {
          type: 'multiselect',
          name: 'Chats',
          message: string,
          choices: ['Discord', 'Telegram', 'WhatsApp'],
        },
        {
          type: 'select',
          name: 'API',
          message: string,
          choices: ['ExpressJS', 'None'],
        },
    ],
    finishConfig: string,
}

export default Translations;