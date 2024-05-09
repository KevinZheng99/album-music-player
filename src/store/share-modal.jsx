import { createContext } from "react";

export const ShareModalContext = createContext({
  isShowing: false,
  shareButton: () => {},
});
