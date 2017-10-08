import { AsyncStorage } from 'react-native';

export const DECKS_STORAGE_KEY = 'MobileFlashcards:decks';

export const setDummyData = (results) => {
  let dummyData = {
    React: {
      title: 'React',
      questions: [
        {
          question: 'What is React?',
          answer: 'React is an open-source JavaScript library created by Facebook for building complex, interactive UIs in web and mobile applications.'
        },
        {
          question: 'How is React different?',
          answer: 'Because React is a small library focused on building UI components, it is necessarily different than a lot of other JavaScript frameworks.'
        },
        {
          question: 'What are stateless components?',
          answer: 'Stateless components are nothing more than pure functions that render DOM based solely on the properties provided to them.'
        }
      ]
    },
    JavaScript: {
      title: 'JavaScript',
      questions: [
        {
          question: 'What is the difference between undefined and null?',
          answer: 'undefined means a variable has been declared but has not yet been assigned a value. On the other hand, null is an assignment value. It can be assigned to a variable as a representation of no value. Also, undefined and null are two distinct types: undefined is a type itself (undefined) while null is an object.'
        },
        {
          question: 'What is a closure?',
          answer: 'The combination of a function and the lexical environment within which that function was declared.',
        },
        {
          question: 'How do you check if an object is an array or not?',
          answer: 'The best way to find out whether or not an object is an instance of a particular class is to use the toString method from Object.prototype: Object.prototype.toString.call( arrayList ) === "[object Array]"'
        }
      ]
    }
  };

  if (results == null) {
    AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(dummyData));
    return dummyData;
  } else {
    return JSON.parse(results);
  }
}
