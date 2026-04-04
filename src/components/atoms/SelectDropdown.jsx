"use client";

import React from "react";
// import Select from "react-select";
const Select = dynamic(() => import("react-select"), { ssr: false });
import dynamic from "next/dynamic";


const SelectDropdown = ({
    options = [],
    value,
    onChange,
    placeholder = "Select...",
    isMulti = false,
    isSearchable = true,
    isClearable = true,
    isDisabled = false,
    className = "",
}) => {
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderColor: state.isFocused ? "#6366f1" : "#e5e7eb",
            boxShadow: "none",
            "&:hover": {
                borderColor: "#6366f1",
            },
            padding: "4px",
            borderRadius: "10px",
            minHeight: "44px",
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? "#eef2ff" : "#fff",
            color: "#111827",
            padding: "10px",
            cursor: "pointer",
        }),
        multiValue: (provided) => ({
            ...provided,
            backgroundColor: "#eef2ff",
        }),
        multiValueLabel: (provided) => ({
            ...provided,
            color: "#4338ca",
        }),
        multiValueRemove: (provided) => ({
            ...provided,
            color: "#4338ca",
            ":hover": {
                backgroundColor: "#c7d2fe",
                color: "#1e1b4b",
            },
        }),
    };

    return (
        <div className={`w-full ${className}`}>
            <Select
                options={options}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                isMulti={isMulti}
                isSearchable={isSearchable}
                isClearable={isClearable}
                isDisabled={isDisabled}
                styles={customStyles}
                classNamePrefix="react-select"
            />
        </div>
    );
};

export default SelectDropdown;