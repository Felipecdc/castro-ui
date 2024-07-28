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
const pi_1 = require("react-icons/pi");
const CodeBlock = ({ code, maxHeight, maxWidth }) => {
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const highlightedCode = code
        .split("\n")
        .map((line, index) => (react_1.default.createElement("div", { key: index },
        react_1.default.createElement("span", { style: { textShadow: "2px 3px 5px rgba(0,0,0,1)" } }, line || "\u00A0"))));
    const CopyToClipboard = () => {
        setIsLoading(true);
        setTimeout(() => {
            navigator.clipboard
                .writeText(code)
                .then(() => {
                console.log("Copy successful");
                setIsLoading(false);
            })
                .catch((error) => {
                console.log(error);
                setIsLoading(false);
            });
        }, 600);
    };
    return (react_1.default.createElement("div", { className: "flex flex-col bg-[#252525] border border-gray-700 rounded-lg", style: {
            maxHeight: maxHeight ? `${maxHeight}px` : "auto",
            minHeight: "70px",
            height: "auto",
            width: maxWidth ? `${maxWidth}px` : "100%",
        } },
        react_1.default.createElement("div", { className: "w-full bg-[#414141] rounded-t-md text-white text-sm p-2 flex items-center justify-end" },
            react_1.default.createElement("button", { className: "flex gap-1 items-center", onClick: CopyToClipboard, disabled: isLoading },
                isLoading ? (react_1.default.createElement(pi_1.PiSpinner, { className: "animate-spin", size: 18 })) : (react_1.default.createElement(pi_1.PiCopy, { size: 18 })),
                isLoading ? "Copiando..." : "Copiar código")),
        react_1.default.createElement("div", { className: "bg-[#252525] text-[#c1c1c1] py-4 px-3 overflow-auto text-sm font-mono rounded-b-md max-h-full" },
            react_1.default.createElement("pre", null, highlightedCode))));
};
exports.default = CodeBlock;
//# sourceMappingURL=code.js.map