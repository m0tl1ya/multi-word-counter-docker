export const ADD_COUNTER_TOP = 'ADD_COUNTER_TOP';
export const ADD_COUNTER_BELOW = 'ADD_COUNTER_BELOW';
export const DELETE_COUNTER = 'DELETE_COUNTER';
export const EDIT_COUNTER = 'EDIT_COUNTER';
export const REFRESH = 'REFRESH';

export const addCounterTop = () => ({
  type: ADD_COUNTER_TOP,
});

export const addCounterBelow = () => ({
  type: ADD_COUNTER_BELOW,
});

export const deleteCounter = id => ({
  type: DELETE_COUNTER,
  id,
});


export const editCounter = (id, text, words, characters, allCharacters, isCounted) => ({
  type: EDIT_COUNTER,
  id,
  text,
  words,
  characters,
  allCharacters,
  isCounted,
});


export const refresh = () => ({
  type: REFRESH,
});
