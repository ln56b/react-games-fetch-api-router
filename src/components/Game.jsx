import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const Game = ({ gameInfo }) => {
  return (
    <div>
      {gameInfo.map(game =>
      <Card>
        <CardImg top width="30%" src = {game.background_image} alt = {game.name}/>
        <CardBody>
          <CardTitle>{game.name}</CardTitle>
          <CardSubtitle>{game.rating}</CardSubtitle>
          <CardText>{game.released}</CardText>
          <Button></Button>
        </CardBody>
      </Card>
      )}
    </div>
    
  );
}

export default Game;