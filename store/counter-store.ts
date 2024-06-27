import {create} from 'zustand'

interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
}

interface count {
    nested: {
        count: number;
    }
   
    inc: () => void;
    dec: () => void;
}


export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({count: state.count + 1})),
  decrement: () => set((state) => ({count: state.count -1}))
  }));


  export const useCountStore = create<count>((set) => ({
    nested: { count: 0 },
    inc: () =>
      set((state) => ({
        nested: { ...state.nested, count: state.nested.count + 1 },
      })),

    dec: () => set((state) => ({
        nested: {...state.nested, count: state.nested.count -1}
    }))
  }))
  