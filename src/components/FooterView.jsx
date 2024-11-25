export const FooterView = () => {

    return (
        <footer className="footer">
            <div className="footer__container">
                <h2 id="contact" className="section__title">Contáctame</h2>
                <div className="footer__social">
                    <a href="https://github.com/patinodeveloper" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/antonio-patino-dev/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="mailto:pepe_toni_02@hotmail.com">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
                <p className="footer__text">
                    © 2024 José Antonio Patiño Galicia - Todos los derechos reservados.
                </p>
            </div>
        </footer>
    );
};
