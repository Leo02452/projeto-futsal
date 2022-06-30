import React, { useContext } from 'react';
import MatchDayContext from '../contexts/MatchDayContext';
import './Events.css';

function Events() {
  const { events } = useContext(MatchDayContext);

  return (
    <div>
      { events?.map((event, index) => (
        <div key={ index } className="events-container">
          <h3 className="event-title">{event.type === 'goal' ? 'Gol!' : 'Falta'}</h3>
          <span className="event-player">{event.type === 'goal' ? event.goalPlayer : event.foulPlayer}</span>
          <span className="event-team">{event.team === 'teamA' ? 'Meu time' : 'Adversário'}</span>
        </div>
      )) }
    </div>
  );
}

export default Events;
