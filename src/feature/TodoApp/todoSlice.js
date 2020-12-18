const { createSlice } = require("@reduxjs/toolkit");

const initialTodo= [
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
  }
]

const todo = createSlice({
  name: 'todos',
  initialState: initialTodo,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    isCompletedTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload);
      state[index].isCompleted = !state[index].isCompleted;
    },
    filterTodo: (state, action) => {
      switch(action.payload) {
        case "ACTIVE": {
          const filterTodo = [...state];
          filterTodo.filter(todo => !todo.isCompleted);
          console.log([...state]);
          return filterTodo.filter(todo => !todo.isCompleted);
        }
        case "COMPLETED": {
          const filterTodo = [];
          filterTodo.push(state.find(todo => todo.isCompleted === true));
          return filterTodo;  
        }
        default:
          return [...state];
      }
    }
  }
});

const {reducer, actions} = todo;
export const { addTodo, removeTodo, isCompletedTodo, filterTodo } = actions;
export default reducer;