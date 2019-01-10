import { NEW_MESSAGE, NEW_CLIENT } from "../actions/chatActions";

const INITIAL_STATE = {
  clients: [],
  messages: []
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEW_MESSAGE: {
      const { message } = action.payload;
      return {
        ...state,
        messages: [...state.messages, message]
      };
    }
    case NEW_CLIENT: {
      const { client } = action.payload;
      return {
        ...state,
        clients: [...state.clients, client]
      };
    }
    default:
      return state;
  }
}
