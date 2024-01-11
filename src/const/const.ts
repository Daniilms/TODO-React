export interface TaskInt {
  text: string;
  status: boolean;
  category: string;
}
export interface Choice {
  name: string;
  imgSrc: string;
}

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
