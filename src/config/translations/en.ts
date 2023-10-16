import Translations from "./Translation";

export const english:Translations = {
    welcome: "Welcome to your CLI",
    promptsNewProj: [
        {
          type: 'multiselect',
          name: 'Chats',
          message: 'Select chat platforms (Space selects)',
          choices: ['Discord', 'Telegram', 'WhatsApp'],
        },
        {
          type: 'select',
          name: 'API',
          message: 'Select API server framework',
          choices: ['ExpressJS', 'None'],
        },
    ],
    finishConfig:"Configured",
}