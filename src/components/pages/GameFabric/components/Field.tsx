import React, { useMemo } from "react";
import { IronOre } from "../core/data/resources";
import GameIcon from "../core/icons";

const Field = (props: any) => {
  const sizeCell = 10;
  let w = props.width;
  let h = props.height;
  const clickCellHandler = (cell: any) => {
    console.log(cell);
  };
  const resourses = useMemo(() => {
    console.log(IronOre);
    return [
      {
        ...IronOre,
      },
    ];
  }, []);
  const grid = useMemo(() => {
    const array = [];
    while (w > 0) {
      w -= sizeCell;
      while (h > 0) {
        h -= sizeCell;
        array.push({
          x: w,
          y: h,
          width: sizeCell,
          height: sizeCell,
        });
      }
      h = props.height;
    }
    return array;
  }, []);
  return (
    <svg {...props}>
      {grid.map((cell, idx) => (
        <rect
          className="grid_cell"
          onClick={() => clickCellHandler(cell)}
          {...cell}
          key={idx}
        />
      ))}
      {resourses.map((resourse) => (
        <GameIcon name={resourse.image} key={resourse.name_en} />
      ))}
    </svg>
  );
};

export default Field;
