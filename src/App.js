import logo from "./logo.svg";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./component/Navbar";
import { Home } from "./component/Home";
import { About } from "./component/About";
import { Servies } from "./component/Servies";
import Fruits1 from "./component/Fruits1";
import Change_compt from "./New Component/Change_compt";
import { Footer } from "./component/Footer";
import { Contact } from "./component/Contact";
import { Content_fruits } from "./Fruits/Content_fruits";
import Btn from "./Create/Btn";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<Change_compt/>}></Route>
        <Route path="/servies" element={<Servies />}></Route> 
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>  
      <Footer/>
      {/* <Content_fruits/> */}
      {/* <Change_compt/> */}
      {/* <Vegitable_carry/> */}
      {/* <Contact/> */}
      {/* <Btn/> */}
    </div>
  );
}

export default App;
