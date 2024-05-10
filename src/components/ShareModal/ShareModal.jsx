import { useContext } from "react";
import Close from "../Icons/Close";
import FacebookColored from "../Icons/FacebookColored";
import TwitterColored from "../Icons/TwitterColored";
import InstagramColored from "../Icons/InstagramColored";
import WhatsAppColored from "../Icons/WhatsAppColored";
import TelegramColored from "../Icons/TelegramColored";
import { ShareModalContext } from "../../store/share-modal";

function ShareModal() {
  const socialLinkStyles =
    "rounded-full p-2 border-2  cursor-pointer hover:bg-neutral-300 transition-all";
  const { isShowing, shareButton } = useContext(ShareModalContext);

  return (
    <>
      <div
        className={`fixed w-screen h-screen bg-black transition-all delay-75 ${
          isShowing ? "opacity-50" : "opacity-0"
        } ${isShowing ? "z-20" : "-z-10"}`}
      />
      <div
        className={`fixed p-10 rounded-xl w-1/4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 z-20 transition-all ${
          isShowing ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center justify-between border-b border-neutral-400 pb-6">
          <span className="text-2xl font-medium">Share</span>
          <span
            className="rounded-full cursor-pointer hover:bg-neutral-300 p-2 transition-all"
            onClick={shareButton}
          >
            <Close />
          </span>
        </div>
        <div className="mt-6 text-lg">Share this link via</div>
        <ul className="flex mt-6 justify-between items-center">
          <li className={socialLinkStyles + " border-[#1877f2]"}>
            <FacebookColored />
          </li>
          <li className={socialLinkStyles + " border-[#1DA1F2]"}>
            <TwitterColored />
          </li>
          <li className={socialLinkStyles + " border-[#C13584] "}>
            <InstagramColored />
          </li>
          <li className={socialLinkStyles + " border-[#25d366]"}>
            <WhatsAppColored />
          </li>
          <li className={socialLinkStyles + " border-[#0088cc]"}>
            <TelegramColored />
          </li>
        </ul>
      </div>
    </>
  );
}

export default ShareModal;
