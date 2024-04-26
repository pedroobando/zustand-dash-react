import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { customSessionStorage } from '../storages/session.storage';
import { firebaseStorage } from '../storages/firebase.storage';
import { useWenddingBoundStore } from '../wedding';

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
      // storage: firebaseStorage,
    })
  )
);

//* Esto hace un vinculo unidireccional entre diferentes store.
//* Es decir todo lo que se actualiza en persona, se aplica a boda (nombre y apellido)
usePersonStore.subscribe((nextState /*prevState*/) => {
  const { firstName, lastName } = nextState;
  useWenddingBoundStore.getState().setFirstName(firstName);
  useWenddingBoundStore.getState().setLastName(lastName);
});
