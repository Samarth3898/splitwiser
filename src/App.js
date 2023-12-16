import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Login } from "./component";

const App = () => {
  <BrowserRouter>
    <Box sx={{ backgroundColor: "black" }}>
      <Routes>
        <Route path="/" exact element={<Login />} />
      </Routes>
    </Box>
  </BrowserRouter>;
};

export default App;