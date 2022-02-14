export const UserReducer = (state, action) => {
    switch (action.type) {
      case "USER_INFO_SAVED":
          return {
              first_name: action.payload.first_name,
              last_name: action.payload.last_name,
              phone_number: action.payload.phone_number,
              customer_code: action.payload.customer_code,
          }
      default:
        return state;
    }
  };