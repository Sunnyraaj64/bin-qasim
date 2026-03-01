import AboutOne from '@/components/sections/about/aboutOne'
import AppointmentForm from '@/components/sections/appointment/appointmentForm'
import FaqHomeOne from '@/components/sections/faqHomeOne'
import HeroOne from '@/components/sections/heros/heroOne'
import MarqueOne from '@/components/sections/marques/marqueOne'
import MarqueTwo from '@/components/sections/marques/marqueTwo'
import NewsLetter from '@/components/sections/newsLetter'
import PriceGridOne from '@/components/sections/pricing/priceGridOne'
import ProjectsOne from '@/components/sections/projects/projectsOne'
import ServicesOne from '@/components/sections/services/servicesOne'
import TestimonialOne from '@/components/sections/testimonials/testimonialOne'

const Home = () => {
    return (
        <div>
            <HeroOne />
            <MarqueOne/>
            <AboutOne />
            <ServicesOne/>
            <AppointmentForm/>
            <ProjectsOne/>
            <MarqueTwo/>
            <TestimonialOne/>
            <PriceGridOne/>
            <FaqHomeOne/>
            <NewsLetter/>
        </div>
    )
}

export default Home