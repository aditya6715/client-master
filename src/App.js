import "./App.css";
import Navbar from "./components/Navbar";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <Navbar />
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Website</h1>
          <p>Your trusted platform for managing properties efficiently.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>
    </>
  );
}

export default App;
