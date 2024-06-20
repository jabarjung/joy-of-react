import React from 'react';

import GuessInput from '../GuessInput/GuessInput';
import GuessList from '../GuessList/GuessList';
import HappyBanner from '../HappyBanner/HappyBanner';
import SadBanner from '../SadBanner/SadBanner';
import { sample } from '../../utils';
import { WORDS } from '../../data';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guess, setGuess] = React.useState('');
  const [guessList, setGuessList] = React.useState([]);

  let win =
    guessList.length &&
    guessList[guessList.length - 1].value === answer
      ? true
      : undefined;
  let lose =
    guessList.length === 6 && guessList[5].value !== answer
      ? true
      : undefined;
  let gameOver = win || lose;
  return (
    <>
      <GuessList guessList={guessList} answer={answer} />
      <GuessInput
        guess={guess}
        setGuess={setGuess}
        guessList={guessList}
        setGuessList={setGuessList}
        isDisabled={gameOver ? true : false}
      />
      {win && <HappyBanner noOfGuesses={guessList.length} />}
      {lose && <SadBanner answer={answer} />}
    </>
  );
}

export default Game;
