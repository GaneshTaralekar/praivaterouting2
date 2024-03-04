import logo from "./logo.svg";
import "./App.css";
import Navbar from "./componets/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./componets/Home";
import Contact from "./componets/Contact";
import About from "./componets/About";
import Singin from "./componets/Singin";
import Privater from "./componets/Privater";
import Error from "./componets/Error";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar/>}/>   
          {/* jaha navbar he vaha pehale homepage rakhatha */}
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="*" element={<Error/>}/>
          {/* <Route path="navbar" element={<Navbar/>}/> */}
          <Route path="privater">
            <Route path="singin" element={<Singin/>}/>
          </Route>
          


        </Routes>
        </BrowserRouter>
         
      </div>
    </>
  );
}

export default App;
