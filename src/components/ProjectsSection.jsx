export const ProjectsSection = () => {
    return (
        <section id='projects' className="projects">
            <h2 className="section__title">Proyectos</h2>
            <div className="projects__container">
                <div className="project__item">
                    <h3 className="project__title">Taller de Reparación de Dispositivos Electrónicos</h3>
                    <p className="project__description">
                        Software integral para gestionar inventario, reparaciones y pagos en un
                        taller de reparación.
                    </p>
                    <div className="project__icons">
                        <i className="devicon-java-plain colored"></i>
                        <i className="devicon-mysql-original colored"></i>
                    </div>
                    <a href='https://github.com/patinodeveloper/Gestion-Reparacion-de-Dispositivos'
                        target='_blank' className='btn-project'>Ver Proyecto</a>
                </div>
                <div className="project__item">
                    <h3 className="project__title">Sistema Web ERP Veterinaria</h3>
                    <p className="project__description">
                        Sistema web para la gestión de clientes, mascotas y servicios en una clínica veterinaria.
                    </p>
                    <div className="project__icons">
                        <i className="devicon-mysql-original colored"></i>
                        <i className="devicon-javascript-plain colored"></i>
                        <i className="devicon-html5-plain-wordmark colored"></i>
                        <i className="devicon-bootstrap-plain colored"></i>
                        <i className="devicon-php-plain colored"></i>
                    </div>
                    <a href='https://github.com/patinodeveloper/Veterinaria-MVC-Pre'
                        target='_blank' className='btn-project'>Ver Proyecto</a>
                </div>
                <div className="project__item">
                    <h3 className="project__title">API de Citas Médicas</h3>
                    <p className="project__description">
                        API Back-End para la gestión de citas médicas, incluyendo doctores,
                        especialidades, pacientes y citas.
                    </p>
                    <div className="project__icons">
                        <i className="devicon-java-plain colored"></i>
                        <i className="devicon-spring-original colored"></i>
                        <i className="devicon-mysql-original colored"></i>
                    </div>
                    <a href='https://github.com/patinodeveloper/MedMeet---Medical-Appointments-API'
                        target="_blank" className='btn-project'>Ver Proyecto</a>
                </div>
                <div className="project__item">
                    <h3 className="project__title">Sistema de Citas Médicas</h3>
                    <p className="project__description">
                        Front-End para la gestión de citas médicas, visualización en tablas,
                        formularios en vantana modal y enrutamiento con React-Router.
                    </p>
                    <div className="project__icons">
                        <i className="devicon-react-original colored"></i>
                        <i className="devicon-bootstrap-plain colored"></i>
                        <i className="devicon-html5-plain-wordmark colored"></i>
                    </div>
                    <a href='https://github.com/patinodeveloper/MedMeet-FrontEnd'
                        target="_blank" className='btn-project'>Ver Proyecto</a>
                </div>
                <div className="project__item">
                    <h3 className="project__title">Sistema Integral para la Gestión de una Biblioteca</h3>
                    <p className="project__description">
                        Software integral para gestionar libros, usuarios y prestamos
                        con fecha de devolución y costo de efectivo por día por retraso.
                    </p>
                    <div className="project__icons">
                        <i className="devicon-java-plain colored"></i>
                        <i className="devicon-mongodb-plain colored"></i>
                    </div>
                    <a href='https://github.com/MisaelSalazar/Control-Biblioteca'
                        target='_blank' className='btn-project'>Ver Proyecto</a>
                </div>
            </div>
        </section>
    )
}