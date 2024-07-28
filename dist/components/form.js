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
exports.showCustomForm = void 0;
const react_1 = __importStar(require("react"));
let showForm;
let currentOnDeploy;
const Form = () => {
    const [isVisible, setIsVisible] = (0, react_1.useState)(false);
    const [title, setTitle] = (0, react_1.useState)("");
    const [message, setMessage] = (0, react_1.useState)("");
    const [name, setName] = (0, react_1.useState)("");
    const [options, setOptions] = (0, react_1.useState)("");
    const [textOptions, setTextOptions] = (0, react_1.useState)([]);
    const [textCancel, setTextCancel] = (0, react_1.useState)("");
    const [textDeploy, setTextDeploy] = (0, react_1.useState)("");
    const [labelOne, setLabelOne] = (0, react_1.useState)("");
    const [labelTwo, setLabelTwo] = (0, react_1.useState)("");
    const [placeholder, setPlaceholder] = (0, react_1.useState)("");
    const handleSubmit = (event) => {
        event.preventDefault();
        if (name === "" || options === "") {
            return alert("Fields are empty");
        }
        if (currentOnDeploy) {
            currentOnDeploy(name, options);
        }
        setIsVisible(false);
        setName("");
        setOptions("");
    };
    const handleCancel = () => setIsVisible(false);
    showForm = ({ options, textCancel, textDeploy, message, title, labelOne, labelTwo, placeholder, }) => {
        setTextCancel(textCancel);
        setTextDeploy(textDeploy);
        setTextOptions([...options]);
        setTitle(title);
        setMessage(message);
        setLabelOne(labelOne);
        setLabelTwo(labelTwo);
        setPlaceholder(placeholder);
        setIsVisible(true);
    };
    if (!isVisible)
        return null;
    return (react_1.default.createElement("div", { className: "fixed flex inset-0 px-5 items-center justify-center" },
        react_1.default.createElement("div", { className: "flex flex-col w-full sm:w-[350px] p-3 gap-3 bg-white rounded-lg border-2 border-[#bebebe] shadow-md shadow-gray-500" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("h1", { className: "font-bold text-2xl" }, title),
                react_1.default.createElement("span", { className: "text-base text-gray-600" }, message)),
            react_1.default.createElement("form", { onSubmit: handleSubmit, className: "flex flex-col w-full" },
                react_1.default.createElement("label", { htmlFor: "name", className: "font-bold" }, labelOne),
                react_1.default.createElement("input", { type: "text", name: "name", placeholder: placeholder, value: name, onChange: (text) => setName(text.target.value), className: "w-full py-1 px-2 border rounded-md focus:outline-none" }),
                react_1.default.createElement("label", { htmlFor: "options", className: "font-bold mt-2" }, labelTwo),
                react_1.default.createElement("select", { name: "", id: "options", value: options, onChange: (text) => setOptions(text.target.value), className: "w-full py-1 px-2 border rounded-md bg-white" },
                    react_1.default.createElement("option", { value: "", disabled: true, selected: true, hidden: true }, "Select"),
                    textOptions.map((value, index) => (react_1.default.createElement("option", { key: index, value: value }, value)))),
                react_1.default.createElement("div", { className: "flex w-full items-center justify-between mt-5" },
                    react_1.default.createElement("button", { type: "button", className: "font-semibold py-1 border-2 rounded-md w-24 hover:bg-[#e9e9e9]", onClick: handleCancel }, textCancel),
                    react_1.default.createElement("button", { type: "submit", onClick: () => { }, className: "bg-black text-white py-1 font-semibold border-2 rounded-md w-24 hover:text-[#c3c3c3]" }, textDeploy))))));
};
const showCustomForm = ({ options, onDeploy, textCancel, textDeploy, message, title, labelOne, labelTwo, placeholder, }) => {
    if (showForm) {
        currentOnDeploy = onDeploy;
        showForm({
            options,
            onDeploy,
            textCancel,
            textDeploy,
            message,
            title,
            labelOne,
            labelTwo,
            placeholder,
        });
    }
};
exports.showCustomForm = showCustomForm;
exports.default = Form;
//# sourceMappingURL=form.js.map