const userDate = {
  email: '',
};

const userReducer = (state = userDate, action) => {
  if (action.type === 'addUser') {
    const newState = { ...state };
    newState.email = action.payload.email;
    return newState;
  } else {
    return state;
  }
};

export default userReducer;
