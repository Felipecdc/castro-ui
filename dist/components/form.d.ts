import React from "react";
interface FormProps {
    options: string[];
    textCancel: string;
    textDeploy: string;
    title: string;
    message?: string;
    labelOne: string;
    labelTwo: string;
    placeholder?: string;
    onDeploy: (name: string, option: string) => void;
}
declare const Form: React.FC;
export declare const showCustomForm: ({ options, onDeploy, textCancel, textDeploy, message, title, labelOne, labelTwo, placeholder, }: FormProps) => void;
export default Form;
