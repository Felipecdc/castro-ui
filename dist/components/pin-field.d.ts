import React from "react";
interface PinFieldProps {
    length: number;
    onChange: (code: string) => void;
}
declare const PinField: React.FC<PinFieldProps>;
export default PinField;
