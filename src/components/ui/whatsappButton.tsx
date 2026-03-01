import './whatsappButton.scss'

const WhatsAppButton = () => {
    const phoneNumber = '00971588819493'
    const whatsappUrl = `https://wa.me/${phoneNumber}`

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            aria-label="Chat on WhatsApp"
        >
            <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16 0C7.163 0 0 7.163 0 16C0 19.582 1.248 22.897 3.384 25.52L1.067 31L6.68 28.72C9.22 30.5 12.48 31.5 16 31.5C24.837 31.5 32 24.337 32 15.5C32 6.663 24.837 0 16 0Z"
                    fill="#25D366"
                />
                <path
                    d="M16 28.5C12.8 28.5 9.8 27.5 7.3 25.7L2.5 27L4.3 22.4C2.5 19.9 1.5 16.9 1.5 13.7C1.5 7.3 7.1 2 14 2C20.9 2 26.5 7.3 26.5 13.7C26.5 20.1 20.9 28.5 16 28.5ZM20.8 19.1L19.1 20.3C18.2 20.9 16.4 20.1 14.1 17.9C12.1 15.9 11.2 14.1 11.8 13.2L13 11.5C13.4 10.9 13.2 10.2 12.6 9.8L10.8 8.6C10.2 8.2 9.5 8.4 9.1 9L7.9 11.2C7.1 12.5 7.6 14.2 9.6 16.2C11.8 18.4 13.8 19.2 15.1 18.4L17.3 17.2C17.9 16.8 18.2 16.1 17.8 15.5L16.6 13.7C16.2 13.1 16.4 12.4 17 12L18.8 10.8C19.4 10.4 20.1 10.6 20.5 11.2L21.7 13.4C22.1 14 21.9 14.7 21.3 15.1L20.8 19.1Z"
                    fill="white"
                />
            </svg>
        </a>
    )
}

export default WhatsAppButton
