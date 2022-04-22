import React, {useState} from 'react';
import Players from './Players';

function MatchDay() {
  const [showEvents, setShowEvents] = useState(false);
  const [showTeams, setShowTeams] = useState(false);
  const [showPlayers, setShowPlayers] = useState({ activated: false, team: '' });
  const [score, setScore] = useState({ teamA: 0, teamB: 0 })

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
                  value="myTeam"
                  onClick={ () => setShowPlayers({ activated: true, team: 'a' }) }
                >
                  Meu time
                </button>
                <button
                  type="button"
                  value="opponent"
                  onClick={ () => setShowPlayers({ activated: true, team: 'b' }) }
                  >
                  Adversário
                </button>
              </div>
              { showPlayers.activated && (
                <div>
                  <span>{showPlayers.team === 'a' ? 'Quem fez?' : 'Quem sofreu?'}</span>
                <Players />
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