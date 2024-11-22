import api from '../assets/api.png'

export const BodyView = () => {

    return (
        <>
            {/* About Me Section */}
            <section id='about' className="about">
                <div className="about__container">
                    <h1 className="section__title">Sobre Mí</h1>
                    <p className="about__description">
                        Soy un estudiante de la carrera de Ingeniería en Sistemas Computacionales,
                        me gusta formar parte del equipo al desarrollar
                        y entablar un ambiente cómodo y confiable,
                        así como también una comunicación eficaz y proporcionar
                        soluciones a los diversos desafíos que suelen surgir en el proceso de desarrollo,
                        me apasiona el desarrollo de software,
                        específicamente el desarrollo web enfocado en el Back-End y el desarrollo de API's,
                        mi lenguaje fuerte de programación en Java y manejo diversas
                        tecnologías que me permiten desarrollar software de calidad, de manera efectiva y segura.
                    </p>
                </div>
            </section>
            {/* <!-- Projects Section --> */}
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
                        <h3 className="project__title">Sistema de Citas Médicas</h3>
                        <p className="project__description">
                            API backend para la gestión de citas médicas, incluyendo horarios de doctores,
                            especialidades y pacientes.
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
                </div>
            </section>

            {/* <!-- Technologies Section --> */}
            <section id='technologies' className="technologies">
                <h2 className="section__title">Tecnologías</h2>
                <div className="technologies__container">
                    <div className="technology__item">
                        <i className="devicon-java-plain colored"></i>
                        <p className="technology__name">Java</p>
                    </div>
                    <div className="technology__item">
                        <i className="devicon-spring-original colored"></i>
                        <p className="technology__name">Spring Boot</p>
                    </div>
                    <div className="technology__item">
                        <img src={api} alt="API REST" />
                        <p className="technology__name">API REST</p>
                    </div>
                    <div className="technology__item">
                        <i className="devicon-javascript-plain colored"></i>
                        <p className="technology__name">JavaScript</p>
                    </div>
                    <div className="technology__item">
                        <i className="devicon-react-original colored"></i>
                        <p className="technology__name">ReactJS</p>
                    </div>
                    <div className="technology__item">
                        <i className="devicon-mysql-original colored"></i>
                        <p className="technology__name">MySQL</p>
                    </div>
                    <div className="technology__item">
                        <i className="devicon-mongodb-plain colored"></i>
                        <p className="technology__name">MongoDB</p>
                    </div>
                    <div className="technology__item">
                        <i className="devicon-html5-plain-wordmark colored"></i>
                        <p className="technology__name">HTML5</p>
                    </div>
                    <div className="technology__item">
                        <i className="devicon-css3-plain-wordmark colored"></i>
                        <p className="technology__name">CSS3</p>
                    </div>
                    <div className="technology__item">
                        <i className="devicon-reactbootstrap-original colored"></i>
                        <p className="technology__name">Bootstrap 5</p>
                    </div>
                    <div className="technology__item">
                        <i className="devicon-git-plain colored"></i>
                        <p className="technology__name">Git</p>
                    </div>
                    <div className="technology__item">
                        <i className="devicon-github-original"></i>
                        <p className="technology__name">Github</p>
                    </div>
                </div>
            </section>
        </>

    );
};
