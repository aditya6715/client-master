import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Viewdata from "./pages/Viewdata";

function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Navbar />

      {/* Hero Section */}
      <div className="App">
        <div className="hero">
          <h1>Find Your Dream Home</h1>
          <p>Discover the best real estate deals near you</p>
          <button onClick={() => window.location.href = "/view_property"}>Browse Listings</button>
        </div>
      </div>
      
    </>
  );
}

export default App;
