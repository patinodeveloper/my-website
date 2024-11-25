import { BodyView } from "./components/BodyView"
import { FooterView } from "./components/FooterView"
import { HeaderView } from "./components/HeaderView"
import { HeroView } from "./components/HeroView"

export const MyWebsiteApp = () => {

    return (
        <>
            <HeaderView />
            <HeroView />
            <main>
                <BodyView />
            </main>
            <FooterView />
        </>
    )
}