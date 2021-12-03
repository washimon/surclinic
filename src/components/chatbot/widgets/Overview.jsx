import Options from "./Options";

const GeneralOptions = (props) => {

    const options = [
        // {
        //   name: "Crear un registro de médico",
        //   handler: props.actionProvider.handleGlobalStats,
        //   id: 1
        // },
        // {
        //   name: "Crear un registro de paciente",
        //   handler: props.actionProvider.handleLocalStats,
        //   id: 2
        // },
        {
          name: "Opciones frecuentes",
          handler: props.actionProvider.handleOptions,
          id: 1
        },
        {
          name: "Soporte",
          handler: props.actionProvider.handleSupport,
          id: 2
        },
      ];

    return <Options options={options} title="Opciones" {...props} />
}

export default GeneralOptions;
