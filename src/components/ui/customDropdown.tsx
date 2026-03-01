import React, { useState, useEffect, useRef } from "react";

// Define the option type
interface Option {
    value: string;
    label: string;
}

// Define the props type
interface CustomDropdownProps {
    onSelect: (option: Option) => void;
    options: Option[];
    value?: Option; // Optional controlled value
}


const CustomDropdown: React.FC<CustomDropdownProps> = ({options, onSelect, value }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [internalSelected, setInternalSelected] = useState<Option>(options[0]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Use controlled value if provided, otherwise use internal state
    const selectedOption = value || internalSelected;

    // Sync internal state when value prop changes
    useEffect(() => {
        if (value) {
            setInternalSelected(value);
        }
    }, [value]);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option: Option) => {
        if (!value) {
            // Only update internal state if not controlled
            setInternalSelected(option);
        }
        setIsOpen(false);
        onSelect(option); // Pass selected option to parent
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className="custom-dropdown" ref={dropdownRef}>
            <div className="dropdown-header" onClick={toggleDropdown}>
                {selectedOption.label}
                <span className={`arrow ${isOpen ? "open" : ""}`}>
                <i className="fa-solid fa-chevron-down"></i>
                </span>
            </div>
            {isOpen && (
                <ul className="dropdown-list">
                    {options.map((option) => (
                        <li
                            key={option.value}
                            className={`dropdown-item ${option.value === selectedOption.value ? "selected" : ""}`}
                            onClick={() => handleOptionClick(option)}
                        >
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;
