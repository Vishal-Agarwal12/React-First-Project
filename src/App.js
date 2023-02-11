
import './App.css';
import Navbar from './components/Navbar';
import Home from './Home'
import Blog from './Blog'
import About from './About'
import Forum from './Forum'
import Contact from './Contact'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Forum" element={<Forum />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
