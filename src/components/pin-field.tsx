import React, { useState, useRef } from "react";

interface PinFieldProps {
  length: number;
  onChange: (code: string) => void;
}

const PinField: React.FC<PinFieldProps> = ({ length, onChange }) => {
  const [values, setValues] = useState<string[]>(Array(length).fill(""));
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const borderColor = !values.includes("");

  const handleChange = (index: number, value: string) => {
    if (/^[a-zA-Z]$/.test(value)) {
      alert("teste");
      return;
    }
    if (/^[0-9]?$/.test(value)) {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      if (value && index < length - 1) {
        inputsRef.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === "Backspace" && !values[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
    if (event.key === "Enter" && !values.includes("")) {
      onChange(values.join(""));
      setValues(Array(length).fill(""));
      inputsRef.current.forEach((input) => {
        if (input) {
          input.value = "";
        }
      });
    }
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget;
    if (/[^0-9]/.test(input.value)) {
      input.value = "";
    }
  };

  return (
    <div className="flex space-x-1">
      {values.map((value, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={value}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onInput={handleInput}
          ref={(el) => (inputsRef.current[index] = el)}
          className={`w-12 h-12 text-center border-2 ${
            borderColor
              ? "border-[#0a8b05] focus:border-[#0a8b05]"
              : "border-[#b8b8b8] focus:border-[#5e5e5e]"
          } rounded-md focus:outline-none`}
          style={{
            MozAppearance: "textfield",
          }}
        />
      ))}
    </div>
  );
};

export default PinField;
