import React, { ReactNode } from "react";
interface ButtonContent {
    icon: ReactNode;
    link: string;
}
interface ActionButtonProps {
    mainButtonIcon: ReactNode;
    buttonCount?: number;
    content: ButtonContent[];
}
declare const ActionButton: React.FC<ActionButtonProps>;
export default ActionButton;
