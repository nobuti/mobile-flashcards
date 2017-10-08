# Mobile Flashcards

This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app).

## Test

The application was tested on iPhone 7 Plus (simulator) and ONEPLUS A3003 (real device).

## Run

* Make sure `yarn` is installed
* `git clone git@github.com:nobuti/mobile-flashcards.git`
* `cd mobile-flashcards/`
* `yarn && yarn start`
* Follow instructions to open Android or iOS simulator on PC or phone.

## App Usage

The app includes some dummy data in order to ease its initilization. Once the app loads, it shows a list of created decks which includes the name of each deck and the number of cards. Pressing on a deck in the list shows an individual deck view. Using a long press, shows a confirmation to delete a deck.

The individual deck view shows the details about the deck: title, number of cards. Also the user will be able to add more cards or start a quizz.

The Quiz view starts with the first question from the selected deck. For every question, the user will have to guess the response, and mark it as correct (Yay!) or incorrect (Nay!). The progress is shown at the top of the view as a progressbar. Once all questions have been answered, the user will be able to see the final score.

#### Warning

The Javascript bundle throws a nasty warning on the screen:

```
Warning: Installed version 0.0.8 of 'react-native-circular-progress' does not satisfy required version bgryszko/react-native-circular-progress#91f15f5a5320c04d645352a629f2478873344f6d
```

This app indeed uses that third party library. It has a bug on Android devices, already fixed in the master branch of the repo, but not deployed to npm yet. You can read more about this in https://github.com/bgryszko/react-native-circular-progress/issues/72#issuecomment-331549572.