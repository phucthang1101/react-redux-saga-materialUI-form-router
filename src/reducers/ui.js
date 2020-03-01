import * as UITypes from "../constants/ui.js";

const initialState = {
  showLoading: false,
  showSidebar:true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UITypes.SHOW_LOADING: {
      
      return {
        ...state,
        showLoading: true
      };
    }
    case UITypes.HIDE_LOADING: {
    
      return {
        ...state,
        showLoading: false
      };
    }
    case UITypes.SHOW_SIDEBAR: {
      
      return {
        ...state,
        showSidebar: true
      };
    }
    case UITypes.HIDE_SIDEBAR: {
    
      return {
        ...state,
        showSidebar: false
      };
    }
    default:
      return state;
  }
};

export default reducer;