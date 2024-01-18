import { createReducer } from "@reduxjs/toolkit";
import { deleteTask, fillTodoList, makeDone } from "./action";
import { TaskInt } from "../const/const";

const initialState: initialStateInt = {
  todoList: [],
  taskId: 0,
};
interface initialStateInt {
  todoList: TaskInt[];
  taskId: number;
}
export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fillTodoList, (state, action) => {
      state.todoList = [...state.todoList, action.payload];
    })
    .addCase(deleteTask, (state, action) => {
      state.todoList = state.todoList.filter(
        (task) => task.id !== action.payload
      );
    })
    .addCase(makeDone, (state, action) => {
      state.todoList.map((task) => {
        if (task.id === action.payload.id) {
          task.status = "Done";
        }
      });
    });
});
