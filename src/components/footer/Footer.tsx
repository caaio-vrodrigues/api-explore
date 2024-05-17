import { SocialList } from "../menu/SocialList";

export const Footer = () => {
  return(
    <footer className={`flex flex-col items-center footerHome bg-blue-500 mt-auto pb-8 p-4`}>
      <div className={`flex w-[100%]`}>
        <h2 className={`text-white mr-auto`}>APIExplore by Caio V. Rodrigues</h2>
        <div className={`ml-auto`}>
          <SocialList footer={true}/>
        </div>
      </div>
      <h1 className={`semi-bold text-[20px]`}>Developed by Caio V. Rodrigues</h1>
      <h2 className={`semi-bold`}>Front-End Developer</h2>
    </footer>
  );
};