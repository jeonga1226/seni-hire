import React, { forwardRef } from "react";

("use client");
const SelectBox = (
  {
    id = "",
    value = "",
    callback,
    label = "",
    disabled = false,
    list = [],
    subLabel = "",
  },
  ref
) => {
  return (
    <div id={id} className="mb-3">
      <div className="slt-top-wrap">
        <label className="mb-2 block">{label}</label>
        <span className="comp-sub-lbl mt0">{subLabel}</span>
      </div>
      <div className="c-btn-wrap">
        <button
          onClick={() => {
            document.querySelector("#" + id + " .c-btn-lst").style.display =
              "block";
          }}
          disabled={disabled}
          className="btn-select"
          ref={ref}
        >
          {value}
        </button>
      </div>
      <div className="c-lst-wrap">
        <ul className="c-btn-lst">
          {list.map((item, idx) => (
            <li key={idx}>
              <button
                type="button"
                onClick={(e) => {
                  document.querySelector("#" + id + " .btn-select").innerHTML =
                    e.target.innerHTML;
                  document.querySelector(
                    "#" + id + " .c-btn-lst"
                  ).style.display = "none";
                  if (callback) {
                    callback();
                  }
                }}
              >
                {item.value}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default forwardRef(SelectBox);
