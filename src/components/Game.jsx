import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class Game extends Component {

  render() {
    return (
      <div>
  <button onClick={this.props.handleBestRatings}>{this.props.bestGames? 'All Games' : 'Best Games'}</button>
        {this.props.gameInfo
        .filter(game => this.props.bestGames || game.rating >= 4.5)
        .map(game =>
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