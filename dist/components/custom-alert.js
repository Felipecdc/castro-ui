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
exports.showCustomAlert = void 0;
const react_1 = __importStar(require("react"));
let showAlert;
const CustomAlert = () => {
    const [isVisible, setIsVisible] = (0, react_1.useState)(false);
    const [title, setTitle] = (0, react_1.useState)("");
    const [textClose, setTextClose] = (0, react_1.useState)("");
    const [message, setMessage] = (0, react_1.useState)("");
    showAlert = ({ title, message, textClose }) => {
        setTitle(title);
        setMessage(message);
        setTextClose(textClose);
        setIsVisible(true);
    };
    const handleClose = () => [setIsVisible(false)];
    if (!isVisible)
        return null;
    return (react_1.default.createElement("div", { className: "fixed inset-0 flex px-5 items-center justify-center bg-black bg-opacity-50", onClick: handleClose },
        react_1.default.createElement("div", { className: "bg-white py-3 px-5 w-full max-w-[500px] rounded shadow-md shadow-gray-700", onClick: (e) => e.stopPropagation() },
            react_1.default.createElement("h1", { className: "text-xl font-bold border-b-2 mb-2" }, title),
            react_1.default.createElement("span", null, message),
            react_1.default.createElement("div", { className: "flex items-center mt-5 justify-end" },
                react_1.default.createElement("button", { onClick: handleClose, className: "bg-black text-white font-bold text-lg w-24 py-1 rounded-md" }, textClose)))));
};
const showCustomAlert = ({ title, message, textClose }) => {
    if (showAlert)
        showAlert({ title, message, textClose });
};
exports.showCustomAlert = showCustomAlert;
exports.default = CustomAlert;
//# sourceMappingURL=custom-alert.js.map