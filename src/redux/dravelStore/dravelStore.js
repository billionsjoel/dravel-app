const LOGINUSER = 'LOGIN_USER';
const ADDITEM = 'ADD_ITEM';
const DELETEITEM = 'DELETE_ITEM';
const ADDRESERVATION = 'ADD_RESERVATION';

const initialState = {
  user: '',
  items: [{
    name: 'item 1',
  }, {
    name: 'item 2',
  }],
  reservations: [{
    user: 'saloma',
    itemName: 'item 1',
    date: '2020-20-13',
    city: 'alger',
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

export const deleteItem = (payload) => ({
  type: DELETEITEM,
  payload,
});

export const addreservation = (payload) => ({
  type: ADDRESERVATION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGINUSER:
      return { ...state, user: action.payload };

    case ADDITEM:
      return { ...state, items: [...state.items, { name: action.payload }] };

    case ADDRESERVATION:
      return { ...state, reservations: [...state.reservations, action.payload] };

    case DELETEITEM:
      /* eslint-disable */
      const newItemsState = state.items.map((x) => {
        if (x.name === action.payload) {
          return {...x,deleted: true};
        }
        return {...x};
      });
      return { ...state, items: newItemsState };

    default:
      return state;
  }
};

export default reducer;
