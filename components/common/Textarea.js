import React, { forwardRef } from "react";

("use client");
const Textarea = (
  {
    id = "",
    type = "text",
    value = "",
    onChange,
    label = "",
    placeholder = "",
    disabled = false,
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
      <textarea
        id={id}
        type={type}
        defaultValue={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className="w100p form-textarea"
        ref={ref}
      />
    </div>
  );
};

export default forwardRef(Textarea);
