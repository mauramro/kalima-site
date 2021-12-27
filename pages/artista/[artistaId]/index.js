import React, { Fragment } from "react";
import DetallesArtista from "../../../components/DetallesArtista";
import artistas from "../../../testData/artistas";

const idArtista = (props) => {
  const selectedArtist = artistas.find((artista) => artista.id === props.id);
  const { name, image } = selectedArtist;

  return (
    <Fragment>
      <DetallesArtista name={name} image={image} />
    </Fragment>
  );
};

export async function getStaticPaths() {
  const paths = artistas.map((artista) => ({
    params: {
      artistaId: artista.id,
    },
  }));
  return {
    fallback: "blocking", // true/'blocking' if all the paths have been assigned, else not all have been assigned
    paths: paths,
  };
}

export async function getStaticProps(context) {
  const artistaId = context.params.artistaId;

  return {
    props: {
      id: artistaId,
    },
  };
}

export default idArtista;
