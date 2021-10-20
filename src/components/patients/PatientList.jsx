const Patientlist = () => {
    return (
        <div className="results-table">
            <h2 className="table-title">Lista de pacientes: <span>Todos</span></h2>
            <div className="table">
                <div className="headers">
                    <h4>Id</h4>
                    <h4>Descripción</h4>
                    <h4>Stock</h4>
                    <h4>Precio</h4>
                    <h4>Categoría</h4>
                </div>
                <div className="rows rows-1">
                    <p>1</p>
                    <p>Revista de material fino máximo 45 hojas</p>
                    <p>500</p>
                    <p>9.50</p>
                    <p>Libros</p>
                    {/* <div className="actions">
                    <a href="/ads"><i className="fas fa-edit"></i>Detalles</a>
                    <span>|</span>
                    <a href="/ads"><i className="fas fa-edit"></i>Edita</a>
                    <span>|</span>
                    <a href="/ads"><i className="fas fa-trash-alt"></i>Elimina</a>
                </div> */}
                </div>
                <div className="rows rows-2">
                    <p>1</p>
                    <p>Revista de material fino máximo 45 hojas</p>
                    <p>500</p>
                    <p>9.50</p>
                    <p>Libros</p>
                    {/* <div className="actions">
                    <a href="/ads"><i className="fas fa-edit"></i>Detalles</a>
                    <span>|</span>
                    <a href="/ads"><i className="fas fa-edit"></i>Edita</a>
                    <span>|</span>
                    <a href="/ads"><i className="fas fa-trash-alt"></i>Elimina</a>
                </div> */}
                </div>
            </div>
        </div>
    );
}

export default Patientlist;
