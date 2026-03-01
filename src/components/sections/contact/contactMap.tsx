const ContactMap = () => {
    return (
        <div className="map-section">
            <div className="map-items">
                <div className="googpemap">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5!2d55.351682!3d25.2830909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5c8ea240fd4f%3A0x5ff600f60d0aacdf!2sHor%20Al%20Anz%20East%2C%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sae!4v1700000000000!5m2!1sen!2sae&q=Hor+Al+Anz+East,+Dubai" 
                        width="100%" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="BinQasim Technical Services Location - Hor Al Anz East, Deira, Dubai"
                    />
                </div>
            </div>
        </div>

    )
}

export default ContactMap