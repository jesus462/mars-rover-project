import axios from "axios";
import { INasaPhotos } from "../types";

const nasa_api_key = process.env.REACT_APP_API_KEY;
const baseUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2012-10-10&api_key=${nasa_api_key}`;

const getPhotos = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => {
    const nasaPhotos: INasaPhotos[] = response.data.photos;
    return nasaPhotos;
  });
};

const nasaService = { getPhotos };
export default nasaService;
