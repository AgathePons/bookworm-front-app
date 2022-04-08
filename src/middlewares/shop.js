import axios from 'axios';
import { BUY_SHOP_ITEM, BUY_MORE_SHOP_ITEM, loadShopContentFromUser } from '../actions/shop';
import { loadAllKnowledgeFromUser } from '../actions/knowledge';

const shop = (store) => (next) => (action) => {
  switch (action.type) {
    case BUY_SHOP_ITEM: {
      const state = store.getState();
      const { token } = state.user;
      const { knowledge, totalOfClicks } = state.knowledge;
      const buyItem = async () => {
        try {
          const response = await axios.post(`http://localhost:8000/api/save/item/${action.payload}`, {
            currency: knowledge,
            clickCounter: totalOfClicks,
          }, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          console.log(response);
          if (response.status === 200) {
            store.dispatch(loadAllKnowledgeFromUser(response.data.playerSave));
            store.dispatch(loadShopContentFromUser(response.data.playerSave));
          }
        }
        catch (error) {
          // TODO
          console.log(error);
        }
      };

      buyItem();

      break;
    }
    case BUY_MORE_SHOP_ITEM: {
      const state = store.getState();
      const { token } = state.user;
      const { knowledge, totalOfClicks } = state.knowledge;
      const buyItem = async () => {
        try {
          const response = await axios.patch(`http://localhost:8000/api/save/item/${action.payload}`, {
            currency: knowledge,
            clickCounter: totalOfClicks,
          }, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          });
          console.log(response);
          if (response.status === 200) {
            store.dispatch(loadAllKnowledgeFromUser(response.data.playerSave));
            store.dispatch(loadShopContentFromUser(response.data.playerSave));
          }
        }
        catch (error) {
          // TODO
          console.log(error);
        }
      };

      buyItem();

      break;
    }
    default:
      next(action);
  }
};

export default shop;
