import Discord from "../Icons/Discord";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import TikTok from "../Icons/TikTok";
import Twitter from "../Icons/Twitter";

function Socials() {
  const svgClasses = "text-slate-200";

  return (
    <div className="absolute flex flex-col items-center justify-center gap-6 top-24 right-16">
      <a href="https://www.instagram.com/ye" target="_blank" rel="noreferrer">
        <Instagram styles={svgClasses} />
      </a>
      <a href="https://twitter.com/kanyewest" target="_blank" rel="noreferrer">
        <Twitter styles={svgClasses} />
      </a>
      <a
        href="https://www.facebook.com/kanyewest"
        target="_blank"
        rel="noreferrer"
      >
        <Facebook styles={svgClasses} />
      </a>
      <a href="https://www.tiktok.com/@ye" target="_blank" rel="noreferrer">
        <TikTok styles={svgClasses} />
      </a>
      <a
        href="https://discord.com/invite/kanyewest"
        target="_blank"
        rel="noreferrer"
      >
        <Discord styles={svgClasses} />
      </a>
    </div>
  );
}

export default Socials;
