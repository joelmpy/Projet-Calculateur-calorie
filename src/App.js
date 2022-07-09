import React from "react";
import Calorie from "./component/Calorie";
import Navbar from "./component/Navbar";
import "./styles/App.css"

function App() {
    return (
      <div className="container">
        <Navbar />
        <Calorie/>
      </div>
    );
}

export default App;
