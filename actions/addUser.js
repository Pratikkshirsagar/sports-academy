export default (email) => {
  return {
    type: 'addUser',
    payload: {
      email: email,
    },
  };
};
