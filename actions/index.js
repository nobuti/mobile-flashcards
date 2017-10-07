import { AsyncStorage } from 'react-native';
import { getDummyData, DECKS_STORAGE_KEY } from '../utils/decks';

export const FETCH_DECKS = 'FETCH_DECKS';

export function fetchDecks() {
  const decks = AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(results => {
      return results ? JSON.parse(results) : getDummyData();
    });

  return {
    type: FETCH_DECKS,
    payload: decks
  };
}
