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
import 'bootstrap-icons/font/bootstrap-icons.css';
import { getDateParts, getAllBlogPosts } from './Components/blogData';

import Blog1 from './blogs/Blog1';
import Blog2 from './blogs/Blog2';
import Blog3 from './blogs/Blog3';
import Portfolio from './Components/Portfolio';


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
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/formdata" element={<Contactdata />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/empowering-businesses-through-it-services" element={<Blog1 recentPosts={getAllBlogPosts()} getDateParts={getDateParts} />} />
      <Route path="/blog/professional-it-consulting-and-app-development" element={<Blog2 recentPosts={getAllBlogPosts()} getDateParts={getDateParts} />} />
      <Route path="/blog/application-maintainence-and-digital-growth-strategy" element={<Blog3 recentPosts={getAllBlogPosts()} getDateParts={getDateParts} />} />
      {/* <Route path="/" element={<Home />} /> */}
    </Routes>
  );
}

export default App;
