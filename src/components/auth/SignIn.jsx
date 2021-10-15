const SignIn = () => {
    return (
        <div className="form">
            <form>
                <span className="clinic-branch">
                    <i class="fas fa-clinic-medical"></i> SurClinic
                </span>
                <h1>Inicia sesión</h1>
                <span>¿Todavía no tienes cuenta? <span>Crea una cuenta</span></span>
                <label htmlFor="id-username">Nombre de usuario</label>
                <input
                    id="id-username"
                    type="text"
                    autoFocus
                />
                <label htmlFor="id-password">Contraseña</label>
                <input
                    id="id-password"
                    type="password"
                />
                <button>Iniciar sesión</button>
            </form>
            <div className="form-banner">
                <div className="banner"></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5995f7" fill-opacity="1" d="M0,128L60,144C120,160,240,192,360,192C480,192,600,160,720,138.7C840,117,960,107,1080,133.3C1200,160,1320,224,1380,256L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>
    );
}

export default SignIn;