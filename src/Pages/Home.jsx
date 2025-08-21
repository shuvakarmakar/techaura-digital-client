import Contact from '../Sections/Contact';
import CTA from '../Sections/CTA';
import Hero from '../Sections/Hero';
import Services from '../Sections/Services';
import Testimonials from '../Sections/Testimonials';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Services></Services>
            <Testimonials></Testimonials>
            <CTA></CTA>
            <Contact></Contact>
        </div>
    );
};

export default Home;