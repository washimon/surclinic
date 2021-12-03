import { createChatBotMessage } from 'react-chatbot-kit';
import Overview from './widgets/Overview';

const config = {
    botName: 'MurphyBot',
    lang: 'no',
    customStyles: {
        botMessageBox: {
            backgroundColor: "#095996"
        },
        chatButton: {
            backgroundColor: "#5995F7"
        }
    },
    initialMessages: [
        createChatBotMessage(
            // 'Hi, I\'m here to provide you with latest COVID 19 data to keep you safe!'
            'Hola. Yo soy MurphyBot, aquí te ayudaré en cualquier duda que tengas con el uso de esta aplicación.'
        ),
        createChatBotMessage(
            'Aquí están algunos botones con los que puedes empezar presionándolos o escribe aquí algo que desees consultar.',
            {
                delay: 400,
                widget: 'overview'
            }
        ),
    ],
    state: {
        gist: ''
    },
    widgets: [
        {
            widgetName: "overview",
            widgetFunc: (props) => <Overview {...props} />,
            mapStateToProps: ["messages"]
        }
    ]
}

export default config;