import React, { useContext } from 'react';
import MatchDayContext from '../contexts/MatchDayContext';
import Events from './Events';
import Players from './Players';
import './Matchday.css'

function MatchDay() {
  const {
    score,
    renderButtons,
    setRenderButtons,
    event,
    setEvent
  } = useContext(MatchDayContext);

  const { showEventTypesButton, showTeamButtons, showPlayers } = renderButtons;
  // const handleChange = ({ target }) => {
  //   const { value } = target;
  //   setEvent({ ...event, player: value });
  // };

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
          showEventTypesButton: true,
        }) }
        className="btn"
      >
        Adicionar evento
      </button>
      { showEventTypesButton && (
        <div>
          <div>
            <button
              type="button"
              className="btn"
              onClick={ () => {
                setRenderButtons({
                  ...renderButtons,
                  showTeamButtons: true })
                setEvent({ ...event, type: 'goal' });
              } }
            >
              Gol
            </button>
            <button
              type="button"
              className="btn"
              onClick={ () => {
                setRenderButtons({
                  ...renderButtons,
                  showTeamButtons: true });
                setEvent({ ...event, type: 'foul' });
              } }
            >
              Falta
            </button>
          </div>
          { showTeamButtons && (
            <div>
              <div>
                <button
                  type="button"
                  value="teamA"
                  className="btn"
                  onClick={ () => {
                    setRenderButtons({
                      ...renderButtons,
                      showPlayers: true });
                    setEvent({ ...event, team: 'teamA' });
                  } }
                >
                  Meu time
                </button>
                <button
                  type="button"
                  value="teamB"
                  className="btn"
                  onClick={ () => {
                    setRenderButtons({
                      ...renderButtons,
                      showPlayers: true });
                    setEvent({ ...event, team: 'teamB' });
                  } }
                  >
                  Adversário
                </button>
              </div>
              { showPlayers && (
                <div className="players-container">
                  <span className="players-title">{event.team === 'teamA' ? 'Quem fez?' : 'Quem sofreu?'}</span>
                <Players />
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