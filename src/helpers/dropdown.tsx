import {FC, useState} from "react";
import {difficultNames} from "./parse-difficult";

type Props = {
  selected: string;
  setSelected: (value: string) => void;
  options: string[];
}
export const Dropdown: FC<Props> = ({ selected, setSelected, options }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="w-60 select-none relative border">
      <div className="p-3 flex items-center cursor-pointer justify-between" onClick={() => setIsActive(!isActive)}>
        {selected ? difficultNames(selected) : <p className={"text-gray-500"}>Выберите сложность</p>}
        <span className="fas fa-caret-down">X</span>
      </div>
      {isActive && (
        <div className="absolute left-0 p-2 font-medium bg-white w-full border">
          {options.map((option) => (
            <div
              key={option}
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="p-2 cursor-pointer transition-all	duration-300"
            >
              {difficultNames(option)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
