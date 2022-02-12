import React from "react";
import Toolbar from "./components/ToolBar";
import Field from "./components/Field";
import "./style.scss";

const Fabric = () => {
  const scrollHandler = (e: any) => {
    console.log(e);
  };
  return (
    <div className="fabric">
      <Toolbar />
      <Field
        onWheel={scrollHandler}
        viewBox="0 0 1000 700"
        width={1000}
        height={700}
        className="fabric__field"
      />
    </div>
  );
};

export default Fabric;
