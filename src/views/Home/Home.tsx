import { FunctionComponent, useContext, useEffect, useState } from "react";
import { Context } from "../../store/Context";
import { PictureCard } from "../../components";
import { MainContainer, Container, Button } from "./styles";
import { getSixRandomPhotos } from "../../utils";
import { INasaPhotos } from "../../types";

export const Home: FunctionComponent = () => {
  const { store } = useContext(Context);
  const [randomPhotos, setRandomPhotos] = useState<INasaPhotos[]>([]);

  useEffect(() => {
    const initSixRandomPhotos = getSixRandomPhotos(store.photos);
    setRandomPhotos(initSixRandomPhotos);
  }, [store.photos]);

  return (
    <MainContainer>
      <Button onClick={() => setRandomPhotos(getSixRandomPhotos(store.photos))}>
        Get 6 New Random Photos
      </Button>
      <Container>
        {randomPhotos.map((photo) => (
          <PictureCard photo={photo} key={photo.id} />
        ))}
      </Container>
    </MainContainer>
  );
};
