import "./App.css";
import GlassCard from "./components/GlassCard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="sidecard">
        <GlassCard />
      </div>
    </div>
  );
}

export default App;
