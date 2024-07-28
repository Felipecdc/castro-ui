"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const PinField = ({ length, onChange }) => {
    const [values, setValues] = (0, react_1.useState)(Array(length).fill(""));
    const inputsRef = (0, react_1.useRef)([]);
    const borderColor = !values.includes("");
    const handleChange = (index, value) => {
        var _a;
        if (/^[a-zA-Z]$/.test(value)) {
            alert("teste");
            return;
        }
        if (/^[0-9]?$/.test(value)) {
            const newValues = [...values];
            newValues[index] = value;
            setValues(newValues);
            if (value && index < length - 1) {
                (_a = inputsRef.current[index + 1]) === null || _a === void 0 ? void 0 : _a.focus();
            }
        }
    };
    const handleKeyDown = (index, event) => {
        var _a;
        if (event.key === "Backspace" && !values[index] && index > 0) {
            (_a = inputsRef.current[index - 1]) === null || _a === void 0 ? void 0 : _a.focus();
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
    const handleInput = (event) => {
        const input = event.currentTarget;
        if (/[^0-9]/.test(input.value)) {
            input.value = "";
        }
    };
    return (react_1.default.createElement("div", { className: "flex space-x-1" }, values.map((value, index) => (react_1.default.createElement("input", { key: index, type: "text", maxLength: 1, value: value, onChange: (e) => handleChange(index, e.target.value), onKeyDown: (e) => handleKeyDown(index, e), onInput: handleInput, ref: (el) => (inputsRef.current[index] = el), className: `w-12 h-12 text-center border-2 ${borderColor
            ? "border-[#0a8b05] focus:border-[#0a8b05]"
            : "border-[#b8b8b8] focus:border-[#5e5e5e]"} rounded-md focus:outline-none`, style: {
            MozAppearance: "textfield",
        } })))));
};
exports.default = PinField;
//# sourceMappingURL=pin-field.js.map