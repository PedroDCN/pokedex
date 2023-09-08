import { Outlet } from "react-router-dom";
import { PokemonProvider } from "./contexts/PokemonContext";
import "./App.css";

function App() {
  return (
    <>
      <PokemonProvider>
        <Outlet />
      </PokemonProvider>
    </>
  );
}

export default App;
