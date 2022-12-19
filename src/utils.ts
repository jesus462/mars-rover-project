import { INasaPhotos } from "./types";

export const getSixRandomPhotos = (arr: INasaPhotos[]): INasaPhotos[] => {
  let randomPhotos: INasaPhotos[] = [];
  const stoppingCondition = arr.length <= 6 ? arr.length : 6;

  for (let i = 0; i < stoppingCondition; i++) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    randomPhotos.push(arr[randomIndex]);
  }

  return randomPhotos;
};
