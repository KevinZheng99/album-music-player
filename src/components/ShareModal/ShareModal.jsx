import { useContext, useRef } from "react";
import Close from "../Icons/Close";
import FacebookColored from "../Icons/FacebookColored";
import TwitterColored from "../Icons/TwitterColored";
import InstagramColored from "../Icons/InstagramColored";
import WhatsAppColored from "../Icons/WhatsAppColored";
import TelegramColored from "../Icons/TelegramColored";
import Link from "../Icons/Link";
import { ShareModalContext } from "../../store/share-modal";

function ShareModal() {
  const copyLinkRef = useRef();
  const socialLinkStyles =
    "rounded-full p-2 border-2  cursor-pointer hover:bg-neutral-300 transition-all";
  const { isShowing, shareButton } = useContext(ShareModalContext);

  const copyLink = () => {
    navigator.clipboard.writeText(copyLinkRef.current.value);
  };

  return (
    <>
      <div
        className={`fixed w-screen h-screen bg-black transition-all delay-75 ${
          isShowing ? "opacity-50" : "opacity-0"
        } ${isShowing ? "z-20" : "-z-10"}`}
      />
      <div
        className={`fixed p-10 rounded-xl w-[512px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-200 z-20 transition-all ${
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
        <div className="mt-6 text-lg">Or copy link</div>
        <div className="flex items-center gap-4 mt-6 w-full border rounded px-4 py-2 border-neutral-400">
          <Link />
          <input
            ref={copyLinkRef}
            type="text"
            className="w-full bg-transparent text-lg outline-none"
            value="https://codepen.io/coding_dev_"
          />
          <button
            className="bg-black text-slate-200 px-6 py-2 rounded-lg"
            onClick={copyLink}
          >
            Copy
          </button>
        </div>
      </div>
    </>
  );
}

export default ShareModal;
