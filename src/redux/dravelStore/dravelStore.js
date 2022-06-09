const LoginUSER = 'Login_USER';
const initialState = {
  user: '',
  items: [{
    name: 'item 1',
  }, {
    name: 'item 2',
  }],
};

export const loginUser = (payload) => ({
  type: LoginUSER,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LoginUSER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};

export default reducer;
