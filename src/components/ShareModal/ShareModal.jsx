import { useContext } from "react";
import Close from "../Icons/Close";
import { ShareModalContext } from "../../store/share-modal";

function ShareModal() {
  const { isShowing } = useContext(ShareModalContext);

  return (
    <div
      className={`fixed p-10 rounded-xl w-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 z-20 transition-all ${
        isShowing ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-2xl font-medium">Share</span>
        <span className="rounded-full cursor-pointer hover:bg-neutral-300 p-2 transition-all">
          <Close />
        </span>
      </div>
    </div>
  );
}

export default ShareModal;
