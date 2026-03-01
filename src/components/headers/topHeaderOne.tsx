import { Link } from "react-router-dom"
import LanguageSelector from "./languageSelector"

const TopHeaderOne = ({ wrapperClass, className }: { wrapperClass?: string, className?: string }) => {
    return (
        <div className={`header-top-section fix ${className}`}>
            <div className="container-fluid">
                <div className={`header-top-wrapper ${wrapperClass}`}>
                    <ul className="contact-list">
                        <li>
                            <i className="far fa-envelope" />
                            <Link to="mailto:Issackuku83@gmail.com" className="link">Issackuku83@gmail.com</Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-phone-volume" />
                            <Link to="tel:+971588819493">+971 58 881 9493</Link>
                        </li>
                    </ul>
                    <div className="top-right d-flex align-items-center">
                        <LanguageSelector />
                        <div className="social-icon d-flex align-items-center ms-3">
                            <span>Follow Us:</span>
                            <Link to="#"><i className="fab fa-facebook-f" /></Link>
                            <Link to="#"><i className="fab fa-instagram" /></Link>
                            <Link to="#"><i className="fab fa-tiktok" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeaderOne