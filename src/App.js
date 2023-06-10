import Navbar from "./components/Navbar";
import './index.css'
import { Route, Routes, } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import Works from "./pages/Works";
import Footer from "./components/Footer";
import Login from "./pages/authpages/Login";
import NoPage from "./pages/NoPage";
import AddPost from "./pages/authpages/AddPost";
import EditWork from "./pages/authpages/EditWork";
import UpdatePost from "./pages/authpages/UpdatePost";
import AdminContact from "./pages/authpages/AdminContact";
function App() {
  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="absolute mt-24 w-full">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path='/about' element={<About />} />
            <Route path='/works' element={<Works />} />
            <Route path='/footer' element={<Footer />} />
            <Route path="/adminlogin" element={<Login />} />
            <Route path="*" element={<NoPage />} />
            <Route path="/adminpost" element={<AddPost />} />
            <Route path="/adminedit" element={<EditWork />} />
            <Route path="/updatepost" element={<UpdatePost />} />
            <Route path="/admincontact" element={<AdminContact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
