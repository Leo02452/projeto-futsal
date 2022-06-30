import React from 'react';
import MatchDay from '../components/MatchDay';
import MatchDayProvider from '../contexts/MatchDayProvider';

function Match() {
  return (
    <div>
      <MatchDayProvider>
        <MatchDay />
      </MatchDayProvider>
    </div>
  );
}

export default Match;
