export const getMatchs = JSON.parse(localStorage.getItem('match'));

export const saveMatch = (match) => {
  return localStorage.setItem('match', JSON.stringify(match));
}