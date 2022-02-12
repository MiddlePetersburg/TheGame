import React from "react";
import { ButtonGroup, Button, Menu, MenuItem } from "@mui/material";
import Icon from "../../../ui/icons";
import "./style.scss";

const ToolBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <ButtonGroup className="fabric__tooltip">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Icon name="fabric-icon" />
      </Button>
      <Menu
        classes={{ list: "tooltip__list", paper: "tooltip__paper" }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Буровая установка</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
      <Button>
        <Icon name="energy-icon" />
      </Button>
    </ButtonGroup>
  );
};

export default ToolBar;
