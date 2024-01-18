import { ChoiceCard } from "../ChoiceCard/ChoiceCard";
import { choiceArray } from "../../const/const";
import "./MainScreen.css";

export function MainScreen() {
  return (
    <ul className="choice-list">
      {choiceArray.map((choice, index) => {
        return <ChoiceCard key={index} choice={choice} />;
      })}
    </ul>
  );
}
