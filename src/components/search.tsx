import React, { ChangeEvent, MouseEvent } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchProps {
  placeholder: string;
  type?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  name?: string;
  autoComplete?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

const Search: React.FC<SearchProps> = ({
  placeholder,
  type,
  inputRef,
  value,
  onClick,
  onChange,
  onKeyDown,
  name,
  autoComplete,
  ariaLabel,
  disabled,
}) => {
  return (
    <div className="flex gap-1 w-full">
      <input
        type={type}
        ref={inputRef}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        name={name}
        autoComplete={autoComplete}
        aria-label={ariaLabel}
        disabled={disabled}
        className="w-full h-8 rounded-md px-2 py-1 border-2 border-[#cfcfcf] focus:outline-none focus:border-2 focus:border-[#bbbbbb]"
      />
      <button
        onClick={onClick}
        disabled={disabled}
        className="flex items-center rounded-md justify-center w-9 h-8 bg-white text-[#808080] border-2 border-[#cfcfcf]"
      >
        <FaSearch size={18} />
      </button>
    </div>
  );
};

export default Search;
