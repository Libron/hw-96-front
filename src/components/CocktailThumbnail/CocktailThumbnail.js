import React from 'react';
import {apiURL} from "../../constants";
import {CardImg} from "reactstrap";

const CocktailThumbnail = props => {
  let image = null;

  if (props.image) {
    image = apiURL + '/uploads/' + props.image;
  }

  return <CardImg top src={image} alt="Card image cap" />;
};

export default CocktailThumbnail;
