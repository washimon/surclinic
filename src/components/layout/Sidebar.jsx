const Sidebar = () => {
    return (
        <aside>
            <ul>
                <li className="current-page"><i class="fas fa-clipboard-list"></i> Dashboard</li>
                <li><i class="fas fa-user-md"></i> Médico</li>
                <li><i class="fas fa-users"></i> Paciente</li>
                <li><i class="fas fa-calendar-check"></i> Cita</li>
                <li><i class="fas fa-pills"></i> Medicina</li>
                <li><i class="fas fa-cogs"></i> Ajustes</li>
            </ul>
        </aside>
    );
}

export default Sidebar;
