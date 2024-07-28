import React, { ChangeEvent, MouseEvent } from "react";
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
declare const Search: React.FC<SearchProps>;
export default Search;
