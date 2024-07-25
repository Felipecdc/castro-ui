import React, { useState, ReactNode } from "react";

interface ButtonContent {
  icon: ReactNode;
  link: string;
}

interface ActionButtonProps {
  mainButtonIcon: ReactNode;
  buttonCount?: number;
  content: ButtonContent[];
}

const ActionButton: React.FC<ActionButtonProps> = ({
  mainButtonIcon,
  buttonCount = 3,
  content,
}) => {
  const [showButtons, setShowButtons] = useState(false);

  const handleButtonClick = () => {
    setShowButtons(!showButtons);
  };

  return (
    <div className="absolute bottom-5 right-5">
      {showButtons && (
        <div className="flex flex-col mb-5 space-y-3">
          {content.slice(0, buttonCount).map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="bg-[#424242] p-4 rounded-full shadow-md shadow-black"
              aria-label={`Action ${index + 1}`}
            >
              {React.cloneElement(item.icon as React.ReactElement, {
                size: 25,
              })}
            </a>
          ))}
        </div>
      )}
      <button
        className="bg-white p-4 rounded-full shadow-md shadow-black"
        onClick={handleButtonClick}
        aria-label={showButtons ? "Close actions" : "Open actions"}
      >
        {React.cloneElement(mainButtonIcon as React.ReactElement, { size: 25 })}
      </button>
    </div>
  );
};

export default ActionButton;
