import React, {
  useState
} from 'react';
import { object } from 'prop-types';
import MatchDayContext from './MatchDayContext';

function MatchDayProvider(props) {
  const [score, setScore] = useState({ teamA: 0, teamB: 0 });

  const addScore = (team) => {
    setScore({ ...score, [team]: score[team] + 1 })
  };

  const diminishScore = (team) => {
    setScore({ ...score, [team]: score[team] - 1 })
  };

  const { Provider } = MatchDayContext;
  const { children } = props;

  return (
    <Provider
      value={ {
        score,
        setScore,
        addScore,
        diminishScore,
      } }
    >
      {children}
    </Provider>
  );
}

MatchDayProvider.propTypes = {
  children: object,
}.isRequired;

export default MatchDayProvider;
