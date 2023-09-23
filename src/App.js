
import NavBar from "./utility/NavBar";
import HomePage from "./Pages/Home/HomePage";
import CategoryPage from "./Pages/Categories/CategoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpecificProductDetails from "./Pages/ProductDetails/SpecificProductDetails";
function App() {
  return (
    <div className="App">
        <NavBar/>
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path="/category/:id" element={<CategoryPage/>}/>
            <Route path="/product/:id" element={<SpecificProductDetails/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
