import {FC} from "react";
import {CellType} from "../../constants/TYPES";

type Props = {
  info: Omit<CellType, "isHovered">
}
const InfoBoard:FC<Props> = ({info}) => {
  return (
      <div className={"flex flex-row justify-center gap-10 py-4 border-b"}>
        <p>X Axis: {info.x + 1}</p>
        <p>Y Axis: {info.y + 1}</p>
      </div>
  );
};

export default InfoBoard;