import AboutTwo from "@/components/sections/about/aboutTwo"
import MarqueTwo from "@/components/sections/marques/marqueTwo"
import ProjectsTwo from "@/components/sections/projects/projectsTwo"
import Offer from "@/components/sections/offer"
import PageTitle from "@/components/sections/pageTitle"
import TeamesThree from "@/components/sections/teames/teamesThree"

const About = () => {
  return (
    <>
      <PageTitle title="About Us" currentPage="About Us"/>
      <AboutTwo/>
      <Offer/>
      <ProjectsTwo/>
      <MarqueTwo className="section-padding"/>
      <TeamesThree/>
    </>
  )
}

export default About