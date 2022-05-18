import {useState} from "react";
import {useAsync} from "react-async-hook";
import {getDifficult} from "../../requests/requests";
import {Settings} from "../settings/settings";
import GameBoard from "../board/game-board";
import {DifficultType} from "../../constants/TYPES";

const Game = () => {
  const [difficult, setDifficult] = useState<DifficultType>()
  const [gameStatus, setGameStatus] = useState(false)
  const {result: options} = useAsync(getDifficult, [])

  return (
    <div className={"flex flex-col items-center place-content-center"}>
      {options ?
          <Settings setDifficult={setDifficult} setGameStatus={setGameStatus} difficult={difficult?.name} options={options}/>
          : <p>Загрузка данных...</p>
      }
      {
        gameStatus ? <GameBoard cells_count={difficult?.field}/>
          : null
      }
    </div>
  );
};

export default Game;