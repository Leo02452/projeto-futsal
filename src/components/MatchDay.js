import React, { useState, useContext } from 'react';
import MatchDayContext from '../contexts/MatchDayContext';
import Events from './Events';
import Players from './Players';
import './Matchday.css'

function MatchDay() {
  const { score } = useContext(MatchDayContext);
  const [showEvents, setShowEvents] = useState(false);
  const [showTeams, setShowTeams] = useState({ activated: false, event: '' });
  const [showPlayers, setShowPlayers] = useState({ activated: false, team: '' });
  

  return (
    <section className="matchday-container">
      <div className="scoreboard-container">
        <span className="matchday-teams">Seu time</span>
        <span className="score">{score.teamA}</span>
        <span className="vs">vs</span>
        <span className="matchday-teams">{score.teamB}</span>
        <span className="score">Adversário</span>
      </div>
      <button
        type="button"
        onClick={ () => setShowEvents(true) }
        className="btn"
      >
        Adicionar evento
      </button>
      { showEvents && (
        <div>
          <div>
            <button
              type="button"
              className="btn"
              onClick={ () => setShowTeams({ activated: true, event: 'goal' }) }
            >
              Gol
            </button>
            <button
              type="button"
              className="btn"
              onClick={ () => setShowTeams({ activated: true, event: 'foul' }) }
            >
              Falta
            </button>
          </div>
          { showTeams.activated && (
            <div>
              <div>
                <button
                  type="button"
                  value="teamA"
                  className="btn"
                  onClick={ () => setShowPlayers({ activated: true, team: 'teamA' }) }
                >
                  Meu time
                </button>
                <button
                  type="button"
                  value="teamB"
                  className="btn"
                  onClick={ () => setShowPlayers({ activated: true, team: 'teamB' }) }
                  >
                  Adversário
                </button>
              </div>
              { showPlayers.activated && (
                <div className="players-container">
                  <span className="players-title">{showPlayers.team === 'teamA' ? 'Quem fez?' : 'Quem sofreu?'}</span>
                <Players team={ showPlayers.team } eventType={ showTeams.event } />
                </div>
              )}
            </div>
            )}
        </div>
      )}
      <Events />
    </section>
  )
}

export default MatchDay;