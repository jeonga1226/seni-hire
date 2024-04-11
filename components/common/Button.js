import React from "react";

("use client");
const Button = ({
  id = "",
  onClick,
  size = "medium",
  color = "blue",
  disabled = false,
  children,
}) => {
  const classList = [];
  classList.push(size);
  classList.push(color);
  return (
    <div className="btn-wrap">
      <button
        id={id}
        className={classList.join(" ")}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
