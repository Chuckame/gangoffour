import React from "react";
import Card from "./Card";
import { connect } from "react-redux";
import { updateCurrentCardCombination } from "../actions/gameActions";

class Deck extends React.Component {
  handleCardClick = (e, card) => {
    e.preventDefault();
    if (card.isHidden) return;
    if (e.button === 0) {
      const idx = this.props.selectedCards.indexOf(card);
      if (idx > -1) {
        this.props.updateCurrentCardCombination(
          this.props.selectedCards.filter(c => c !== card)
        );
      } else {
        this.props.updateCurrentCardCombination([
          ...this.props.selectedCards,
          card
        ]);
      }
    }
  };
  handleRightClick = e => {
    e.preventDefault();
    this.props.updateCurrentCardCombination([]);
  };
  render() {
    const { cards, name } = this.props.player;
    const { selectedCards } = this.props;
    return (
      <div className="Deck gaucher" onContextMenu={this.handleRightClick}>
        {cards.map(card => (
          <div className="card-container" key={card.id}>
            <div
              className={
                "deck-card-wrapper " +
                (selectedCards.indexOf(card) > -1 ? "checked" : "")
              }
              onClick={e => {
                this.handleCardClick(e, card);
              }}
            >
              <Card card={card} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedCards: state.game.currentCombination
  };
};
export default connect(
  mapStateToProps,
  { updateCurrentCardCombination }
)(Deck);
