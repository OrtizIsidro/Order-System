import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

const NavigationTabs = () => {
  const navigate = useNavigate();
  const texts = ["Pedidos Del Dia", "Pedidos Recientes", "Menues", "Desempeño"];
  const links = ["/", "recent_orders", "menues", "performance"];
  const [active, setActive] = useState(0);
  const handleChange = (e, newValue) => setActive(newValue);

  return (
    <Tabs
      value={active}
      onChange={handleChange}
      style={{ flex: 2, justifyContent: "space-between", margin: "0 20px" }}
      orientation="vertical"
    >
      {texts.map((text, index) => (
        <Tab
          value={index}
          onClick={() => navigate(links[index])}
          key={index}
          style={{ margin: "2px 0" }}
          label={text}
        />
      ))}
    </Tabs>
  );
};
export default NavigationTabs;
