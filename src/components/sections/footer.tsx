import { SuCallMessage, SuEmail, SuLocation } from "@/lib/icons";
import { Link } from "react-router-dom";

const contactInfo = [
    {
        icon: <SuCallMessage />,
        label: "Call Us 7/24",
        value: "+971 58 881 9493",
        link: "tel:+971588819493",
    },
    {
        icon: <SuEmail />,
        label: "Make a Quote",
        value: "Issackuku83@gmail.com",
        link: "mailto:infotech@gmail.com",
    },
    {
        icon: <SuLocation />,
        label: "Location",
        value: "Hor Al Anz East, Deira, Dubai, United Arab Emirates",
    },
];

const quickLinks = [
    { text: "About Us", link: "/about" },
    { text: "FAQ'S", link: "/faq" },
    { text: "Contact Us", link: "/contact" },
];

const Footer = () => {
    return (
        <footer className="footer-section footer-bg">
            <div className="container">
                <div className="contact-info-area">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className="contact-info-items wow slideUp"
                            data-delay={`${0.3 + index * 0.2}`}
                        >
                            <div className="icon">{info.icon}</div>
                            <div className="content">
                                <p>{info.label}</p>
                                <h3>
                                    {info.link ? (
                                        <Link to={info.link}>{info.value}</Link>
                                    ) : (
                                        info.value
                                    )}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="footer-widgets-wrapper">
                <div className="shape-1">
                    <img src="/img/footer-shape-1.png" alt="shape-img" />
                </div>
                <div className="container">
                    <div className="row justify-content-between">
                        <div
                            className="col-xl-3 col-lg-4 col-md-6 wow slideUp"
                            data-delay=".3"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link to="/">
                                        <img src="/img/logo/main-logo.png" alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        BinQasim Technical Services is Dubai's premier provider of glass and mirror solutions, delivering exceptional quality and professional service for all your glass installation and fabrication needs.
                                    </p>
                                    <div className="social-icon d-flex align-items-center">
                                        <Link to="#">
                                            <i className="fab fa-facebook-f" />
                                        </Link>
                                        <Link to="#">
                                            <i className="fab fa-instagram" />
                                        </Link>
                                        <Link to="#">
                                            <i className="fab fa-tiktok" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-xl-2 col-lg-4 col-md-6 wow slideUp"
                            data-delay=".5"
                        >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Quick Links</h3>
                                </div>
                                <ul className="list-area">
                                    {quickLinks.map((link, index) => (
                                        <li key={index}>
                                            <Link to={link.link}>
                                                <i className="fa-solid fa-chevron-right" />
                                                {link.text}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom style-2">
                <div className="container">
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="wow slideLeft color-2" data-delay=".3">
                            © All Copyright 2025 by <Link to="index">BinQasim Technical Services.</Link> {" "}
                             
                        </p>
                    </div>
                </div>
                <Link to="#" id="scrollUp" className="scroll-icon">
                    <i className="fa fa-arrow-up" />
                </Link>
            </div>
        </footer>
    );
};

export default Footer;