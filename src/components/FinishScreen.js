function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points * 100) / maxPossiblePoints;

  let emoji;

  if (percentage === 100) emoji = '🥇';
  if (percentage >= 80 && percentage < 100) emoji = '🥳';
  if (percentage >= 50 && percentage < 80) emoji = '😁';
  if (percentage >= 0 && percentage < 50) emoji = '🤔';
  if (percentage === 0) emoji = '🥲';

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> of{' '}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>

      <p className="highscore">( HighScore : {highscore} Points )</p>

      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
