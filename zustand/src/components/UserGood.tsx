import { useState } from 'react';
import { useUserStore } from '../store/userStore002';
import { useShallow } from 'zustand/shallow';

/**
 * Good practice
 * - zustand에서 제공하는 useShallow 훅을 활용하여 필요한 상태값 한번에 가져오기
 *
 */

const UserProfile = () => {
  const [name, age, setUserInfo] = useUserStore(
    useShallow((state) => [state.userInfo?.name, state.userInfo?.age, state.setUserInfo])
  );

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

const UserGood = () => {
  const setUserInfo = useUserStore((state) => state.setUserInfo);
  setUserInfo({ id: '2240047', name: '권정훈', age: '30', email: 'righthun.kwon@gmail.com' });
  return (
    <>
      <h3>Good Practice 002</h3>
      <UserProfile />
      <UserEmail />
    </>
  );
};

export default UserGood;
