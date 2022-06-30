import { StateProvider } from "./components/context/NavState";
import Home from "./components/Home";
import Items from "./components/Items";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Register from "./components/Register";

function App() {
  return (
    <StateProvider>
      <div>
        <NavBar />
        <Items />
      </div>
    </StateProvider>
  );
}

export default App;
