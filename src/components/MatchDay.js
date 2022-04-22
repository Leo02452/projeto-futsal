import React, { useState, useContext } from 'react';
import MatchDayContext from '../contexts/MatchDayContext';
import Players from './Players';

function MatchDay() {
  const { score } = useContext(MatchDayContext);
  const [showEvents, setShowEvents] = useState(false);
  const [showTeams, setShowTeams] = useState(false);
  const [showPlayers, setShowPlayers] = useState({ activated: false, team: '' });
  

  return (
    <section>
      <div>
        <span>Seu time</span>
        <span>{score.teamA}</span>
        <span>vs</span>
        <span>{score.teamB}</span>
        <span>Adversário</span>
      </div>
      <button
        type="button"
        onClick={ () => setShowEvents(true) }
      >
        Adicionar evento
      </button>
      { showEvents && (
        <div>
          <div>
            <button
              type="button"
              onClick={ () => setShowTeams(true) }
            >
              Adicionar gol
            </button>
            <button
              type="button"
              onClick={ () => setShowTeams(true) }
            >
              Adicionar falta
            </button>
          </div>
          { showTeams && (
            <div>
              <div>
                <button
                  type="button"
                  value="teamA"
                  onClick={ () => setShowPlayers({ activated: true, team: 'teamA' }) }
                >
                  Meu time
                </button>
                <button
                  type="button"
                  value="teamB"
                  onClick={ () => setShowPlayers({ activated: true, team: 'teamB' }) }
                  >
                  Adversário
                </button>
              </div>
              { showPlayers.activated && (
                <div>
                  <span>{showPlayers.team === 'teamA' ? 'Quem fez?' : 'Quem sofreu?'}</span>
                <Players team={ showPlayers.team } />
                </div>
              )}
            </div>
            )}
        </div>
      )}
    </section>
  )
}

export default MatchDay;