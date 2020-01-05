import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import './Game.css'


class Game extends Component {

  render() {
    return (
      <div>
        {this.props.gameInfo.map(game =>
        <Card>
          <CardImg top width="30%" src = {game.background_image} alt = {game.id}/>
          <CardBody>
            <CardTitle>{game.name}</CardTitle>
            <CardSubtitle>{game.rating}</CardSubtitle>
            <CardText>{game.released}</CardText>
            <Button onClick={() => this.props.deleteGame(game.id)}>Delete game</Button>
          </CardBody>
        </Card>
        )}
      </div>
      
    );
  }
}

export default Game;