import React, { useState } from "react";
import { PiCopy, PiSpinner } from "react-icons/pi";

interface CodeBlockProps {
  code: string;
  maxHeight?: string;
  maxWidth?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, maxHeight, maxWidth }) => {
  const [isLoading, setIsLoading] = useState(false);

  const highlightedCode = code
    .split("\n")
    .map((line: string, index: number) => (
      <div key={index}>
        <span style={{ textShadow: "2px 3px 5px rgba(0,0,0,1)" }}>
          {line || "\u00A0"}
        </span>
      </div>
    ));

  const CopyToClipboard = () => {
    setIsLoading(true);

    setTimeout(() => {
      navigator.clipboard
        .writeText(code)
        .then(() => {
          console.log("Copy successful");
          setIsLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false);
        });
    }, 600);
  };

  return (
    <div
      className="flex flex-col bg-[#252525] border border-gray-700 rounded-lg"
      style={{
        maxHeight: maxHeight ? `${maxHeight}px` : "auto",
        minHeight: "70px",
        height: "auto",
        width: maxWidth ? `${maxWidth}px` : "100%",
      }}
    >
      <div className="w-full bg-[#414141] rounded-t-md text-white text-sm p-2 flex items-center justify-end">
        <button
          className="flex gap-1 items-center"
          onClick={CopyToClipboard}
          disabled={isLoading}
        >
          {isLoading ? (
            <PiSpinner className="animate-spin" size={18} />
          ) : (
            <PiCopy size={18} />
          )}
          {isLoading ? "Copiando..." : "Copiar código"}
        </button>
      </div>
      <div className="bg-[#252525] text-[#c1c1c1] py-4 px-3 overflow-auto text-sm font-mono rounded-b-md max-h-full">
        <pre>{highlightedCode}</pre>
      </div>
    </div>
  );
};

export default CodeBlock;
