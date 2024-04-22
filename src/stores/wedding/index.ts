// Crear Store

import { create } from 'zustand';
import { PersonSlice, createPersonSlice } from './person.slice';
import { devtools } from 'zustand/middleware';
import { GuestSlice, createGuestSlice } from './guest.slice';

type ShareState = PersonSlice & GuestSlice;
export const useWenddingBoundStore = create<ShareState>()(
  devtools((...a) => ({
    ...createPersonSlice(...a),
    ...createGuestSlice(...a),
  }))
);
