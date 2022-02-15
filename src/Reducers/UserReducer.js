export const UserReducer = (state, action) => {
    switch (action.type) {
      case "USER_INFO_SAVED":
      case "USER_LOADED":
          return {
              ...action.payload
          }
      
      default:
        return state;
    }
  };