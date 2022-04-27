import React, { useContext } from 'react';
import MatchDayContext from '../contexts/MatchDayContext';

function Events() {
  const { events } = useContext(MatchDayContext);

  return (
    <div>
      { events?.map((event, index) => (
        <div key={ index }>
          <h3>{event.type === 'goal' ? 'Gol!' : 'Falta'}</h3>
          <span>{event.player}</span>
          <span>{event.team}</span>
        </div>
      )) }
    </div>
  );
}

export default Events;
