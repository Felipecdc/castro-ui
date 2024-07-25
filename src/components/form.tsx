import React, { useState } from "react";

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

let showForm: (props: FormProps) => void;
let currentOnDeploy: (name: string, option: string) => void;

const Form: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState<string | undefined>("");

  const [name, setName] = useState("");
  const [options, setOptions] = useState("");

  const [textOptions, setTextOptions] = useState<string[]>([]);
  const [textCancel, setTextCancel] = useState("");
  const [textDeploy, setTextDeploy] = useState("");
  const [labelOne, setLabelOne] = useState("");
  const [labelTwo, setLabelTwo] = useState("");
  const [placeholder, setPlaceholder] = useState<string | undefined>("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (name === "" || options === "") {
      return alert("Fields are empty");
    }

    if (currentOnDeploy) {
      currentOnDeploy(name, options);
    }

    setIsVisible(false);
    setName("");
    setOptions("");
  };

  const handleCancel = () => setIsVisible(false);

  showForm = ({
    options,
    textCancel,
    textDeploy,
    message,
    title,
    labelOne,
    labelTwo,
    placeholder,
  }) => {
    setTextCancel(textCancel);
    setTextDeploy(textDeploy);
    setTextOptions([...options]);
    setTitle(title);
    setMessage(message);
    setLabelOne(labelOne);
    setLabelTwo(labelTwo);
    setPlaceholder(placeholder);
    setIsVisible(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed flex inset-0 px-5 items-center justify-center">
      <div className="flex flex-col w-full sm:w-[350px] p-3 gap-3 bg-white rounded-lg border-2 border-[#bebebe] shadow-md shadow-gray-500">
        <div>
          <h1 className="font-bold text-2xl">{title}</h1>
          <span className="text-base text-gray-600">{message}</span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <label htmlFor="name" className="font-bold">
            {labelOne}
          </label>
          <input
            type="text"
            name="name"
            placeholder={placeholder}
            value={name}
            onChange={(text) => setName(text.target.value)}
            className="w-full py-1 px-2 border rounded-md focus:outline-none"
          />
          <label htmlFor="options" className="font-bold mt-2">
            {labelTwo}
          </label>
          <select
            name=""
            id="options"
            value={options}
            onChange={(text) => setOptions(text.target.value)}
            className="w-full py-1 px-2 border rounded-md bg-white"
          >
            <option value="" disabled selected hidden>
              Select
            </option>
            {textOptions.map((value, index) => (
              <option key={index} value={value}>
                {value}
              </option>
            ))}
          </select>
          <div className="flex w-full items-center justify-between mt-5">
            <button
              type="button"
              className="font-semibold py-1 border-2 rounded-md w-24 hover:bg-[#e9e9e9]"
              onClick={handleCancel}
            >
              {textCancel}
            </button>
            <button
              type="submit"
              onClick={() => {}}
              className="bg-black text-white py-1 font-semibold border-2 rounded-md w-24 hover:text-[#c3c3c3]"
            >
              {textDeploy}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const showCustomForm = ({
  options,
  onDeploy,
  textCancel,
  textDeploy,
  message,
  title,
  labelOne,
  labelTwo,
  placeholder,
}: FormProps) => {
  if (showForm) {
    currentOnDeploy = onDeploy;
    showForm({
      options,
      onDeploy,
      textCancel,
      textDeploy,
      message,
      title,
      labelOne,
      labelTwo,
      placeholder,
    });
  }
};

export default Form;
