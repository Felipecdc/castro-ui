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
const io_1 = require("react-icons/io");
const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = (0, react_1.useState)(0);
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? items.length - 1 : prevIndex - 1);
    };
    const handleNext = () => {
        setCurrentIndex((prevIndex) => prevIndex === items.length - 1 ? 0 : prevIndex + 1);
    };
    return (react_1.default.createElement("div", { className: "relative w-full mx-auto" },
        react_1.default.createElement("div", { className: "overflow-hidden relative h-64 rounded-lg" },
            react_1.default.createElement("div", { className: "flex transition-transform duration-700", style: { transform: `translateX(-${currentIndex * 100}%)` } }, items.map((item, index) => (react_1.default.createElement("div", { key: index, className: "min-w-full h-64 border-2 border-transparent flex items-center justify-center" },
                react_1.default.createElement("img", { src: item, alt: `Item ${index}`, className: "w-full h-full object-cover rounded-lg" })))))),
        react_1.default.createElement("button", { onClick: handlePrev, className: "absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full bg-[#eeeeee] hover:bg-[#f9f9f9]" },
            react_1.default.createElement(io_1.IoIosArrowDropleft, { size: 40, color: "#bdbdbd" })),
        react_1.default.createElement("button", { onClick: handleNext, className: "absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-[#eeeeee] hover:bg-[#f9f9f9]" },
            react_1.default.createElement(io_1.IoIosArrowDropright, { size: 40, color: "#bdbdbd" }))));
};
exports.default = Carousel;
//# sourceMappingURL=carousel.js.map