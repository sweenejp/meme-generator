import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import MemeGenerator from "./MemeGenerator/MemeGenerator";

function App() {
  return (
    <div className="app">
      <Header />
      <MemeGenerator />
      <Footer />
    </div>
  );
}

export default App;
