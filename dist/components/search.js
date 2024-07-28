"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fa_1 = require("react-icons/fa");
const Search = ({ placeholder, type, inputRef, value, onClick, onChange, onKeyDown, name, autoComplete, ariaLabel, disabled, }) => {
    return (react_1.default.createElement("div", { className: "flex gap-1 w-full" },
        react_1.default.createElement("input", { type: type, ref: inputRef, value: value, onChange: onChange, onKeyDown: onKeyDown, placeholder: placeholder, name: name, autoComplete: autoComplete, "aria-label": ariaLabel, disabled: disabled, className: "w-full h-8 rounded-md px-2 py-1 border-2 border-[#cfcfcf] focus:outline-none focus:border-2 focus:border-[#bbbbbb]" }),
        react_1.default.createElement("button", { onClick: onClick, disabled: disabled, className: "flex items-center rounded-md justify-center w-9 h-8 bg-white text-[#808080] border-2 border-[#cfcfcf]" },
            react_1.default.createElement(fa_1.FaSearch, { size: 18 }))));
};
exports.default = Search;
//# sourceMappingURL=search.js.map