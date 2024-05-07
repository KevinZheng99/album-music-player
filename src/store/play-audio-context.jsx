import { createContext } from "react";

export const AudioContext = createContext({
  isPlaying: false,
  playButton: () => {},
});
