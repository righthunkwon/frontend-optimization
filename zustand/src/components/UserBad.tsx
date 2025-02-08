import { useState } from 'react';
import { useUserStore } from '../store/userStore001';

/**
 * Bad practice
 * - 필요한 상태를 하나하나 각각 스토어 훅의 콜백을 통해 가져오기
 *
 */

const UserProfile = () => {
  const name = useUserStore((state) => state.userInfo?.name);
  const age = useUserStore((state) => state.userInfo?.age);
  const setUserInfo = useUserStore((state) => state.setUserInfo);

  const [inputAge, setInputAge] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputAge(e.target.value);
  };

  const handleBtnClick = () => {
    setUserInfo({ age: inputAge });
    setInputAge('');
  };

  return (
    <>
      <div>Name: {name}</div>
      <div>Age: {age}</div>
      Set Age: <input value={inputAge} onChange={handleInputChange}></input>
      <button onClick={handleBtnClick}>Save</button>
    </>
  );
};

const UserEmail = () => {
  const email = useUserStore((state) => state.userInfo?.email);

  return (
    <>
      <div>Email: {email}</div>
    </>
  );
};

const UserBad = () => {
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  setUserInfo({ id: '2240047', name: '권정훈', age: '30', email: 'righthun.kwon@gmail.com' });
  return (
    <>
      <h3>Bad Practice 002</h3>
      <UserProfile />
      <UserEmail />
    </>
  );
};

export default UserBad;
