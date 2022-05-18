import Board from './components/board/board';
import {FC} from "react";
import Settings from "./components/settings/settings";


const App: FC = () => {
  return (
    <div className={""}>
      <p className={"font-bold text-center text-red-500 my-10"}>game</p>
      <div className={"flex flex-col items-center place-content-center"}>
        <Settings/>
        <Board/>
      </div>
    </div>
  );
};

export default App;