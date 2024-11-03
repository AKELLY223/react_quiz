/* eslint-disable react/prop-types */
export default function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
}) {
  return (
    <header className="progress">
      <progress value={index + Number(answer !== null)} max={numQuestions} />

      <p>
        Question{" "}
        <strong>
          {" "}
          {index + 1} / {numQuestions}{" "}
        </strong>
      </p>
      <p>
        <strong> {points} </strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
