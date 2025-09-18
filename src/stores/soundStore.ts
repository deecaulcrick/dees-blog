import { create } from "zustand";

type SoundStore = {
    soundOn: boolean;
    toggleSound: () => void;
    playClick: () => void;
};

export const useSoundStore = create<SoundStore>((set, get) => ({
    soundOn: true,
    toggleSound: () => set((state) => ({ soundOn: !state.soundOn })),
    playClick: () => {
        if (get().soundOn) {
            const audio = new Audio("/sounds/click.wav");
            audio.play();
        }
    },
}));
