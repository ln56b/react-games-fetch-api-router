import React, { Component } from 'react';
import axios from 'axios';
import Game from './Game';

class GameList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      games : '',
      bestGames: false
    };
    this.fetchGames = this.fetchGames.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleBestRatings = this.handleBestRatings.bind(this);
  }
  componentDidMount() {
    this.fetchGames()
  }

  fetchGames() {
    const url = "https://wild-games.herokuapp.com/api/v1"
    axios
    .get(url)
    .then(res => res.data)
    .then(data => 
      this.setState({
        games: data
      }))
  }

  handleDelete(id) {
    const deleteGame = this.state.games.filter(game => game.id !== id);
    this.setState({games: deleteGame})
  }

  handleBestRatings() {
    this.setState({
      bestGames : !this.state.bestGames 
    })
  }

  render() {
    return (
      this.state.games && <Game gameInfo = {this.state.games} deleteGame = {this.handleDelete} bestGames = {this.state.bestGames} handleBestRatings = {this.handleBestRatings} />
    );
  }
}

export default GameList;