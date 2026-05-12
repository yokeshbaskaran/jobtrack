import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import "./App.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />} />
      </Routes>
    </div>
  );
};

export default App;
