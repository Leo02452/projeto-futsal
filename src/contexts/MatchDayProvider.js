import React, { useState, useEffect } from 'react';
import { object } from 'prop-types';
import MatchDayContext from './MatchDayContext';

function MatchDayProvider(props) {
  const [score, setScore] = useState({ teamA: 0, teamB: 0 });
  const [event, setEvent] = useState({
    type: '',
    team: '',
    goalPlayer: '',
    assistPlayer: '',
    foulPlayer: '',
  });
  const [events, setEvents] = useState([]);
  const [renderButtons, setRenderButtons] = useState({
    showEventTypesButton: { activated: false },
    showTeamButtons: { activated: false, event: '' },
    showPlayers: { activated: false, team: '' },    
  });
  
  useEffect(() => {
  const handleScore = () => {
    let teamAScore = 0;
    let teamBScore = 0;
    events.forEach((event) => {
      if (event.type === 'goal') {
        if (event.team === 'teamA') {
          teamAScore += 1;
        } else {
          teamBScore += 1;
        }
      }
    });
    setScore({ teamA: teamAScore, teamB: teamBScore });
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
        event,
        setEvent,
        events,
        addEvent,
        renderButtons,
        setRenderButtons,
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
