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
const CustomPagination = ({ items, itemsPerPage, onPageChange, }) => {
    const [currentPage, setCurrentPage] = (0, react_1.useState)(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);
    (0, react_1.useEffect)(() => {
        const savedPage = localStorage.getItem("currentPage");
        if (savedPage) {
            setCurrentPage(Number(savedPage));
            onPageChange(Number(savedPage));
        }
        else {
            onPageChange(1);
        }
    }, [onPageChange]);
    const handlePageChange = (page) => {
        setCurrentPage(page);
        onPageChange(page);
        localStorage.setItem("currentPage", String(page));
    };
    const renderPageNumbers = () => {
        const pageNumbers = [];
        let startPage = 1;
        let endPage = totalPages;
        if (totalPages > 5) {
            if (currentPage <= 3) {
                startPage = 1;
                endPage = 4;
            }
            else if (currentPage >= totalPages - 2) {
                startPage = totalPages - 3;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 1;
                endPage = currentPage + 1;
            }
        }
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(react_1.default.createElement("button", { key: i, onClick: () => handlePageChange(i), className: `mx-1 px-3 py-1 rounded ${i === currentPage
                    ? "bg-[#f4f4f4]"
                    : "bg-transparent hover:bg-[rgba(219,219,219,0.3)]"}` }, i));
        }
        return pageNumbers;
    };
    return (react_1.default.createElement("div", { className: "flex min-w-[328px] items-center justify-center my-4" },
        react_1.default.createElement("div", { className: "border border-[#c9c9c9] rounded p-1" },
            react_1.default.createElement("button", { onClick: () => handlePageChange(Math.max(1, currentPage - 1)), className: " px-3 py-1 rounded bg-[rgba(219,219,219,0.3)] hover:bg-[rgba(219,219,219,0.6)]", disabled: currentPage === 1 }, "<"),
            currentPage > 3 && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("button", { onClick: () => handlePageChange(1), className: "mx-1 px-3 py-1 rounded bg-transparent hover:bg-[rgba(219,219,219,0.3)]" }, "1"),
                react_1.default.createElement("span", null, "..."))),
            renderPageNumbers(),
            currentPage < totalPages - 2 && (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("span", null, "..."),
                react_1.default.createElement("button", { onClick: () => handlePageChange(totalPages), className: "mx-1 px-3 py-1 rounded bg-transparent hover:bg-[rgba(219,219,219,0.3)]" }, totalPages))),
            react_1.default.createElement("button", { onClick: () => handlePageChange(Math.min(totalPages, currentPage + 1)), className: " px-3 py-1 rounded bg-[rgba(219,219,219,0.3)] hover:bg-[rgba(219,219,219,0.6)]", disabled: currentPage === totalPages }, ">"))));
};
exports.default = CustomPagination;
//# sourceMappingURL=custom-pagination.js.map