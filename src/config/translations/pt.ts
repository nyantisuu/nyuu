import Translations from "./Translation";

export const portugues:Translations = {
    welcome: "Bem vindo ao seu CLI",
    promptsNewProj: [
        {
          type: 'multiselect',
          name: 'Chats',
          message: 'Selecione as plataformas de Chat (Espaço seleciona)',
          choices: ['Discord', 'Telegram', 'WhatsApp'],
        },
        {
          type: 'select',
          name: 'API',
          message: 'Selecione a framework para a API',
          choices: ['ExpressJS', 'None'],
        },
    ],
    finishConfig:"Configurado",
}