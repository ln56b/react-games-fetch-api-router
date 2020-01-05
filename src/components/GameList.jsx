import React, { Component } from 'react';
import axios from 'axios';
import Game from './Game';

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      games : ''
    };
    this.fetchGames = this.fetchGames.bind(this)
  }
  componentDidMount = () => {
    this.fetchGames()
  }

  fetchGames = () => {
    const url = "https://wild-games.herokuapp.com/api/v1"
    axios
    .get(url)
    .then(res => res.data)
    .then(data => 
      this.setState({
        games: data
      }))
  }

  onDelete = (e) => {
    
  }

  render() {
    return (
      this.state.games && <Game gameInfo = {this.state.games} />
    );
  }
}

export default GameList;