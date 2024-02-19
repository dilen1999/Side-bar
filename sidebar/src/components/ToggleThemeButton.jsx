
import React from "react";
import { Button } from "antd";
import { HiOutlinedSun, HiOutlineMoon } from "react-icons";

const ToggleThemeButton = ({ darkTheme, toggleTheme }) => {
  return (
    <div className="toggle-theme-btn">
      <Button onClick={toggleTheme}>
        darkTheme ? <HiOutlinedSun /> :
        <HiOutlineMoon />
      </Button>
    </div>
  );
};

export default ToggleThemeButton;
