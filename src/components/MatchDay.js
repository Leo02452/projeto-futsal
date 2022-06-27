import React, { useContext } from 'react';
import MatchDayContext from '../contexts/MatchDayContext';
import Events from './Events';
import Players from './Players';
import './Matchday.css'

function MatchDay() {
  const { score, renderButtons, setRenderButtons } = useContext(MatchDayContext);
  
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
        onClick={ () => setRenderButtons({
          ...renderButtons,
          showEventTypesButton: { activated: true },
        }) }
        className="btn"
      >
        Adicionar evento
      </button>
      { renderButtons.showEventTypesButton.activated && (
        <div>
          <div>
            <button
              type="button"
              className="btn"
              onClick={ () => setRenderButtons({
                ...renderButtons,
                showTeamButtons: { activated: true, event: 'goal' },
              }) }
            >
              Gol
            </button>
            <button
              type="button"
              className="btn"
              onClick={ () => setRenderButtons({
                ...renderButtons,
                showTeamButtons: { activated: true, event: 'foul' },
              }) }
            >
              Falta
            </button>
          </div>
          { renderButtons.showTeamButtons.activated && (
            <div>
              <div>
                <button
                  type="button"
                  value="teamA"
                  className="btn"
                  onClick={ () => setRenderButtons({
                    ...renderButtons,
                    showPlayers: { activated: true, team: 'teamA' },
                  }) }
                >
                  Meu time
                </button>
                <button
                  type="button"
                  value="teamB"
                  className="btn"
                  onClick={ () => setRenderButtons({
                    ...renderButtons,
                    showPlayers: { activated: true, team: 'teamB' },
                  }) }
                  >
                  Adversário
                </button>
              </div>
              { renderButtons.showPlayers.activated && (
                <div className="players-container">
                  <span className="players-title">{renderButtons.showPlayers.team === 'teamA' ? 'Quem fez?' : 'Quem sofreu?'}</span>
                <Players team={ renderButtons.showPlayers.team } eventType={ renderButtons.showTeamButtons.event } />
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