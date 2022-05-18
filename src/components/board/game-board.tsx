import {FC, useEffect, useState} from "react";
import produce from "immer";
import InfoBoard from "./info-board";

type Props = {
  cells_count?: number
}
const GameBoard: FC<Props> = ({cells_count = 3}) => {

  const initGrid = (count: number) => {
    return Array(count)
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
  }

  const [grid, setGrid] = useState(() => initGrid(cells_count))
  const [hoveredCells, setHoveredCells] = useState<{ x: number, y: number }[]>([])


  useEffect(() => {
    if (hoveredCells.length === cells_count * cells_count) {
      alert("u win")
      resetGame()
    }
  }, [hoveredCells])

  const resetGame = () => {
    setGrid(initGrid(cells_count))
    setHoveredCells([])
  }
  const onHover = (event: any, x: number, y: number) => {
    event.preventDefault()
    const updatedGrid = produce(grid, (draft) => {
      Object.assign(draft[x][y], {
        isHovered: !draft[x][y].isHovered
      })
    })
    if (updatedGrid[x][y].isHovered) {
      setHoveredCells(value => [...value, {x, y}])
    }
    if (!updatedGrid[x][y].isHovered) {
      const index = hoveredCells.findIndex(item => item.y === y && item.x === x)  //delete unhovered cell
      setHoveredCells([
        ...hoveredCells.slice(0, index),
        ...hoveredCells.slice(index + 1)
      ])
    }
    setGrid(updatedGrid)
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