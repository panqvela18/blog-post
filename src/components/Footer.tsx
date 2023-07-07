import Link from "next/link";
import logo from "../images/logo.png";
import Image from "next/image";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="py-14 px-20 bg-black w-screen ">
      <div className=" bg-black flex items-center justify-between mb-14">
        <Image src={logo} width={140} height={28} alt="logo" />
        <nav>
          <Link className="text-[#fff]" href={"/"}>
            Home
          </Link>
          <Link className="text-[#fff] ml-6" href={"/blog"}>
            Blog
          </Link>
          <Link className="text-[#fff] ml-6 " href={"/about"}>
            About
          </Link>
          <Link className="text-[#fff] ml-6" href={"/contact"}>
            Contact
          </Link>
          <Link className="text-[#fff] ml-6" href={"/contact"}>
            Privacy Policy
          </Link>
        </nav>
      </div>
      <div className="w-full py-14 px-20 bg-dark_grey/25 flex items-baseline justify-between mb-12">
        <p className="font-bold text-[#fff] leading-10 text-4xl w-full">
          Subscribe to our news letter to get latest updates and news
        </p>
        <form className="flex item-center w-full pl-16 ">
          <input
            style={{ backgroundColor: "transparent" }}
            className="py-4 px-5 text-medium_grey outline-none border border-[#4c4c4c]"
            type="email"
            placeholder="Enter Your Email"
          />
          <button className="ml-6 h-14 w-44 bg-yellow text-black font-bold  hover:opacity-90">
            Subscribe
          </button>
        </form>
      </div>
      <div className="flex items-center justify-between">
        <div className="font-medium text-md text-[#fff]">
          <p>Finstreet 118 2561 Fintown</p>
          <p>Hello@finsweet.com 020 7993 2905</p>
        </div>
        <div className="flex items-center text-medium_grey text-xl">
          <a href="">
            <BiLogoFacebookCircle className="mr-6" />
          </a>
          <a href="">
            <AiOutlineTwitter className="mr-6" />
          </a>
          <a href="">
            <AiOutlineInstagram className="mr-6" />
          </a>
          <a href="">
            <AiFillLinkedin className="" />
          </a>
        </div>
      </div>
    </footer>
  );
}
