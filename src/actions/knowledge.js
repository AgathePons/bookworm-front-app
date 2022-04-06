// ACTION TYPE
export const ADD_KNOWLEDGE_PER_CLICK = 'ADD_KNOWLEDGE_PER_CLICK';
export const ADD_KNOWLEDGE_PER_SECOND = 'ADD_KNOWLEDGE_PER_SECOND';
// ACTION CREATOR

export const addKnowledgePerClick = () => ({
  type: ADD_KNOWLEDGE_PER_CLICK,
});

export const addKnowledgePerSecond = () => ({
  type: ADD_KNOWLEDGE_PER_SECOND,
});
