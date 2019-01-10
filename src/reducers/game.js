import {
  DROP_CURRENT_COMBINATION_TO_STACK,
  NEW_TURN,
  UPDATE_CURRENT_CARD_COMBINATION
} from "../actions/gameActions";

const INITIAL_STATE = {
  players: [
    { id: 1, isMe: true, name: "Joe", cards: [] },
    { id: 2, name: "Alfred", cards: [] },
    { id: 3, name: "Fred", cards: [] },
    { id: 4, name: "Filip", cards: [] }
  ],
  stack: [],
  waste: [],
  currentTurn: 1,
  currentPlayer: null,
  currentCombination: []
};
INITIAL_STATE.currentPlayer = INITIAL_STATE.players[0];

const allCards = [];

const colors = ["green", "yellow", "red"];
var cardId = 1;
addCard({ num: 1, color: "multicolor" });
colors.forEach(color => {
  for (var num = 1; num <= 10; num++) {
    addCard({ num, color });
    addCard({ num, color });
  }
});
addCard({ isPhoenix: true, num: 11, color: "green" });
addCard({ isPhoenix: true, num: 11, color: "yellow" });
addCard({ isDragon: true, num: 11, color: "red" });

function addCard(card) {
  card.id = cardId++;
  allCards.push(card);
}

var curPlyr = 0;
while (allCards.length > 0) {
  var cardIndex = Math.floor(Math.random() * allCards.length);
  var card = allCards[cardIndex];
  allCards.splice(cardIndex, 1);

  INITIAL_STATE.players[curPlyr++].cards.push(card);
  if (curPlyr === INITIAL_STATE.players.length) curPlyr = 0;
}
INITIAL_STATE.players
  .filter(player => !player.isMe)
  .forEach(player => {
    player.cards.forEach(card => (card.isHidden = true));
  });

INITIAL_STATE.players.forEach(player => {
  player.cards.sort(compareCards);
});

function compareCards(a, b) {
  return computeCardWeight(b) - computeCardWeight(a);
}
function computeCardWeight(card, numberOfCards = 1) {
  const colorMap = ["green", "yellow", "red", "multicolor"];
  if (card.isHidden) return 0;
  return (
    colorMap.indexOf(card.color) +
    (1 << (card.num - 1 + colorMap.length + numberOfCards - 1))
  );
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case DROP_CURRENT_COMBINATION_TO_STACK: {
      var nextPlayerIndex = state.players.indexOf(state.currentPlayer);
      if (nextPlayerIndex === state.players.length) nextPlayerIndex = 0;
      state.currentCombination.forEach(card => {
        var index = state.currentPlayer.cards.indexOf(card);
        if (index > -1) {
          state.currentPlayer.cards.splice(index, 1);
        }
      });
      return {
        ...state,
        stack: [...state.stack, state.currentCombination],
        currentCombination: [],
        currentPlayer: state.players[nextPlayerIndex]
      };
    }
    case NEW_TURN: {
      return {
        ...state,
        currentTurn: state.currentTurn++
      };
    }
    case UPDATE_CURRENT_CARD_COMBINATION: {
      const { combination } = action.payload;
      return {
        ...state,
        currentCombination: [...combination]
      };
    }
    default:
      return state;
  }
}
