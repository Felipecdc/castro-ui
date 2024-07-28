import React from "react";
interface AlertProps {
    title: string;
    message: string;
    textClose: string;
}
declare const CustomAlert: React.FC;
export declare const showCustomAlert: ({ title, message, textClose }: AlertProps) => void;
export default CustomAlert;
