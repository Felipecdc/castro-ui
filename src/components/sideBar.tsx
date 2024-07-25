import React, { useState, ReactNode, ReactElement } from "react";
import { IoClose } from "react-icons/io5";

type SidebarProps = {
  children: ReactNode;
  className?: String;
};

const Sidebar: React.FC<SidebarProps> = ({ children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="z-10" onClick={toggleSidebar}>
        {React.Children.map(children, (child) =>
          React.isValidElement(child) && child.type === SideAction
            ? child
            : null
        )}
      </div>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black opacity-60 z-10"
            onClick={toggleSidebar}
          ></div>
          <div
            className={`fixed top-0 right-0 h-full w-96 bg-gray-100 shadow-lg shadow-black transform transition-transform duration-300 ease-in-out z-20 ${className}`}
          >
            {React.Children.map(children, (child) => {
              if (React.isValidElement(child) && child.type === SideContent) {
                return React.cloneElement(child as ReactElement<any>, {
                  className: `${child.props.className}`,
                  onClose: toggleSidebar,
                });
              }
              return null;
            })}
          </div>
        </>
      )}
    </div>
  );
};

type SideActionProps = {
  children: ReactNode;
};

export const SideAction: React.FC<SideActionProps> = ({ children }) => (
  <>{children}</>
);

type SideContentProps = {
  children: ReactNode;
  className?: string;
  onClose?: () => void;
  buttonClose?: boolean;
  buttonStyle?: string;
};

export const SideContent: React.FC<SideContentProps> = ({
  children,
  className = "",
  onClose,
  buttonClose = true,
  buttonStyle,
}) => (
  <div className={className}>
    {buttonClose === true && (
      <button
        className={`absolute top-4 right-4 rounded border text-[#404040] border-[#d5d5d5] hover:bg-[rgba(209,209,209,0.5)] ${buttonStyle}`}
        onClick={onClose}
      >
        <IoClose size={17} />
      </button>
    )}
    {children}
  </div>
);

type SideTitleProps = {
  children: ReactNode;
  className?: string;
};

export const SideTitle: React.FC<SideTitleProps> = ({
  children,
  className = "",
}) => <h1 className={`text-xl font-bold ${className}`}>{children}</h1>;

export default Sidebar;
