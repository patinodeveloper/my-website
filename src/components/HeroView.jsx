export const HeroView = () => {

    return (
        <>
            <div className="hero">
                <div className="hero__container">
                    <div className="hero__text--bold">
                        <h1>¡Bienvenido/a!</h1>
                    </div>
                    <div className="hero__text--light">
                        <p>¡Hola!, mi nombre es José Antonio Patiño Galicia, soy estudiante
                            y desarrollador de software :)
                        </p>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1BHMUUZl7KZU2ZZtymZgPw5TJ6L-wG3Gs"
                            className="hero__button"
                        >
                            Descargar CV
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}