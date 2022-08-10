import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
