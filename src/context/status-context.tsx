import {createContext} from "react";

interface IStatusContext {
  gameStatus: boolean;
  setGameStatus: (value: boolean) => void;
}

export const StatusContext = createContext<IStatusContext>({
  gameStatus: false, setGameStatus: (value => {
  })
});
