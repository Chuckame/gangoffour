import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { dropCurrentCombinationToStack } from "../actions/gameActions";

class CardStack extends React.Component {
  handleClick = e => {
    if (this.props.canDropCurrentCombinationToStack)
      this.props.dropCurrentCombinationToStack();
  };
  render() {
    const { cardCombinations } = this.props;
    return (
      <div className="CardStack" onClick={this.handleClick}>
        {cardCombinations.map(combination => (
          <div className="card-combination">
            {combination.map(card => (
              <div key={card.id}>
                <Card card={card} />
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    cardCombinations: state.game.stack,
    canDropCurrentCombinationToStack: state.game.currentCombination.length > 0
  };
};
export default connect(
  mapStateToProps,
  { dropCurrentCombinationToStack }
)(CardStack);
