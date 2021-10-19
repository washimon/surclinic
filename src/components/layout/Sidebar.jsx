const Sidebar = () => {
    return (
        <aside>
            <ul>
                <li className="current-page"><i className="fas fa-clipboard-list"></i> Dashboard</li>
                <li><i className="fas fa-user-md"></i> Médico</li>
                <li><i className="fas fa-users"></i> Paciente</li>
                <li><i className="fas fa-calendar-check"></i> Cita</li>
                <li><i className="fas fa-pills"></i> Medicina</li>
                <li><i className="fas fa-cogs"></i> Ajustes</li>
            </ul>
        </aside>
    );
}

export default Sidebar;
