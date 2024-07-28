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
exports.SideTitle = exports.SideContent = exports.SideAction = void 0;
const react_1 = __importStar(require("react"));
const io5_1 = require("react-icons/io5");
const Sidebar = ({ children, className }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "z-10", onClick: toggleSidebar }, react_1.default.Children.map(children, (child) => react_1.default.isValidElement(child) && child.type === exports.SideAction
            ? child
            : null)),
        isOpen && (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: "fixed inset-0 bg-black opacity-60 z-10", onClick: toggleSidebar }),
            react_1.default.createElement("div", { className: `fixed top-0 right-0 h-full w-96 bg-gray-100 shadow-lg shadow-black transform transition-transform duration-300 ease-in-out z-20 ${className}` }, react_1.default.Children.map(children, (child) => {
                if (react_1.default.isValidElement(child) && child.type === exports.SideContent) {
                    return react_1.default.cloneElement(child, {
                        className: `${child.props.className}`,
                        onClose: toggleSidebar,
                    });
                }
                return null;
            }))))));
};
const SideAction = ({ children }) => (react_1.default.createElement(react_1.default.Fragment, null, children));
exports.SideAction = SideAction;
const SideContent = ({ children, className = "", onClose, buttonClose = true, buttonStyle, }) => (react_1.default.createElement("div", { className: className },
    buttonClose === true && (react_1.default.createElement("button", { className: `absolute top-4 right-4 rounded border text-[#404040] border-[#d5d5d5] hover:bg-[rgba(209,209,209,0.5)] ${buttonStyle}`, onClick: onClose },
        react_1.default.createElement(io5_1.IoClose, { size: 17 }))),
    children));
exports.SideContent = SideContent;
const SideTitle = ({ children, className = "", }) => react_1.default.createElement("h1", { className: `text-xl font-bold ${className}` }, children);
exports.SideTitle = SideTitle;
exports.default = Sidebar;
//# sourceMappingURL=sideBar.js.map