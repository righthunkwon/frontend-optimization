import { useScoreStore } from '../store/scoreStore';

const ScoreA = () => {
  console.log('A rendered');

  const { scoreA, setScoreA } = useScoreStore(); // bad practice
  const handleBtnClick = () => {
    setScoreA(scoreA + 1);
  };

  return (
    <>
      <div>
        <span>A : {scoreA}</span>
        <button onClick={handleBtnClick}>+1</button>
      </div>
    </>
  );
};

const ScoreB = () => {
  console.log('B rendered');

  const { scoreB, setScoreB } = useScoreStore(); // bad practice
  const handleBtnClick = () => {
    setScoreB(scoreB + 1);
  };

  return (
    <>
      <div>
        <span>B : {scoreB}</span>
        <button onClick={handleBtnClick}>+1</button>
      </div>
    </>
  );
};

const Score = () => {
  return (
    <>
      <div>
        <ScoreA />
        <ScoreB />
      </div>
    </>
  );
};

export default Score;
