import React, { useMemo } from "react";
import fabricIcon from "./fabricIcon";
import energyIcon from "./energyIcon";
import "./style.scss";

const components: any = {
  "fabric-icon": fabricIcon,
  "energy-icon": energyIcon,
};

const Icon = (props: { name: string }) => {
  const CurrentIcon = components[props.name];
  const setClass = useMemo(() => `icon icon--${props.name}`, []);
  return <CurrentIcon className={setClass} />;
};

export default Icon;
