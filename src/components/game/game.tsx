import {useContext, useState} from "react";
import {useAsync} from "react-async-hook";
import {getDifficult} from "../../requests/requests";
import {Settings} from "../settings/settings";
import GameBoard from "../board/game-board";
import {DifficultType} from "../../constants/TYPES";
import {StatusContext} from "../../context/status-context";


const Game = () => {
  const [difficult, setDifficult] = useState<DifficultType>()
  const {result: options} = useAsync(getDifficult, [])
  const {gameStatus} = useContext(StatusContext);


  return (
    <div className={"flex flex-col items-center place-content-center"}>
      {options ?
          <Settings setDifficult={setDifficult} difficult={difficult?.name} options={options}/>
          : <p>Загрузка данных...</p>
      }
      {
        gameStatus ?
          <GameBoard cells_count={difficult?.field}/>
          : null
      }
    </div>
  );
};

export default Game;