import { AboutMeSection } from './AboutMeSection';
import { ProjectsSection } from './ProjectsSection';
import { TechnologiesSection } from './TechnologiesSection';

export const BodyView = () => {

    return (
        <>
            {/* About Me Section */}
            <AboutMeSection />

            {/* <!-- Projects Section --> */}
            <ProjectsSection />

            {/* <!-- Technologies Section --> */}
            <TechnologiesSection />
        </>

    );
};
