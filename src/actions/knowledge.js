// ACTION TYPE
export const ADD_KNOWLEDGE_PER_CLICK = 'ADD_KNOWLEDGE_PER_CLICK';
export const ADD_KNOWLEDGE_PER_SECOND = 'ADD_KNOWLEDGE_PER_SECOND';
export const LOAD_ALL_KNOWLEDGE_FROM_USER = 'LOAD_ALL_KNOWLEDGE_FROM_USER';
export const RESET_KNOWLEDGE = 'RESET_KNOWLEDGE';
// ACTION CREATOR

export const addKnowledgePerClick = () => ({
  type: ADD_KNOWLEDGE_PER_CLICK,
});

export const addKnowledgePerSecond = () => ({
  type: ADD_KNOWLEDGE_PER_SECOND,
});

export const loadAllKnowledgeFromUser = (payload) => ({
  type: LOAD_ALL_KNOWLEDGE_FROM_USER,
  payload: payload,
});

export const resetKnowledge = () => ({
  type: RESET_KNOWLEDGE,
});
