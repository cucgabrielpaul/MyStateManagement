import "./App.css";
import FiveCounter from "./components/FiveCounter";
import OneCounter from "./components/OneCounter";
import TenCounter from "./components/TenCounter";

function App() {
  return (
    <div className="App">
      <h1> My State Management </h1> 
      <OneCounter />
      <OneCounter />
      <FiveCounter />
      <TenCounter />
    </div>
  );
}

export default App;
