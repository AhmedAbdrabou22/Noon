
import NavBar from "./utility/NavBar";
import HomePage from "./Pages/Home/HomePage";
import CategoryPage from "./Pages/Categories/CategoryPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpecificProductDetails from "./Pages/ProductDetails/SpecificProductDetails";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminPage from "./Pages/Admin/AdminPage";
import MainUserProfile from "./Pages/UserPage/MainUserProfile";
function App() {
  let user = {}
  if((localStorage.getItem('user'))){
    user = JSON.parse(localStorage.getItem('user'))
  }
  return (
    <div className="App">
      <ToastContainer />
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/category/:id" element={<CategoryPage />} />
          <Route path="/product/:id" element={<SpecificProductDetails />} />
          {
            user.email === "aabdrabou819@gmail.com" ? (<Route path="/admin" element={<AdminPage />} />) :null
          }
          {
            localStorage.getItem("user") ? (<Route path="/profile" element={<MainUserProfile/>}/>):null
          }
          <Route path="*" element={<h2>Page Not Found</h2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
