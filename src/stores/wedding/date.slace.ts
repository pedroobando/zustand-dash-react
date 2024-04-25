import { StateCreator } from 'zustand';

export interface DateSlice {
  eventDate: Date;

  eventYYMMDD: () => string;
  eventHHMM: () => string;

  setEventDate: (partialDate: string) => void;
  setEventTime: (partialTime: string) => void;
}

export const createDateSlice: StateCreator<DateSlice> = (set, get) => ({
  eventDate: new Date(),

  eventYYMMDD: () => {
    return get().eventDate.toISOString().split('T')[0].padStart(2, '0');
  },
  eventHHMM: () => {
    const hours = get().eventDate.getHours().toString().padStart(2, '0');
    const minuts = get().eventDate.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minuts}`;
  },

  setEventDate: (partialDate: string) =>
    set((state) => {
      const date = new Date(partialDate);

      const year = date.getFullYear();
      const months = date.getMonth();
      const day = date.getDate() + 1;

      const newDate = new Date(state.eventDate);
      newDate.setFullYear(year, months, day);

      return { eventDate: newDate };
    }),

  setEventTime: (partialTime: string) =>
    set((state) => {
      const hours = parseInt(partialTime.split(':')[0]);
      const minutes = parseInt(partialTime.split(':')[1]);

      const newDate = new Date(state.eventDate);
      newDate.setHours(hours, minutes);

      // console.log(partialTime);
      return { eventDate: newDate };
    }),
});
