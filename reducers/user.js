const userDate = {
  id: '',
  email: '',
};

const userReducer = (state = userDate, action) => {
  if (action.type === 'AUTH_USER') {
    const newState = { ...state };
    newState.email = action.payload.email;
    newState.id = action.payload.id;
    return newState;
  } else {
    return state;
  }
};

export default userReducer;
