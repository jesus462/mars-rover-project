export interface INasaPhotos {
  camera: ICamera;
  earth_date: string;
  id: number;
  img_src: string;
  rover: IRover;
  sol: number;
}

interface ICamera {
  full_name: string;
  id: number;
  name: string;
  rover_id: number;
}

interface IRover {
  id: number;
  landing_date: string;
  launch_date: string;
  name: string;
  status: string;
}

export interface IContextState {
  store: IStore;
  actions: IActions;
}

export interface IStore {
  photos: INasaPhotos[];
}

export interface IActions {
  getPhotos: () => void;
}

export interface IGetState {
  getStore: () => IStore;
  getActions: () => IActions;
  setStore: (updatedStore: IStore) => void;
}
