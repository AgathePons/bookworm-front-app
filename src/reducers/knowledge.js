import { ADD_KNOWLEDGE_PER_CLICK, ADD_KNOWLEDGE_PER_SECOND } from '../actions/knowledge';

export const initialState = {
  knowledge: 0,
  knowledgePerSecond: 10,
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
    default:
      return state;
  }
};

export default reducer;
