import { useState, createContext } from "react";

export const NavContext = createContext();

export const StateProvider = (props) => {
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(0);

  return (
    <NavContext.Provider value={[show, setShow]} counter={[count, setCount]}>
      {props.children}
    </NavContext.Provider>
  );
};
