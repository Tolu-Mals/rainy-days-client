export const tokenConfig = (state) => {
    //Get token from local storage
    const token = state.token;

    //Headers
    let config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    //If token, then add to headers
    if (token) {
      config.headers["x-auth-token"] = token;
    }
    
    return config;
}