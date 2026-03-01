import AboutOne from '@/components/sections/about/aboutOne'
import AchievementOne from '@/components/sections/achievements/achievementOne'
import FaqHomeOne from '@/components/sections/faqHomeOne'
import HeroOne from '@/components/sections/heros/heroOne'
import MarqueOne from '@/components/sections/marques/marqueOne'
import MarqueTwo from '@/components/sections/marques/marqueTwo'
import NewsLetter from '@/components/sections/newsLetter'
import PriceGridOne from '@/components/sections/pricing/priceGridOne'
import ProjectsOne from '@/components/sections/projects/projectsOne'
import ServicesOne from '@/components/sections/services/servicesOne'
import TeamesOne from '@/components/sections/teames/teamesOne'
import TestimonialOne from '@/components/sections/testimonials/testimonialOne'
const HomeOneSingle = () => {
    return (
        <>
            <HeroOne />
            <MarqueOne />
            <AboutOne />
            <ServicesOne />
            <AchievementOne />
            <ProjectsOne />
            <MarqueTwo />
            <TestimonialOne />
            <TeamesOne />
            <PriceGridOne />
            <FaqHomeOne />
            <NewsLetter />
        </>
    )
}
export default HomeOneSingle