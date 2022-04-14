import "./App.css";
import FiveCounter from "./components/FiveCounter";
import OneCounter from "./components/OneCounter";
import TenCounter from "./components/TenCounter";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <h1> My State Management </h1>
      <Grid container>
        <Grid xs={6} padding={"20px"}>
          <OneCounter />
        </Grid>
        <Grid xs={6} padding={"20px"}>
          <OneCounter />
        </Grid>
        <Grid xs={6} padding={"20px"}>
          <FiveCounter />
        </Grid>
        <Grid xs={6} padding={"20px"}>
          <TenCounter />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
