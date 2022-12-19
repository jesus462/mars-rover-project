import { AxiosError } from "axios";
import nasaService from "../services/nasa";
import { IContextState, IGetState } from "../types";

const getState = ({
  getStore,
  getActions,
  setStore,
}: IGetState): IContextState => {
  return {
    store: {
      photos: [],
    },
    actions: {
      getPhotos: () => {
        const store = getStore();

        nasaService
          .getPhotos()
          .then((returnedPhotos) => {
            setStore({
              ...store,
              photos: returnedPhotos,
            });
          })
          .catch((err: AxiosError) => {
            console.log(err.response?.status, err.response?.statusText);
          });
      },
    },
  };
};

export default getState;
