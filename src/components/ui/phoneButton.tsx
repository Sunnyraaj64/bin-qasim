import './phoneButton.scss'

const PhoneButton = () => {
    const phoneNumber = '971588819493'
    const telUrl = `tel:+${phoneNumber}`

    return (
        <a
            href={telUrl}
            className="phone-button"
            aria-label="Call us"
        >
            <svg
                className="phone-icon"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l1.4-1.4a1.003 1.003 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57.55 0 1 .45 1 1V21a1 1 0 0 1-1 1C11.4 22 2 12.6 2 2a1 1 0 0 1 1-1h3.75c.55 0 1 .45 1 1 0 1.25.2 2.46.57 3.58.12.33.04.7-.21.96l-1.49 1.49z" />
            </svg>
        </a>
    )
}

export default PhoneButton

