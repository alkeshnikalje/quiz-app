export default function NextQue({ answer, dispatch, index, numOfQuestions }) {
  if (answer === null) return;
  if (index < numOfQuestions - 1) {
    return (
      <button className="btn btn-ui" onClick={() => dispatch({ type: "next" })}>
        Next
      </button>
    );
  }
  return (
    <button className="btn btn-ui" onClick={() => dispatch({ type: "finish" })}>
      finish
    </button>
  );
}
