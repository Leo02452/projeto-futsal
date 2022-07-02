import React, { useContext } from 'react';
import MatchDayContext from '../contexts/MatchDayContext';
import './Players.css';
import Players from './Players';
import GoalsOptions from './GoalsOptions';
import FoulsOptions from './FoulsOptions';
import AssistsOptions from './AssistsOptions';

function PlayersCard() {
  const { addEvent, setRenderButtons, event, setEvent } = useContext(MatchDayContext);  

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setEvent({ ...event, [name]: value });
  }

  const handleClick = () => {
    addEvent(event);
    setRenderButtons({
      showEventTypesButton: false,
      showTeamButtons: false,
      showPlayers: false,    
    })
  };

  return (
    <section className="players-wrapper">
      <Players onInputChange={ handleChange } />
      { event.type === 'goal'
        ? <GoalsOptions onInputChange={ handleChange } />
        : <FoulsOptions onInputChange={ handleChange } />
      }
      { event.type === 'goal' && (
        <>
          <span>Assistência de: </span>
          <Players onInputChange={ handleChange } isAssistPlayer />
          <AssistsOptions onInputChange={ handleChange } />
        </>
        )
      }
      <button
        type="button"
        className="btn"
        onClick={ handleClick }
      >
        Adicionar
      </button>
    </section>
  )
}

export default PlayersCard;
