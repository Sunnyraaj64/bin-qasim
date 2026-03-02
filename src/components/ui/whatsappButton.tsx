import './whatsappButton.scss'

const WhatsAppButton = () => {
    const phoneNumber = '+97158881493'
    const whatsappUrl = `https://wa.me/${phoneNumber}`

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            aria-label="Chat on WhatsApp"
        >
             <img src="/img/whatsapp-icon.avif" className="whatsapp-image" alt="whatsapp-icon" />
        </a>
    )
}

export default WhatsAppButton
