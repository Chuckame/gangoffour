export const NEW_MESSAGE = "NEW_MESSAGE";
export const newMessage = message => ({
  type: NEW_MESSAGE,
  payload: {
    message
  }
});

export const NEW_CLIENT = "NEW_CLIENT";
export const newClient = client => ({
  type: NEW_CLIENT,
  payload: {
    client
  }
});
