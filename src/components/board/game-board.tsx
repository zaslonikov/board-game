import {FC, useState} from "react";
import produce from "immer";
import InfoBoard from "./info-board";

type Props = {
  cells_count?: number
}
const GameBoard: FC<Props> = ({cells_count = 15}) => {

  const initGrid = (count: number) => {
    const board = Array(count)
      // @ts-ignore
      .fill()
      .map((_, indexH) =>
        Array(count)
          // @ts-ignore
          .fill()
          .map((_, indexW) => (
            {
              x: indexH,
              y: indexW,
              isHovered: false
            }
            )))
    return board
  }

  const [grid, setGrid] = useState(() => initGrid(cells_count))
  const [hoveredCells, setHoveredCells] = useState<{x: number, y: number}[]>([])

  const onHover = (event: any, x: number, y: number) => {
    event.preventDefault()
    const updatedGrid = produce(grid, (draft) => {
      Object.assign(draft[x][y], {
        isHovered: !draft[x][y].isHovered })
    })
    if (updatedGrid[x][y].isHovered) {
      setHoveredCells(value => [...value, {x, y}])
    }
    setGrid(updatedGrid)
    console.log(hoveredCells, "xy")
  }

  return (
    <div className={"grid grid-cols-2 gap-10"}>
      <div
        style={{
          width: "500px",
          height: "500px",
          display: "grid",
          gridTemplateColumns: `repeat(${cells_count}, auto)`,
          gridTemplateRows: `repeat(${cells_count}, auto)`
        }
        }
      >{grid.map((row: any, i: number) => row.map((col: any, j: number) =>
        <div
          onMouseEnter={(e) => onHover(e, i, j)}
          className={`border flex ${col.isHovered ? "bg-blue-200" : "bg-white"}`}
          key={`${i}-${j}`}
        />))}
      </div>
      <div className={"max-h-[500px] w-[400px] overflow-auto justify-self-center"}>
        <p className={"text-center sticky top-0 border bg-yellow-200 opacity-50 py-3"}>Отмеченные клетки</p>
        {hoveredCells.map((item) => (
          <InfoBoard info={item}/>
        ))}
      </div>
    </div>
  )
}

export default GameBoard