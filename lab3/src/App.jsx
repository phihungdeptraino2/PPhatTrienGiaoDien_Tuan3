import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./Navbar";
import Body from "./Body";
import Footer from "./Footer.Jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <Navbar></Navbar>
        <Body></Body>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
