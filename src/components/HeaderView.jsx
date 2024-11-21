import { NavbarView } from "./NavbarView";

export const HeaderView = () => {

    return (
        <>
            <header>
                <a className="logo__container" href="https://patinodeveloper.github.io/my-website">
                    <h1 className="logo__container--bold">Antonio</h1>
                    <span className="logo__container--lighter">Patiño</span>
                </a>

                <NavbarView />
                <a className="cta" href="#">Contáctame</a>
            </header>
        </>
    );
};
