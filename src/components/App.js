import React from "react";
import Deck from "./Deck";
import CardStack from "./CardStack";
import "./App.css";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    const { players } = this.props;
    const deckPositionByPlayerIndex = [
      "pin-down",
      "pin-left",
      "pin-top",
      "pin-right"
    ];
    return (
      <div className="App">
        <CardStack />
        {players.map((player, i) => (
          <div className={deckPositionByPlayerIndex[i]} key={i}>
            <Deck player={player} />
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    players: state.game.players
  };
};
export default connect(mapStateToProps)(App);
