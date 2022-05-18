import {FC} from "react";
import {CellType} from "../../constants/TYPES";

type Props = {
  info: Omit<CellType, "isHovered">
}
const InfoBoard:FC<Props> = ({info}) => {
  return (
      <div className={"flex flex-row justify-center gap-10 py-4 border-b"}>
        <p>X Axis: {info.x}</p>
        <p>Y Axis: {info.y}</p>
      </div>
  );
};

export default InfoBoard;