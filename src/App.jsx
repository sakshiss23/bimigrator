import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "@/pages/Intro/Intro";
// @ is the alias for "src"

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
