import { FETCH_DECKS, NEW_DECK } from '../actions';
import { submitEntry } from '../utils/api';

function reducer(state = {}, action) {
  switch (action.type) {
    case FETCH_DECKS:
      return {
        ...state,
        ...action.decks
      }

    case NEW_DECK:
      const { title } = action

      submitEntry({
        key: title,
        entry: { title, questions: [] }
      });

      return {
        ...state,
        [title]: {
          title,
          questions: [],
        }
      }

    default:
      return state;
  }
}

export default reducer;
