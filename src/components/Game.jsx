import React, { Component } from 'react';
import './Game.css';


class Game extends Component {

  render() {
    return (
      <div className = "general-container">
        <button className = "button" onClick={this.props.handleBestRatings}>{this.props.bestGames? 'All Games' : 'Best Games'}</button>
        {this.props.gameInfo
        .filter(game => this.props.bestGames || game.rating >= 4.5)
        .map(game =>
        <div className = "game-container">
          <img className = "game-image" src = {game.background_image} alt = {game.id}/>
          <figure className = "game-info">
            <h3 className = "game-name">{game.name}</h3>
            <h4 className = "game-rating">{game.rating}</h4>
            <p className ="game-release">{game.released}</p>
            <button className = "button" onClick={() => this.props.deleteGame(game.id)}>Delete game</button>
          </figure>
        </div>
        )}
      </div>
      
    );
  }
}

export default Game;