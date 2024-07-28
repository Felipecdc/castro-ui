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
const ActionButton = ({ mainButtonIcon, buttonCount = 3, content, }) => {
    const [showButtons, setShowButtons] = (0, react_1.useState)(false);
    const handleButtonClick = () => {
        setShowButtons(!showButtons);
    };
    return (react_1.default.createElement("div", { className: "absolute bottom-5 right-5" },
        showButtons && (react_1.default.createElement("div", { className: "flex flex-col mb-5 space-y-3" }, content.slice(0, buttonCount).map((item, index) => (react_1.default.createElement("a", { key: index, href: item.link, className: "bg-[#424242] p-4 rounded-full shadow-md shadow-black", "aria-label": `Action ${index + 1}` }, react_1.default.cloneElement(item.icon, {
            size: 25,
        })))))),
        react_1.default.createElement("button", { className: "bg-white p-4 rounded-full shadow-md shadow-black", onClick: handleButtonClick, "aria-label": showButtons ? "Close actions" : "Open actions" }, react_1.default.cloneElement(mainButtonIcon, { size: 25 }))));
};
exports.default = ActionButton;
//# sourceMappingURL=action-button.js.map