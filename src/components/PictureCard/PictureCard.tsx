import { FunctionComponent } from "react";

import { Card, Text, Image } from "./styles";
import { INasaPhotos } from "../../types";

export const PictureCard: FunctionComponent<{
  photo: INasaPhotos;
}> = ({ photo }) => {
  return (
    <Card>
      <Image src={photo.img_src} />
      <Text>{photo.id}</Text>
      <Text>
        <span>Camera: {photo.camera.name}</span>
        <br />
        <br />
        Rover: {photo.rover.name}
        <br />
        Launch: {photo.rover.launch_date}
        <br />
        Landing: {photo.rover.landing_date}
      </Text>
    </Card>
  );
};
