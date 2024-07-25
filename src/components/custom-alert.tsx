import React, { useState } from "react";

interface AlertProps {
  title: string;
  message: string;
  textClose: string;
}

let showAlert: (props: AlertProps) => void;

const CustomAlert: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState("");
  const [textClose, setTextClose] = useState("");
  const [message, setMessage] = useState("");

  showAlert = ({ title, message, textClose }: AlertProps) => {
    setTitle(title);
    setMessage(message);
    setTextClose(textClose);
    setIsVisible(true);
  };

  const handleClose = () => [setIsVisible(false)];

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 flex px-5 items-center justify-center bg-black bg-opacity-50"
      onClick={handleClose}
    >
      <div
        className="bg-white py-3 px-5 w-full max-w-[500px] rounded shadow-md shadow-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-xl font-bold border-b-2 mb-2">{title}</h1>
        <span>{message}</span>
        <div className="flex items-center mt-5 justify-end">
          <button
            onClick={handleClose}
            className="bg-black text-white font-bold text-lg w-24 py-1 rounded-md"
          >
            {textClose}
          </button>
        </div>
      </div>
    </div>
  );
};

export const showCustomAlert = ({ title, message, textClose }: AlertProps) => {
  if (showAlert) showAlert({ title, message, textClose });
};

export default CustomAlert;
