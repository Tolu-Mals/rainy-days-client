export const UserReducer = (state, action) => {
    switch (action.type) {
      case "USER_INFO_SAVED":
      case "USER_LOADED":
          return {
              ...action.payload,
              user_loading: false
          }
      case "USER_LOADING":
        return {
          ...state,
          user_loading: true
        }
      default:
        return state;
    }
  };