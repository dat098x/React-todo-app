const { createSlice } = require("@reduxjs/toolkit");

const initialTodo = [
  {
    id: 1,
    title: "Todo1",
    description: "Todo1 ...",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Todo2",
    description: "Todo2 ...",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Todo3",
    description: "Todo3 ...",
    isCompleted: false,
  },
];

const todo = createSlice({
  name: "todos",
  initialState: initialTodo,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    isCompletedTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.isCompleted = !todo.isCompleted;
      }
    },
    toggleTodo: (state, action) => {
      return state.forEach((todo) => (todo.isCompleted = !action.payload));
    },
  },
});

const { reducer, actions } = todo;
export const { addTodo, removeTodo, isCompletedTodo, toggleTodo } = actions;
export default reducer;
