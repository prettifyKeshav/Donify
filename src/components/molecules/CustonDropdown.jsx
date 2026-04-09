"use client";

import { useState, useRef, useEffect } from "react";
import "@/uploads/styles/component/custom-dropdown/custom-dropdown.css";

export default function CustomDropdown({
    label = "Select",
    options = [],
    placeholder = "Select option",
    onChange,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(null);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
                setFocusedIndex(-1);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleToggle = () => {
        setIsOpen((prev) => !prev);
        setFocusedIndex(-1);
    };

    const handleSelect = (option) => {
        setSelected(option);
        setIsOpen(false);
        setFocusedIndex(-1);

        if (onChange) onChange(option); // 🔥 important
    };

    const handleKeyDown = (e) => {
        if (!isOpen) return;

        if (e.key === "ArrowDown") {
            e.preventDefault();
            setFocusedIndex((prev) => Math.min(prev + 1, options.length - 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setFocusedIndex((prev) => Math.max(prev - 1, 0));
        } else if (e.key === "Enter" && focusedIndex >= 0) {
            handleSelect(options[focusedIndex]);
        } else if (e.key === "Escape") {
            setIsOpen(false);
        }
    };

    return (
        <div className="page">
            {/* 🔥 Dynamic Label */}
            <div className="lbl">{label}</div>

            <div
                className="wrapper"
                ref={dropdownRef}
                tabIndex={0}
                onKeyDown={handleKeyDown}
            >
                <button
                    className={`trigger ${isOpen ? "open" : ""}`}
                    onClick={handleToggle}
                >
                    <span className="trigger-content">
                        {selected ? (
                            <>
                                {selected.emoji && (
                                    <span className="emoji">{selected.emoji}</span>
                                )}
                                <span>{selected.label}</span>
                            </>
                        ) : (
                            <span className="placeholder">{placeholder}</span>
                        )}
                    </span>
                </button>

                <ul className={`menu ${isOpen ? "open" : ""}`}>
                    {options.map((option, index) => (
                        <li
                            key={option.value}
                            className={`option ${selected?.value === option.value ? "selected" : ""
                                } ${focusedIndex === index ? "focused" : ""}`}
                            onClick={() => handleSelect(option)}
                        >
                            {option.emoji && <span>{option.emoji}</span>}
                            <span>{option.label}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}