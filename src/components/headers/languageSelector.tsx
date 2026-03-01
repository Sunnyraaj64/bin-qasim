import { useEffect, useState, useRef } from "react";
import { triggerGoogleTranslate, setDocumentDirection, restoreGoogleTranslateFromStorage } from "@/lib/googleTranslate";

const LanguageSelector = () => {
    const [currentLang, setCurrentLang] = useState<'en' | 'ar'>('en');
    const [isOpen, setIsOpen] = useState(false);
    const triggerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const savedLang = localStorage.getItem('selectedLanguage') as 'en' | 'ar' | null;
        if (savedLang === 'en' || savedLang === 'ar') {
            setCurrentLang(savedLang);
        }
        restoreGoogleTranslateFromStorage();
    }, []);

    const changeLanguage = (lang: 'en' | 'ar') => {
        setCurrentLang(lang);
        setIsOpen(false);
        localStorage.setItem('selectedLanguage', lang);
        setDocumentDirection(lang);
        triggerGoogleTranslate(lang);
    };

    const getDropdownPosition = () => {
        if (!triggerRef.current) return { top: '50px', right: '20px' };
        const rect = triggerRef.current.getBoundingClientRect();
        return {
            top: `${rect.bottom + window.scrollY + 8}px`,
            right: `${window.innerWidth - rect.right}px`,
        };
    };

    const [dropdownPosition, setDropdownPosition] = useState(getDropdownPosition());

    useEffect(() => {
        if (isOpen) {
            setDropdownPosition(getDropdownPosition());
        }
    }, [isOpen]);

    return (
        <>
            <div className="language-selector position-relative" style={{ zIndex: 1000000 }}>
                <div
                    ref={triggerRef}
                    className="language-selector-trigger d-flex align-items-center cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ cursor: 'pointer', userSelect: 'none' }}
                >
                    {currentLang === 'en' ? (
                        <>
                            <img
                                src="https://flagcdn.com/w20/gb.png"
                                alt="English"
                                className="me-2"
                                style={{ width: '20px', height: '15px', objectFit: 'cover' }}
                            />
                            <span className="notranslate">English</span>
                        </>
                    ) : (
                        <>
                            <img
                                src="https://flagcdn.com/w20/sa.png"
                                alt="Arabic"
                                className="me-2"
                                style={{ width: '20px', height: '15px', objectFit: 'cover' }}
                            />
                            <span>العربية</span>
                        </>
                    )}
                    <i className={`fas fa-chevron-${isOpen ? 'up' : 'down'} ms-2`} style={{ fontSize: '12px' }}></i>
                </div>
            </div>

            {isOpen && (
                <>
                    <div
                        className="language-selector-overlay"
                        onClick={() => setIsOpen(false)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            zIndex: 9999998,
                            backgroundColor: 'transparent',
                        }}
                    />
                    <div
                        className="language-selector-dropdown"
                        style={{
                            position: 'fixed',
                            top: dropdownPosition.top,
                            right: dropdownPosition.right,
                            backgroundColor: '#fff',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            minWidth: '150px',
                            zIndex: 9999999,
                            overflow: 'hidden',
                        }}
                    >
                        <div
                            className={`language-option d-flex align-items-center p-3 ${currentLang === 'en' ? 'active' : ''}`}
                            onClick={() => changeLanguage('en')}
                            style={{
                                cursor: 'pointer',
                                backgroundColor: currentLang === 'en' ? '#e8f5e9' : 'transparent',
                                transition: 'background-color 0.2s',
                            }}
                            onMouseEnter={(e) => {
                                if (currentLang !== 'en') {
                                    e.currentTarget.style.backgroundColor = '#f5f5f5';
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = currentLang === 'en' ? '#e8f5e9' : 'transparent';
                            }}
                        >
                            <img
                                src="https://flagcdn.com/w20/gb.png"
                                alt="English"
                                className="me-2"
                                style={{ width: '20px', height: '15px', objectFit: 'cover' }}
                            />
                            <span className="notranslate">English</span>
                            {currentLang === 'en' && <i className="fas fa-check ms-auto text-success"></i>}
                        </div>
                        <div
                            className={`language-option d-flex align-items-center p-3 ${currentLang === 'ar' ? 'active' : ''}`}
                            onClick={() => changeLanguage('ar')}
                            style={{
                                cursor: 'pointer',
                                borderTop: '1px solid #eee',
                                backgroundColor: currentLang === 'ar' ? '#e8f5e9' : 'transparent',
                                transition: 'background-color 0.2s',
                            }}
                            onMouseEnter={(e) => {
                                if (currentLang !== 'ar') {
                                    e.currentTarget.style.backgroundColor = '#f5f5f5';
                                }
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = currentLang === 'ar' ? '#e8f5e9' : 'transparent';
                            }}
                        >
                            <img
                                src="https://flagcdn.com/w20/sa.png"
                                alt="Arabic"
                                className="me-2"
                                style={{ width: '20px', height: '15px', objectFit: 'cover' }}
                            />
                            <span>العربية</span>
                            {currentLang === 'ar' && <i className="fas fa-check ms-auto text-success"></i>}
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default LanguageSelector;
