import { StateProvider } from "./components/context/NavState";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Register from "./components/Register";

function App() {
  return (
    <StateProvider>
      <div>
        <NavBar />
        <Register />
      </div>
    </StateProvider>
  );
}

export default App;
