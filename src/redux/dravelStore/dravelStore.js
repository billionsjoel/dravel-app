const LOGINUSER = 'LOGIN_USER';
const ADDITEM = 'ADD_ITEM';
const DELETEITEM = 'DELETE_ITEM';
const ADDRESERVATION = 'ADD_RESERVATION';

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
  reservations: [{
    user: '',
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
