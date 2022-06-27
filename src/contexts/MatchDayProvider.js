import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import MatchDayContext from './MatchDayContext';

function MatchDayProvider(props) {
  const [score, setScore] = useState({ teamA: 0, teamB: 0 });
  const [events, setEvents] = useState([]);
  
  useEffect(() => {
  const handleScore = () => {
    events.forEach((event) => {
      if (event.type === 'goal') {
        if (event.team === 'teamA') {
          setScore({ ...score, teamA: score.teamA + 1 });
        } else {
          setScore({ ...score, teamB: score.teamB + 1 });
        }
      }
    });
  };
  handleScore();
  }, [events]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  }

  const { Provider } = MatchDayContext;
  const { children } = props;

  return (
    <Provider
      value={ {
        score,
        setScore,
        events,
        addEvent,
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
