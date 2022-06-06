const Login_USER = 'Login_USER';
const initialState = { user: '' };

export const loginUser = (payload) => ({
  type: Login_USER,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Login_USER:
      return { ...state, user:action.payload};

    default:
      return state;
  }
};

export default reducer;
