import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  age: string;
  email?: string;
}

interface UserStore {
  userInfo: Partial<User> | null;
  token: string;

  setUserInfo: (userInfo: Partial<User> | null) => void;
  setToken: (token: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  userInfo: null,
  token: '',
  setUserInfo: (userInfo) => set((state) => ({ userInfo: { ...state.userInfo, ...userInfo } })),
  setToken: (token) => set({ token }),
}));
