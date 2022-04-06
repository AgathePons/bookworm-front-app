export const initialState  = {
  knowledge: 0,
  knowledgePerSecond: 10,
  knowledgePerClick: 1,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    // case SAVE_RECIPES: {
    //   return {
    //     ...state,
    //     list: action.recipes,
    //   };
    // }
    default:
      return state;
  }
};

export default reducer;
