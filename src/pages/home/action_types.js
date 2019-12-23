// sagas的标识action type
export const GETHOMELIST = 'home/type_getHomeList'
export const GETCATEGORYLIST = 'home/type_getCategoryList'
export const GETCARTLIST = 'home/type_getCartList'


// 真正的action tppe
export const LOADDATA = 'home/load_data'
export const FETCH_FAILED = '/home/fetch_failed'
export const LOADCATGORY = 'home/load_category'
// 购物车
export const LOADCART = 'home/load_cart'
export const SELECT_ALL_SHOP = 'home/SELECT_ALL_SHOP';  // 购物车所有商品
//export const GET_USER_CART = 'home/GET_USER_CART';  // 用户购物车数据
export const TOGGLE_SHOP = 'home/TOGGLE_SHOP';  // 是否选中商品
export const ADD_SHOP = 'home/ADD_SHOP';  // + 商品
export const SUB_SHOP = 'home/SUB_SHOP';  // — 商品
export const NUM_SHOP = 'home/NUM_SHOP'; 
export const REMOVE_SHOP = 'home/REMOVE_SHOP';  // 删除商品 
export const CANCEL_ALL_SHOP = 'home/CANCEL_ALL_SHOP'; //全不选
export const REMOVE_SELECT_SHOP = 'home/REMOVE_SELECT_SHOP';  // 删除商品 

// 列表
export const TOGGLE_ROW = 'home/TOGGLE_ROW'; 
export const PRO_TOTAL= 'home/PRO_TOTAL'; 
export const PRO_DESC = 'home/PRO_DESC'; 
export const PRO_FILTER_TOGGLE = 'home/PRO_FILTER_TOGGLE'; 
export const PRO_FILTER = 'home/PRO_FILTER'
export const PRO_SELF = 'home/PRO_SELF'; 

export const SEARCH_ONFOCUS = 'home/SEARCH_ONFOCUS'
export const SEARCH_CLICK = 'home/SEARCH_CLICK'
export const SEARCH_CONTENT = 'home/SEARCH_CONTENT'
export const SEARCH_LIST = 'home/SEARCH_LIST'
