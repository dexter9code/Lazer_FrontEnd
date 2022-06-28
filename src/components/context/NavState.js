import { useState, createContext } from "react";

export const NavContext = createContext();

export const StateProvider = (props) => {
  const [show, setShow] = useState(false);

  return (
    <NavContext.Provider value={[show, setShow]}>
      {props.children}
    </NavContext.Provider>
  );
};
