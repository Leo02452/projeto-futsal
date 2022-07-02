import React, { useContext } from 'react';
import MatchDayContext from '../contexts/MatchDayContext';

function AssistsOptions(props) {
  const { onInputChange } = props;
  const { event } = useContext(MatchDayContext);  

  return (
    <>
      <label htmlFor="assistUnknown" className="player-input">
        Não sei
        <input
          type="radio"
          id="assistUnknown"
          name="assistPlayer"
          value="Desconhecido"
          onChange={ onInputChange }
        />
      </label>
      { event.team === 'teamA' && (
        <label htmlFor="no-assist" className="player-input">
          Não teve
          <input
            type="radio"
            id="no-assist"
            name="assistPlayer"
            value=""
            onChange={ onInputChange }
          />
        </label>
      ) }
    </>
  )
}

export default AssistsOptions;