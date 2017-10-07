export const FETCH_DECKS = 'FETCH_DECKS';
export const NEW_DECK = 'NEW_DECK';

export const receiveDecks = (decks) => {
  return {
    type: FETCH_DECKS,
    decks,
  }
}

export const newDeck = ({ title }) => {
  return {
    type: NEW_DECK,
    title,
  }
}
