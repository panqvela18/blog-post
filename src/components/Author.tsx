import { StaticImageData } from "next/image";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";

type Props = {
  name: string;
  position: string;
  image: StaticImageData;
};

export default function Author({ name, position, image }: Props) {
  return (
    <div className="px-20 flex flex-col items-center py-20 bg-light_grey hover:bg-light_yellow w-1/5">
      <img className="mb-5" src={image.src} />
      <h5 className="text-black font-bold text-xs">{name}</h5>
      <p className="text-xs text-center text-medium_grey mb-5">{position}</p>
      <div className="flex items-center text-black text-xl">
        <a href="">
          <BiLogoFacebookCircle className="mr-3 " />
        </a>
        <a href="">
          <AiOutlineTwitter className="mr-3" />
        </a>
        <a href="">
          <AiOutlineInstagram className="mr-3" />
        </a>
        <a href="">
          <AiFillLinkedin className="" />
        </a>
      </div>
    </div>
  );
}
