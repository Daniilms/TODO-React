import { createAction } from "@reduxjs/toolkit";
import { TaskInt } from "../const/const";

export const fillTodoList = createAction<TaskInt>("tasksList/fillTodoList");

export const deleteTask = createAction<number>("task/deleteTask");

export const makeDone = createAction<TaskInt>("task/makeDone");
