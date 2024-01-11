import { ArrsLengthObject, Choice } from "../../const/const";
import { Link } from "react-router-dom";
import "./ChoiceCard.css";
import { useEffect } from "react";

interface ChoiceCardProps {
  choice: Choice;
  allArraysLength: ArrsLengthObject[];
  inputSetter: (showInput: boolean) => void;
  pathSetter: (path: string) => void;
}
export function ChoiceCard({
  choice,
  allArraysLength,
  inputSetter,
  pathSetter,
}: ChoiceCardProps) {
  useEffect(() => {
    window.addEventListener("popstate", () => {
      inputSetter(false);
      pathSetter("/");
    });
    return () => {
      window.removeEventListener("popstate", () => {});
    };
  });
  return (
    <Link
      className="choice-card"
      to={`/Tasks/${choice.name}`}
      onClick={() => {
        inputSetter(true);
      }}
    >
      <div className="choice-card-content">
        <img
          className="choice-card-img"
          src={`../../../img/${choice.imgSrc}`}
          alt={choice.name}
        />
        <h3 className="choice-card-header">{choice.name}</h3>
        <p className="choice-card-quantity">
          {allArraysLength?.map((arr: ArrsLengthObject) => {
            if (arr.name === choice.name) {
              return `${
                Number(arr.length) !== 1
                  ? `${arr.length} tasks`
                  : `${arr.length} task`
              }`;
            }
          })}{" "}
        </p>
      </div>
    </Link>
  );
}
