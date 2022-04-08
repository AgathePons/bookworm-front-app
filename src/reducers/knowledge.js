import {
  ADD_KNOWLEDGE_PER_CLICK,
  ADD_KNOWLEDGE_PER_SECOND,
  LOAD_ALL_KNOWLEDGE_FROM_USER,
  RESET_KNOWLEDGE,
}
  from '../actions/knowledge';

export const initialState = {
  knowledge: 0,
  knowledgePerSecond: 0,
  knowledgePerClick: 1,
  totalOfClicks: 0,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_KNOWLEDGE_PER_CLICK: {
      return {
        ...state,
        knowledge: state.knowledge + state.knowledgePerClick,
        totalOfClicks: state.totalOfClicks + 1,
      };
    }
    case ADD_KNOWLEDGE_PER_SECOND: {
      return {
        ...state,
        knowledge: state.knowledge + state.knowledgePerSecond,
      };
    }
    case LOAD_ALL_KNOWLEDGE_FROM_USER: {
      const data = action.payload;
      return {
        ...state,
        knowledge: data.currency,
        knowledgePerSecond: data.idle_value,
        knowledgePerClick: data.click_value,
        totalOfClicks: data.click_counter,
      };
    }
    case RESET_KNOWLEDGE: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default reducer;
