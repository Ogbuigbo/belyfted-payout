"use client";
import React, { useState, useRef, useEffect } from "react";

export default function SearchableDropdown({
  options = [],
  value,
  onChange,
  placeholder = "Select...",
  disabled = false,
  loading = false,
  className = "",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [highlighted, setHighlighted] = useState(0);
  const containerRef = useRef(null);

  // Filter options based on search
  const filteredOptions = options.filter(
    (opt) =>
      typeof opt.label === "string" &&
      opt.label.toLowerCase().includes(search.toLowerCase()),
  );

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
        setSearch("");
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (!isOpen) return;
    if (e.key === "ArrowDown") {
      setHighlighted((prev) => Math.min(prev + 1, filteredOptions.length - 1));
    } else if (e.key === "ArrowUp") {
      setHighlighted((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      if (filteredOptions[highlighted]) {
        onChange(filteredOptions[highlighted].value);
        setIsOpen(false);
        setSearch("");
      }
    } else if (e.key === "Escape") {
      setIsOpen(false);
      setSearch("");
    }
  };

  // Get label for current value
  const selectedLabel = options.find((opt) => opt.value === value)?.label;

  return (
    <div
      className={`relative w-full ${className}`}
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <button
        type="button"
        className={`w-full px-3 py-2.5 border border-gray-300 rounded-xl bg-white text-left flex items-center justify-between focus:outline-none transition-colors ${
          disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
        }`}
        onClick={() => !disabled && setIsOpen((open) => !open)}
        disabled={disabled}
      >
        <span className={selectedLabel ? "text-gray-900" : "text-gray-400"}>
          {selectedLabel || placeholder}
        </span>
        <svg
          className={`w-4 h-4 ml-2 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-60 overflow-auto">
          <div className="p-2">
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-200 rounded focus:outline-none"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setHighlighted(0);
              }}
              autoFocus
              disabled={disabled}
            />
          </div>
          {loading ? (
            <div className="p-4 text-center text-gray-500">Loading...</div>
          ) : filteredOptions.length === 0 ? (
            <div className="p-4 text-center text-gray-500">No options</div>
          ) : (
            <ul className="max-h-40 overflow-auto">
              {filteredOptions.map((opt, idx) => (
                <li
                  key={opt.value}
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-50 rounded transition-colors ${
                    idx === highlighted ? "bg-blue-100" : ""
                  } ${opt.value === value ? "font-semibold text-blue-900" : ""}`}
                  onMouseEnter={() => setHighlighted(idx)}
                  onMouseDown={() => {
                    onChange(opt.value);
                    setIsOpen(false);
                    setSearch("");
                  }}
                >
                  {opt.label}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
