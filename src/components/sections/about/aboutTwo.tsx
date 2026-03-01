import SectionTitle from "@/components/ui/sectionTitle"
import { Link } from "react-router-dom"

const AboutTwo = () => {
    return (
        <section id="about" className="about-section section-padding fix bg-cover" style={{ backgroundImage: 'url("/img/service/service-bg-2.jpg")' }}>
            <div className="container">
                <div className="about-wrapper style-2">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="circle-shape">
                                    <img src="/img/about/circle.png" alt="shape-img" />
                                </div>
                                <div className="counter-shape float-bob-y">
                                    <div className="icon">
                                        <img src="/img/about/icon-1.svg" alt="icon-img" />
                                    </div>
                                    <div className="content">
                                        <h3><span className="count">25</span>Years</h3>
                                        <p>Of Experience</p>
                                    </div>
                                </div>
                                <div className="about-image-1 bg-cover wow slideLeft" data-delay=".3" style={{ backgroundImage: 'url("/img/about/03.jpeg")' }}>
                                    <div className="about-image-2 wow slideUp" data-delay=".5">
                                        <img src="/img/about/04.jpeg" alt="about-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mt-4 mt-lg-0">
                            <div className="about-content">
                                <SectionTitle>
                                    <SectionTitle.SubTitle>About Us</SectionTitle.SubTitle>
                                    <SectionTitle.Title>Welcome To BinQasim Technical <span>Services</span></SectionTitle.Title>
                                </SectionTitle>
                                <p className="mt-3 mt-md-0 wow slideUp" data-delay=".5">
                                    BinQasim Technical Services is a leading glass and mirror specialist company based in Dubai, dedicated to providing exceptional quality and professional service. With years of experience in the industry, we have established ourselves as trusted experts in glass installation, mirror services, and custom fabrication solutions for both residential and commercial clients across the UAE.
                                </p>
                                <div className="about-icon-items">
                                    <div className="icon-items wow slideUp" data-delay=".7">
                                        <div className="icon">
                                            <img src="/img/about/icon-4.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>Premium Quality</h4>
                                            <p>
                                                We use only the finest materials and advanced techniques to ensure lasting durability and exceptional results
                                            </p>
                                        </div>
                                    </div>
                                    <div className="icon-items wow slideUp" data-delay=".9">
                                        <div className="icon">
                                            <img src="/img/about/icon-5.svg" alt="icon-img" />
                                        </div>
                                        <div className="content">
                                            <h4>Expert Craftsmanship</h4>
                                            <p>
                                                Our skilled team brings precision and attention to detail to every project, delivering excellence in every installation
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
                                            <h6>Issac pervez</h6>
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

export default AboutTwo