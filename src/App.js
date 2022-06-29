import { StateProvider } from "./components/context/NavState";
import Home from "./components/Home";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Register from "./components/Register";

function App() {
  return (
    <StateProvider>
      <div>
        <NavBar />
        <Login />
      </div>
    </StateProvider>
  );
}

export default App;
