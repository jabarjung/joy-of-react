import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ guessList, counter, answer }) {
  return (
    <p className="guess">
      {range(5).map((_, index) => (
        <span
          className={`cell ${
            guessList[counter]
              ? checkGuess(guessList[counter].value, answer)[index]
                  .status
              : ''
          }`}
          key={index}
        >
          {guessList[counter] ? guessList[counter].value[index] : ''}
        </span>
      ))}
    </p>
  );
}

export default Guess;
