import ScoreGood from './components/ScoreGood';
import ScoreBad from './components/ScoreBad';
import UserBad from './components/UserBad';
import UserGood from './components/UserGood';

const App = () => {
  return (
    <>
      <div>
        <hr />
        <ScoreBad />
        <ScoreGood />
        <div>&nbsp;</div>
        <hr />
        <UserBad />
        <UserGood />
        <div>&nbsp;</div>
        <hr />
      </div>
    </>
  );
};

export default App;
