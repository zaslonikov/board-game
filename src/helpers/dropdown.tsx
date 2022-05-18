import {FC, useContext, useLayoutEffect, useState} from "react";
import {difficultNames} from "./parse-difficult";
import {DifficultType} from "../constants/TYPES";
import {StatusContext} from "../context/status-context";

type Props = {
  selected?: string;
  setSelected: (arg0: DifficultType) => void;
  options: DifficultType[];
}
export const Dropdown: FC<Props> = ({selected, setSelected, options}) => {
  const {gameStatus} = useContext(StatusContext);
  const [isActive, setIsActive] = useState(false);

  useLayoutEffect(() => {
    if (!gameStatus) {
      setIsActive(false)
    }
  }, [gameStatus])


  return (
    <div className="w-60 select-none relative border">
      <div className="p-3 flex items-center cursor-pointer justify-between" onClick={() => setIsActive(!isActive)}>
        {selected ? difficultNames(selected) : <p className={"text-gray-500"}>Выберите сложность</p>}
        <span>{isActive ? "︿" : "﹀"}</span>
      </div>
      {isActive && !gameStatus && (
        <div className="absolute left-0 p-2 font-medium bg-white w-full border">
          {options.map((option) => (
            <div
              key={option.name}
              onClick={(e) => {
                setSelected(option);
                setIsActive(false);
              }}
              className="p-2 cursor-pointer transition-all	duration-300"
            >
              {difficultNames(option.name)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
