import { useScoreStore } from '../store/badScoreStore';

/**
 * Bad practice
 * - 컴포넌트에서 콜백 없이 스토어 훅을 바로 호출하기
 *
 * 컴포넌트에서 콜백 없이 스토어 훅을 바로 호출할 경우 개별 상태나 액션이 아닌
 * 스토어 객체 전체를 얻게 되므로 사용하지 않는 상태가 변경되어도
 * 해당 스토어 훅을 호출한 컴포넌트가 다시 렌더링되기 때문에 권장하지 않음
 *
 */

const ScoreA = () => {
  const { scoreA, setScoreA } = useScoreStore(); // bad practice
  const handleBtnClick = () => {
    setScoreA(scoreA + 1);
  };

  return (
    <>
      <div>
        <span>A : {scoreA} </span>
        <button onClick={handleBtnClick}>+1</button>
      </div>
    </>
  );
};

const ScoreB = () => {
  const { scoreB, setScoreB } = useScoreStore(); // bad practice
  const handleBtnClick = () => {
    setScoreB(scoreB + 1);
  };

  return (
    <>
      <div>
        <span>B : {scoreB} </span>
        <button onClick={handleBtnClick}>+1</button>
      </div>
    </>
  );
};

const BadScore = () => {
  return (
    <>
      <div>
        <h3>Bad Practice 001</h3>
        <ScoreA />
        <ScoreB />
      </div>
    </>
  );
};

export default BadScore;
