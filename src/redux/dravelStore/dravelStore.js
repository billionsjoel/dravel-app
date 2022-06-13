const LoginUSER = 'Login_USER';
const initialState = {
  user: '',
  items: [{
    name: 'item 1',
    img: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2432&q=80',
    des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptatum veritatis accusamus! Beatae eum, quam sit reiciendis, quos voluptates fugiat voluptas totam eos quibusdam aspernatur minima, quisquam saepe eius inventore!',
  }, {
    name: 'item 2',
    img: 'https://images.unsplash.com/photo-1508921912186-1d1a45ebb3c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2432&q=80',
    des: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto voluptatum veritatis accusamus! Beatae eum, quam sit reiciendis, quos voluptates fugiat voluptas totam eos quibusdam aspernatur minima, quisquam saepe eius inventore!',
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
