import { ChoiceCard } from "../ChoiceCard/ChoiceCard";
import { ArrsLengthObject, choiceArray } from "../../const/const";
import "./MainScreen.css";

interface MainScreenProps {
  allArraysLength: ArrsLengthObject[];
  inputSetter: (showInput: boolean) => void;
  pathSetter: (path: string) => void;
}
export function MainScreen({
  allArraysLength,
  inputSetter,
  pathSetter,
}: MainScreenProps) {
  return (
    <ul className="choice-list">
      {choiceArray.map((choice, index) => {
        return (
          <ChoiceCard
            key={index}
            choice={choice}
            allArraysLength={allArraysLength}
            inputSetter={inputSetter}
            pathSetter={pathSetter}
          />
        );
      })}
    </ul>
  );
}
