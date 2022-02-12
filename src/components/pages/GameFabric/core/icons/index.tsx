import React from "react";
import IronOre from "./Iron_ore";

const Components: any = {
  "iron-ore": IronOre,
};

const GameIcon = (props: any) => {
  let Componenet = Components[props.name];
  return <Componenet />;
};

export default GameIcon;
