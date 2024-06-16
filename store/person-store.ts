import { create } from 'zustand'


interface state {
    firstName : string;
    lastName  : string;

}

interface actions {
    updateFirstName : (firstName : state['firstName']) => void;
    updateLastName : (lastName : state['lastName']) => void;

}




export const usePersonStore = create<state & actions>((set) =>({
    firstName: '',
    lastName: '',
    updateFirstName: (firstName) => set((state) => ({firstName})),
    updateLastName: (lastName) => set((state) => ({lastName })) 

}))