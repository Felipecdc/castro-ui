import React from "react";
interface PaginationProps {
    items: any[];
    itemsPerPage: number;
    onPageChange: (page: number) => void;
}
declare const CustomPagination: React.FC<PaginationProps>;
export default CustomPagination;
