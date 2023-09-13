
import NavBar from "./utility/NavBar";
import HomePage from "./Pages/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <NavBar/>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
