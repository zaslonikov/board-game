import {FC, useContext} from "react";
import {Dropdown} from "../../helpers/dropdown";
import {DifficultType} from "../../constants/TYPES";
import {StatusContext} from "../../context/status-context";

type Props = {
  setDifficult: (arg0: DifficultType) => void;
  difficult?: string;
  options: DifficultType[];
}
export const Settings: FC<Props> = ({setDifficult, difficult, options}) => {
  const {gameStatus, setGameStatus} = useContext(StatusContext);

  return (
    <div className={"my-5 flex flex-row gap-10 h-12"}>
      <Dropdown selected={difficult} setSelected={setDifficult} options={options}/>
      {
        !gameStatus ?
          <button
            disabled={!difficult}
            onClick={() => setGameStatus(true)}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:text-white`}
          >
            Начать игру
          </button>
          : null
      }
    </div>
  );
};
