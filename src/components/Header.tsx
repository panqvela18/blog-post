import Link from "next/link";
import logo from "../images/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-20 w-screen bg-black flex items-center justify-between px-20">
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
        <button className="h-14 w-44 bg-[#fff] text-black font-bold ml-8 hover:opacity-90">
          Subscribe
        </button>
      </nav>
    </header>
  );
}
