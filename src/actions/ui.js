import * as UITypes from "../constants/ui";

export const showLoading = () => {
  return {
    type: UITypes.SHOW_LOADING
  };
};

export const hideLoading = () => {
  return {
    type: UITypes.HIDE_LOADING
  };
};



export const showSidebar = () => {
  return {
    type: UITypes.SHOW_SIDEBAR
  };
};

export const hideSidebar = () => {
  return {
    type: UITypes.HIDE_SIDEBAR
  };
};
