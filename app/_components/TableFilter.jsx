import React, { useState } from "react";

/**
 * fields: Array of { name, label, type, options (for select), placeholder }
 * onApply: function(values)
 * onReset: function()
 * initialValues: { [name]: value }
 */
function TableFilter({
  fields = [],
  onApply,
  onReset,
  initialValues = {},
  loading = false,
}) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setValues(initialValues);
    if (onReset) onReset();
  };

  const handleApply = (e) => {
    e.preventDefault();
    if (onApply) onApply(values);
  };

  const renderDateField = (field) => {
    return (
      <input
        type="date"
        value={values[field.name] || ""}
        onChange={(e) => handleChange(field.name, e.target.value)}
        className="w-full px-3 py-2 border border-[#C8C6C9] rounded-lg bg-white text-[#C8C6C9] text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        disabled={loading || field.disabled}
      />
    );
  };

  const renderSelectField = (field) => {
    const placeholder = field.placeholder || `Select a ${field.label}`;

    return (
      <div className="relative">
        <select
          value={values[field.name] || ""}
          onChange={(e) => handleChange(field.name, e.target.value)}
          className="w-full p-2 border border-[#C8C6C9] rounded-lg bg-white appearance-none focus:outline-none  text-[#C8C6C9] text-xs"
          disabled={loading || field.disabled}
        >
          <option value="" className="text-gray-400 text-xs">
            {placeholder}
          </option>
          {field.options &&
            field.options.map((opt) => (
              <option
                key={opt.value}
                value={opt.value}
                className="text-gray-900 text-xs"
              >
                {opt.label}
              </option>
            ))}
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  };

  return (
    <div
      className="bg-white rounded-xl shadow-xl"
      style={{
        width: "295px",
        padding: "14px 16px",
        borderRadius: "12px",
      }}
    >
      <h3 className="text-base font-semibold mb-6 text-gray-900">Filter by</h3>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        {/* Date Range Section */}
        <div className="grid grid-cols-2 gap-3">
          {fields
            .filter((field) => field.type === "date")
            .map((field) => (
              <div key={field.name}>
                <label className="block text-xs font-medium text-gray-700 mb-2">
                  {field.label}
                </label>
                {renderDateField(field)}
              </div>
            ))}
        </div>

        {/* Other Fields */}
        {fields
          .filter((field) => field.type !== "date")
          .map((field) => (
            <div key={field.name}>
              <label className="block text-xs font-medium text-gray-700 mb-2">
                {field.label}
              </label>
              {field.type === "select" ? renderSelectField(field) : null}
            </div>
          ))}
      </div>

      <div className="flex justify-between mt-6 gap-16">
        <button
          type="button"
          className="flex-1 px-4 py-[14px] rounded-lg border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 text-sm font-medium transition-colors"
          onClick={handleReset}
          disabled={loading}
        >
          Reset
        </button>
        <button
          type="submit"
          className="flex-1 px-4 py-[14px] rounded-lg bg-[#042656] text-white text-sm font-medium hover:bg-[#031c40] transition-colors"
          onClick={handleApply}
          disabled={loading}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default TableFilter;
