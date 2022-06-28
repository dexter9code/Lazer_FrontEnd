import { StateProvider } from "./components/context/NavState";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <StateProvider>
      <div>
        <NavBar />
        <Home />
      </div>
    </StateProvider>
  );
}

export default App;
