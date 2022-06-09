const LOGINUSER = 'LOGIN_USER';
const ADDITEM = 'ADD_ITEM';

const initialState = {
  user: '',
  items: [{
    name: 'item 1',
  }, {
    name: 'item 2',
  }],
};

export const loginUser = (payload) => ({
  type: LOGINUSER,
  payload,
});

export const addItem = (payload) => ({
  type: ADDITEM,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGINUSER:
      return { ...state, user: action.payload };

    case ADDITEM:
      return { ...state, items: [...state.items, action.payload] };

    default:
      return state;
  }
};

export default reducer;
