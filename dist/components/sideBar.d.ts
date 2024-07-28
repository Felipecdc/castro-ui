import React, { ReactNode } from "react";
type SidebarProps = {
    children: ReactNode;
    className?: String;
};
declare const Sidebar: React.FC<SidebarProps>;
type SideActionProps = {
    children: ReactNode;
};
export declare const SideAction: React.FC<SideActionProps>;
type SideContentProps = {
    children: ReactNode;
    className?: string;
    onClose?: () => void;
    buttonClose?: boolean;
    buttonStyle?: string;
};
export declare const SideContent: React.FC<SideContentProps>;
type SideTitleProps = {
    children: ReactNode;
    className?: string;
};
export declare const SideTitle: React.FC<SideTitleProps>;
export default Sidebar;
