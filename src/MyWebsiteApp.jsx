import { BodyView } from "./components/BodyView"
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
        </>
    )
}