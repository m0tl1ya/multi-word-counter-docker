import {
    ADD_COUNTER_TOP,
    ADD_COUNTER_BELOW,
    DELETE_COUNTER,
    EDIT_COUNTER,
    REFRESH,
  } from '../actions/counterActions';
  
  const initialState = [
    {
      id: 0,
      text: '',
      words: 0,
      characters: 0,
      allCharacters: 0,
      isCounted: true,
    },
  ];
  
  function counters(state = initialState, action) {
    switch (action.type) {
      case ADD_COUNTER_TOP:
        return [
          {
            id: state.reduce((maxId, counter) => Math.max(counter.id, maxId), -1) + 1,
            text: '',
            words: 0,
            characters: 0,
            allCharacters: 0,
            isCounted: true,
          },
          ...state,
        ];
      case ADD_COUNTER_BELOW:
        return [
          ...state,
          {
            id: state.reduce((maxId, counter) => Math.max(counter.id, maxId), -1) + 1,
            text: '',
            words: 0,
            characters: 0,
            allCharacters: 0,
            isCounted: true,
          },
        ];
      case DELETE_COUNTER:
        return state.filter(counter =>
          counter.id !== action.id);
  
      case EDIT_COUNTER:
        return state.map(counter =>
          counter.id === action.id ?
          {
            ...counter,
            text: action.text,
            words: action.words,
            characters: action.characters,
            allCharacters: action.allCharacters,
            isCounted: action.isCounted,
          } :
          counter);
  
      case REFRESH:
        return state.filter(counter =>
          counter.id === -1);
  
      default:
        return state;
    }
  }
  
  export default counters;
  