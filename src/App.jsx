import "./assets/global.css"
import Header from "./Components/Header/Header";
import Contacts from "./Pages/Contacts/Contacts";
import Menu from "./Pages/Menu/Menu";
import Home from "./Pages/Home/Home";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import Admin from "./Pages/Admin/Admin";
import Addfood from "./Pages/Addfood/Addfood";
import Editfood from "./Pages/Editfood/Editfood";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
 
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Contacts" element={<Contacts />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Addfood" element={<Addfood />} />
          <Route path="/Editfood/:id" element={<Editfood />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
