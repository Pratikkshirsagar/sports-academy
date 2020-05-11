export default (id, email) => {
  return {
    type: 'AUTH_USER',
    payload: {
      email: email,
      id: id,
    },
  };
};
