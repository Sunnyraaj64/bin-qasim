import SectionTitle from "@/components/ui/sectionTitle"
// import AboutRoundedTextVideoPopup from "./aboutRoundedTextVideoPopup"
import { Link } from "react-router-dom"

const AboutOne = () => {
  return (
    <section id="about" className="about-section section-padding fix">
      <div className="container">
        <div className="about-wrapper">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-image-items">
                <div className="counter-shape float-bob-y">
                  <div className="icon">
                    <img src="/img/about/icon-1.svg" alt="icon-img" />
                  </div>
                  <div className="content">
                    <h3><span className="count">6,561</span>+</h3>
                  </div>
                </div>
                {/* <AboutRoundedTextVideoPopup/> */}
                <div className="about-image-1 bg-cover wow slideLeft" data-delay=".3" style={{ backgroundImage: 'url("/img/about/01.jpeg")' }}>
                  <div className="about-image-2 wow slideUp" data-delay=".5">
                    <img src="/img/about/02.jpeg" alt="about-img" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="about-content">
                <SectionTitle>
                  <SectionTitle.SubTitle>About Us</SectionTitle.SubTitle>
                  <SectionTitle.Title> Welcome To BinQasim Technical Services</SectionTitle.Title>
                </SectionTitle>
                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                  BinQasim Technical Services is a leading glass and mirror specialist in Dubai, providing comprehensive solutions for residential and commercial projects. We offer expert installation, custom fabrication, and professional maintenance services to transform your spaces with elegant glass and mirror designs.
                </p>
                <div className="about-icon-items">
                  <div className="icon-items wow slideUp" data-delay=".7">
                    <div className="icon">
                      <img src="/img/about/icon-2.svg" alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>Quality Craftsmanship</h4>
                      <p>
                        We use premium materials and precision techniques to ensure every installation meets the highest standards of quality and durability.
                      </p>
                    </div>
                  </div>
                  <div className="icon-items wow slideUp" data-delay=".9">
                    <div className="icon">
                      <img src="/img/about/icon-3.svg" alt="icon-img" />
                    </div>
                    <div className="content">
                      <h4>Expert Consultation</h4>
                      <p>
                        Our experienced team provides personalized guidance to help you choose the perfect glass and mirror solutions for your specific needs.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="about-author">
                  <div className="about-button wow slideUp" data-delay=".5">
                    <Link to="/about" className="theme-btn">
                      Explore More
                      <i className="fa-solid fa-arrow-right-long" />
                    </Link>
                  </div>
                  <div className="author-image wow slideUp" data-delay=".7">
                    <img src="/img/about/author.jpeg" alt="author-img" />
                    <div className="content">
                      <h6>Issac Pervez</h6>
                      <p>Founder</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default AboutOne