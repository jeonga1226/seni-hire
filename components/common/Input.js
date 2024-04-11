import React, { forwardRef } from "react";

("use client");
const Input = (
  {
    id = Math.floor(Math.random() * 10000 + 1),
    type = "text",
    value = "",
    onChange,
    label = "",
    placeholder = "",
    disabled = false,
    valid = "",
    subLabel = "",
  },
  ref
) => {
  return (
    <div className="mb-6">
      <div>
        <label className="mb-2 block" htmlFor={id}>
          {label}
        </label>
        <span className="comp-sub-lbl mt0">{subLabel}</span>
      </div>
      <input
        id={id}
        type={type}
        defaultValue={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="form-input w-full"
        ref={ref}
      />
      <p style={{ color: "red" }}>{valid}</p>
    </div>
  );
};

export default forwardRef(Input);
