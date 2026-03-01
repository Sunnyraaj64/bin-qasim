import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import MobileMenuList from './mobileNavBar';

const ExtraInfoOffcanvas = () => {
    const [isInfoOpen, setInfoOpen] = useState(false);

    const toggleOffcanvas = () => {
        setInfoOpen(!isInfoOpen);
    };

    const offcanvasMarkup = (
        <>
            <div className="fix-area">
                <div className={`offcanvas__info ${isInfoOpen ? 'info-open' : ''}`}>
                    <div className="offcanvas__wrapper">
                        <div className="offcanvas__content">
                            <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                                <div className="offcanvas__logo">
                                    <Link to="/">
                                        <img src="/img/logo/main-logo.png" alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="offcanvas__close">
                                    <button onClick={toggleOffcanvas}>
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <MobileMenuList/>
                            <p className="text d-none d-lg-block">
                                BinQasim Technical Services is your trusted partner for premium glass and mirror solutions in Dubai. We specialize in professional installation, custom fabrication, and expert repair services for residential and commercial projects.
                            </p>
                            <div className="mobile-menu fix mb-3" />
                            <div className="offcanvas__contact">
                                <h4>Contact Info</h4>
                                <ul>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon">
                                            <i className="fal fa-map-marker-alt" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link to="#">Hor Al Anz East, Deira, Dubai, United Arab Emirates</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-envelope" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link to="mailto:Issackuku83@gmail.com">Issackuku83@gmail.com</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="fal fa-clock" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link to="#">Monday - Sunday, 9:00 AM - 5:00 PM</Link>
                                        </div>
                                    </li>
                                    <li className="d-flex align-items-center">
                                        <div className="offcanvas__contact-icon mr-15">
                                            <i className="far fa-phone" />
                                        </div>
                                        <div className="offcanvas__contact-text">
                                            <Link to="tel:+971588819493">+971 58 881 9493</Link>
                                        </div>
                                    </li>
                                </ul>
                                <div className="header-button mt-4">
                                    <a 
                                        href="#appointment-section" 
                                        className="theme-btn text-center"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setInfoOpen(false); // Close the offcanvas
                                            setTimeout(() => {
                                                const element = document.getElementById('appointment-section');
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                                }
                                            }, 300); // Small delay to allow offcanvas to close
                                        }}
                                    >
                                        <span>get A Quote<i className="fa-solid fa-arrow-right-long" /></span>
                                    </a>
                                </div>
                                <div className="social-icon d-flex align-items-center">
                                    <Link to="#"><i className="fab fa-facebook-f" /></Link>
                                    <Link to="#"><i className="fab fa-instagram" /></Link>
                                    <Link to="#"><i className="fab fa-tiktok" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`offcanvas__overlay ${isInfoOpen ? 'overlay-open' : ''}`} onClick={toggleOffcanvas} />
        </>
    );

    return (
        <>
            <div className="sidebar__toggle" onClick={toggleOffcanvas}>
                <i className="fas fa-bars" />
            </div>
            {typeof document !== 'undefined' ? createPortal(offcanvasMarkup, document.body) : offcanvasMarkup}
        </>
    );
};

export default ExtraInfoOffcanvas;