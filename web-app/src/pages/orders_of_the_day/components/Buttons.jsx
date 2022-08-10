import { Button } from "@mui/material";
import { useState } from "react";

const Buttons = ({ handleClick }) => {
  const buttons = [15, 20, 25, 30, 35, 40, 45, "Otro"];
  const [active, setActive] = useState();
  const isLast = (index) => index === buttons.length - 1;
  const onClick = (index, time) => {
    setActive(index);
    return handleClick ? handleClick(time) : null;
  };
  return buttons.map((button, index) => (
    <Button
      key={index}
      variant={isLast(index) || active === index ? "contained" : "outlined"}
      style={{
        flex: 1,
        margin: 1,
      }}
      color={isLast(index) ? "warning" : "success"}
      onClick={() => onClick(index, button)}
    >
      {button}
    </Button>
  ));
};
export default Buttons;
