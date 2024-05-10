import { socialIcons } from "@/utils/social-icons";
import { SocialIcon } from "./SocialIcon";

export const SocialList = () => {
  return(
    <ul className={`flex border border-blue-400 rounded-md bg-white text-blue-400 p-3 mt-5`}>
      {socialIcons.map(icon => 
        <li key={icon.id} className={`p-1 hover:bg-zinc-300 rounded-md`}>
          <SocialIcon Icon={icon.icon} link={icon.link}/>
        </li>)}
    </ul>
  );
};