import { createStore } from "redux";

const initialState = {
  counter: {
    value: 0,
  },
  name: {
    inputText: {
      value: '',
    },
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/increment": {
      return { ...state, counter: { value: state.counter.value + 1 } };
    }
    case "name/setName": {
      return { ...state, name: { inputText: { value: action.payload } } };
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
