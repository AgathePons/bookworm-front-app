// ACTION TYPE
export const LOAD_SHOP_CONTENT_FROM_USER = 'LOAD_SHOP_CONTENT_FROM_USER';
export const BUY_SHOP_ITEM = 'BUY_SHOP_ITEM';
export const BUY_MORE_SHOP_ITEM = 'BUY_MORE_SHOP_ITEM';

// ACTION CREATOR

export const loadShopContentFromUser = (payload) => ({
  type: LOAD_SHOP_CONTENT_FROM_USER,
  payload: payload,
});

export const buyShopItem = (payload) => ({
  type: BUY_SHOP_ITEM,
  payload: payload,
});

export const buyMoreShopItem = (payload) => ({
  type: BUY_MORE_SHOP_ITEM,
  payload: payload,
});
