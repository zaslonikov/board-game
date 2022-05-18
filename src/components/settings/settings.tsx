import {FC} from "react";
import {Dropdown} from "../../helpers/dropdown";
import {DifficultType} from "../../constants/TYPES";

type Props = {
  setDifficult: (arg0: DifficultType) => void;
  setGameStatus: (value: boolean) => void;
  difficult?: string;
  options: DifficultType[];
}
export const Settings: FC<Props> = ({setDifficult, setGameStatus, difficult, options}) => {

  return (
    <div className={"my-5 flex flex-row gap-10 h-12"}>
      <Dropdown selected={difficult} setSelected={setDifficult} options={options}/>
      <button
        disabled={!difficult}
        onClick={() => setGameStatus(true)}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:text-white`}
      >Start
      </button>
    </div>
  );
};
