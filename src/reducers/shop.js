import { LOAD_SHOP_CONTENT_FROM_USER } from '../actions/shop';

export const initialState = {
  generatorsNotOwned: {
    clickFlatNot: [''],
    clickPercentNot: [''],
    idleFlatNot: [''],
    idlePercentNot: [''],
  },
  generatorsOwned: {
    clickFlat: [''],
    clickPercent: [''],
    idleFlat: [''],
    idlePercent: [''],
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_SHOP_CONTENT_FROM_USER: {
      const { generatorsNotOwned, generatorsOwned } = action.payload;
      return {
        ...state,
        generatorsNotOwned: {
          clickFlatNot: [generatorsNotOwned.clickFlatNot],
          clickPercentNot: [generatorsNotOwned.clickPercentNot],
          idleFlatNot: [generatorsNotOwned.idleFlatNot],
          idlePercentNot: [generatorsNotOwned.idlePercentNot],
        },
        generatorsOwned: {
          clickFlat: [generatorsOwned.clickFlat],
          clickPercent: [generatorsOwned.clickPercent],
          idleFlat: [generatorsOwned.idleFlat],
          idlePercent: [generatorsOwned.idlePercent],
        },
      };
    }
    default:
      return state;
  }
};

export default reducer;
