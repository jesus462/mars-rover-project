import React, { useState, useEffect, FunctionComponent } from "react";
import getState from "./flux";
import { IContextState } from "../types";

export const Context = React.createContext<IContextState>(null!);

const injectContext = (PassedComponent: FunctionComponent) => {
  const StoreWrapper = (props: any) => {
    const globalState = getState({
      getStore: () => state.store,
      getActions: () => state.actions,
      setStore: (updatedStore) =>
        setState({
          store: updatedStore,
          actions: { ...state.actions },
        }),
    });

    const [state, setState] = useState<IContextState>(globalState);

    useEffect(() => {
      state.actions.getPhotos();
      // eslint-disable-next-line
    }, []);
    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
