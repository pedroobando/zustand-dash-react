import { StateCreator } from 'zustand';

export interface PersonSlice {
  firstName: string;
  LastName: string;

  setFirstName: (firstName: string) => void;
  setLastName: (LastName: string) => void;
}

export const createPersonSlice: StateCreator<PersonSlice> = (set) => ({
  firstName: '',
  LastName: '',

  setFirstName: (firstName: string) => set({ firstName }),
  setLastName: (LastName: string) => set({ LastName }),
});
