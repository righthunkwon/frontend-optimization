import { useScoreStore } from '../store/goodScoreStore';

/**
 * Good practice
 * - 컴포넌트에서 스토어 훅을 호출할 때 콜백을 통해 필요한 상태나 객체만을 가져오기
 *
 * const 상태 = use상태Store(state => state.상태)
 * const 액션 = use이름Store(state => state.액션)
 *
 */

const ScoreA = () => {
  const scoreA = useScoreStore((state) => state.scoreA); // good practice
  const setScoreA = useScoreStore((state) => state.setScoreA); // good practice

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
  const scoreB = useScoreStore((state) => state.scoreB); // good practice
  const setScoreB = useScoreStore((state) => state.setScoreB); // good practice

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

const GoodScore = () => {
  return (
    <>
      <div>
        <h3>Good Practice 001</h3>
        <ScoreA />
        <ScoreB />
      </div>
    </>
  );
};

export default GoodScore;
