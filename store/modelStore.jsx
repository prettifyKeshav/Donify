import { create } from 'zustand';

const useModalStore = create((set) => {
    const closeAll = () =>
        set({
            isHamOpen: false,
        });

    return {
        isHamOpen: false,

        openHam: () => {
            closeAll();
            set({ isHamOpen: true });
        },
        closeHam: () => set({ isHamOpen: false }),

        closeAll,
    };
});

export default useModalStore