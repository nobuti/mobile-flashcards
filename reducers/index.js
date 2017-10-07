import { FETCH_DECKS } from '../actions';

const initialState = {
  decks: {}
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DECKS:
      var data = {
        decks: action.payload
      }

      return {
        ...state,
        ...data
      };

    default:
      return state;
  }
}

export default reducer;
