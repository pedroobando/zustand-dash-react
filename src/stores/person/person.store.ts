import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { customSessionStorage } from '../storages/session.storage';
import { firebaseStorage } from '../storages/firebase.storage';

interface PersonState {
  firstName: string;
  lastName: string;
}

interface Actions {
  setFirstName: (value: string) => void;
  setLastName: (value: string) => void;
}

//* Tambien se puede hacer asi.
// type PersonStore = PersonState & Actions;

//* Esto puede ir adentro solo que Fernando Herrera lo separo para verlo mejor.
//* Y si que se entiende mejor.
const storeApiPerson: StateCreator<PersonState & Actions, [['zustand/devtools', never]]> = (
  set
) => ({
  firstName: '',
  lastName: '',

  setFirstName: (value: string) => set((state) => ({ firstName: value }), false, 'setFirstName'),
  setLastName: (value: string) => set((state) => ({ lastName: value }), false, 'setLastName'),
});

export const usePersonStore = create<PersonState & Actions>()(
  devtools(
    persist(storeApiPerson, {
      name: 'person-storage',
      //* Esto almacena en el session Storage
      // storage: customSessionStorage,
      //* Esto almacena en  una base datos de firebase
      storage: firebaseStorage,
    })
  )
);
