import { Choice, State, TaskInt } from "../../const/const";
import { Link } from "react-router-dom";
import "./ChoiceCard.css";
import { useSelector } from "react-redux";

interface ChoiceCardProps {
  choice: Choice;
}
export function ChoiceCard({ choice }: ChoiceCardProps) {
  const todosList = useSelector((state: State) => state.todoList);

  function calculateQuantity() {
    const arr: TaskInt[] = [];

    todosList.map((task) => {
      if (choice.name === task.category) {
        arr.push(task);
      }
    });
    return arr.length;
  }

  return (
    <Link className="choice-card" to={`/Tasks/${choice.name}`}>
      <div className="choice-card-content">
        <img
          className="choice-card-img"
          src={`../../../img/${choice.imgSrc}`}
          alt={choice.name}
        />
        <h3 className="choice-card-header">{choice.name}</h3>
        <p className="choice-card-quantity">
          {calculateQuantity() !== 1
            ? `${calculateQuantity()} tasks`
            : `${calculateQuantity()} task`}
        </p>
      </div>
    </Link>
  );
}
