import {FC, useState} from "react";
import Game from "./components/game/game";
import {StatusContext} from "./context/status-context";


const App: FC = () => {
  const [gameStatus, setGameStatus] = useState(false)
  return (
    <StatusContext.Provider value={{gameStatus, setGameStatus}}>
      <div className={""}>
        <p className={"font-bold text-center text-red-500 my-10"}>StarNavi: Test task</p>
        <Game/>
      </div>
    </StatusContext.Provider>
  );
};

export default App;