import { socialIcons } from "@/utils/social-icons";
import { SocialIcon } from "./SocialIcon";

type TSocialList = {
  footer: boolean,
};

export const SocialList = ({ footer }: TSocialList) => {
  return(
    <ul className={`${footer ? `flex` 
      : `flex border border-blue-400 rounded-md bg-white text-blue-400 p-3 
      mt-5`}`}>
      {socialIcons.map(icon => 
        <li key={icon.id} className={`${footer ? `p-1 hover:bg-zinc-500` : `p-1 
        hover:bg-zinc-300`} rounded-md`}>
          <SocialIcon Icon={icon.icon} link={icon.link}/>
        </li>)}
    </ul>
  );
};