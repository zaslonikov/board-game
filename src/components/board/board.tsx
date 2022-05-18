import {FC} from "react";

type Props = {
  cells_count?: number
}
const Board: FC<Props> = ({cells_count}) => {
  const prop = 15


  const board = Array(prop)
    // @ts-ignore
    .fill()
    .map((_, indexH) =>
      Array(prop)
        // @ts-ignore
        .fill()
        .map((_, indexW) => (
          indexW
        )))

  console.log(board)

  return (
    <div className={"grid grid-cols-2 gap-10"}>
      <div
        style={{
          width: "500px",
          height: "500px",
          display: "grid",
          gridTemplateColumns: `repeat(${prop}, auto)`,
          gridTemplateRows: `repeat(${prop}, auto)`
        }
        }
      >{board.map((row: any, i: number) => row.map((col: any, j: number) =>
        <div className={"border flex hover:bg-blue-200"}
             key={`${i}-${j}`}
        />))}
      </div>
      <div>
        <p className={"text-center"}>Hover squares</p>
      </div>
    </div>
  )
}

export default Board