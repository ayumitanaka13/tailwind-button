import React from "react";

const TextInput = ({ type, label, value, required, onChange, placeholder }) => {
  return (
    <div className="w-full flex flex-wrap">
      <label className="w-full">{label}</label>
      <input
        type={type}
        value={value}
        required={required}
        onChange={onChange}
        placeholder={placeholder}
        className="TextInput"
      />
    </div>
  );
};

export default TextInput;
