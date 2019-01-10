export const DROP_CURRENT_COMBINATION_TO_STACK =
  "DROP_CURRENT_COMBINATION_TO_STACK";
export const dropCurrentCombinationToStack = combination => ({
  type: DROP_CURRENT_COMBINATION_TO_STACK
});

export const NEW_TURN = "NEW_TURN";
export const newTurn = () => ({
  type: NEW_TURN
});

export const UPDATE_CURRENT_CARD_COMBINATION =
  "UPDATE_CURRENT_CARD_COMBINATION";
export const updateCurrentCardCombination = combination => ({
  type: UPDATE_CURRENT_CARD_COMBINATION,
  payload: { combination }
});
