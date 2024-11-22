import api from '../assets/api.png'
import { AboutMeSection } from './AboutMeSection';
import { ProjectsSection } from './ProjectsSection';

export const BodyView = () => {

    return (
        <>
            {/* About Me Section */}
            <AboutMeSection />
            {/* <!-- Projects Section --> */}
            <ProjectsSection />

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
