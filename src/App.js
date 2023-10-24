
import NavBar from "./utility/NavBar";
import HomePage from "./Pages/Home/HomePage";
import CategoryPage from "./Pages/Categories/CategoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpecificProductDetails from "./Pages/ProductDetails/SpecificProductDetails";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPage from "./Pages/Admin/AdminPage";
function App() {
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/product/:id" element={<SpecificProductDetails />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
