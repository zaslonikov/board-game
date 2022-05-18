import GameBoard from './components/board/game-board';
import {FC} from "react";
import Settings from "./components/settings/settings";


const App: FC = () => {
  return (
    <div className={""}>
      <p className={"font-bold text-center text-red-500 my-10"}>game</p>
      <div className={"flex flex-col items-center place-content-center"}>
        <Settings/>
        <GameBoard/>
      </div>
    </div>
  );
};

export default App;