class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    handleOptions = (options) => {
        const message = this.createChatBotMessage(
            // "How can I help you? Below are some possible options.",
            "¿Cómo puedo ayudarte? Aquí tienes algunas posibles opciones. \"Registrar doctor. Registrar paciente. Soporte.\"",
            {
                widget: "overview",
                loading: true,
                terminateLoading: true,
                ...options
            }
        );

        this.addMessageToState(message);
    };

    handleSupport = () => {
        const message = this.createChatBotMessage(
            `Contacto de Soporte
            Número: 948281892
            Email: soporte@gmail.com`,
            {
                widget: "localStatistics",
                loading: true,
                terminateLoading: true,
                withAvatar: true
            }
        );

        this.addMessageToState(message);
    };
    handleCreateDoctor = () => {
        const message = this.createChatBotMessage(
            `Para crear un médico: 1. Ir a la página principal. 2. Ir a link "Médicos". 3. Pulsar en botón "Registra médico". 4. Llenar todos los campos requeridos. Puede obviar los campos opcionales. 5. Dar click en el botón "Registrar". 6. El médico ya se habrá registrado.`,
            {
                widget: "localStatistics",
                loading: true,
                terminateLoading: true,
                withAvatar: true
            }
        );

        this.addMessageToState(message);
    };
    handleCreatePatient = () => {
        const message = this.createChatBotMessage(
            `Para crear un paciente: 1. Ir a la página principal. 2. Ir a link "Pacientes". 3. Pulsar en botón "Registra paciente". 4. Llenar todos los campos requeridos. Puede obviar los campos opcionales. 5. Dar click en el botón "Registrar". 6. El paciente ya se habrá registrado.`,
            {
                widget: "localStatistics",
                loading: true,
                terminateLoading: true,
                withAvatar: true
            }
        );

        this.addMessageToState(message);
    };

    addMessageToState = (message) => {
        this.setState((state) => ({
            ...state,
            messages: [...state.messages, message]
        }));
    };
}

export default ActionProvider;