import { store } from "../store/store";

export interface TaskInt {
  text: string;
  status?: string;
  category: string;
  id: number;
}
export interface Choice {
  name: string;
  imgSrc: string;
}
export type State = ReturnType<typeof store.getState>;

export const choiceArray: Choice[] = [
  { name: "Personal", imgSrc: "person.svg" },
  { name: "Work", imgSrc: "work.svg" },
  { name: "Life", imgSrc: "life.svg" },
  { name: "Others", imgSrc: "others.svg" },
];

export interface ArrsLengthObject {
  name: string;
  length: number;
}
