import {FC} from "react";
import Game from "./components/game/game";


const App: FC = () => {
  return (
    <div className={""}>
      <p className={"font-bold text-center text-red-500 my-10"}>StarNavi: Test task</p>
      <Game/>
    </div>
  );
};

export default App;