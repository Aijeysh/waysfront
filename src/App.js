import Navbar from "./components/Navbar";
import './index.css'
import { Route, Routes, } from 'react-router-dom';
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./pages/About";
import Works from "./pages/Works";
function App() {
  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/services' element={<Services />} />
        <Route path='/about' element={<About />} />
        <Route path='/works' element={<Works />} />
      </Routes>
    </div>
  );
}

export default App;
