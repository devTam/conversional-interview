import { useReducer, createContext } from "react";

const initialState = {
  openModal: false,
};

const Context = createContext();

const rootReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL":
      return {
        ...state,
        openModal: true,
      };

    case "CLOSE_MODAL":
      return {
        ...state,
        openModal: false,
      };

    default:
      return state;
  }
};

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
