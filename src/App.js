import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Appdevelopment from './Components/Appdevelopment';
import Design from './Components/Design';
import Webdevelopment from './Components/Webdevelopment';
import Digitalmarketing from './Components/Digitalmarketing';
import Contactdata from './Components/Contactdata';
import Blog from './Components/Blogs';
import BlogDetails from './Components/blogDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/appdevelopment" element={<Appdevelopment />} />
      <Route path="/uiuxdesign" element={<Design />} />
      <Route path="/webdevelopment" element={<Webdevelopment />} />
      <Route path="/digitalmarketing" element={<Digitalmarketing />} />
      <Route path="/formdata" element={<Contactdata />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:name" element={<BlogDetails />} />
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  );
}

export default App;
