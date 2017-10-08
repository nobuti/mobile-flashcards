import _ from 'lodash';
import {
  FETCH_DECKS,
  NEW_DECK,
  NEW_CARD,
  REMOVE_DECK
} from '../actions';
import { submitEntry } from '../utils/api';

function reducer(state = {}, action) {
  switch (action.type) {
    case FETCH_DECKS:
      return {
        ...state,
        ...action.decks
      }

    case NEW_DECK:
      const {
        title
      } = action;

      submitEntry({
        key: title,
        entry: {
          title,
          questions: []
        }
      });

      return {
        ...state,
        [title]: {
          title,
          questions: [],
        }
      }

    case NEW_CARD:
      {
        const {
          title,
          question,
          answer
        } = action;
        const entry = {
          title,
          questions: [{
              result: null,
              question,
              answer
            },
            ...state[title].questions
          ]
        };

        submitEntry({
          key: title,
          entry
        });

        return {
          ...state,
          [title]: entry
        }
      }

    case REMOVE_DECK: {
      const {
        title
      } = action;

      const decks = _.omit(state, title);
      return {
        ...decks
      }
    }

    default:
      return state;
  }
}

export default reducer;