import React, { Component } from "react";
import axios from "axios";
import Screenshots from "./Screenshots";

class ListScreenshots extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      games: [] 
    };
  }

  componentDidMount() {
    const url = "https://wild-games.herokuapp.com/api/v1/"
    axios
      .get(url)
      .then(res => res.data)
      .then(data => {
        this.setState({
          games: data
        });
      });
  }

  render() {
    const games = this.state.games;

    return games
      .map(game => <Screenshots key={game.id} {...game} />)
      .filter(game => game.key === this.props.match.params.id);
  }
}
export default ListScreenshots;