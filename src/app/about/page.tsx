import Image from "next/image";
import React from "react";
import frineds from "../../images/friends.png";
import hands from "../../images/hand.png";
import frineds2 from "../../images/Image.png";
import Author from "@component/components/Author";
import gela from "../../images/gela.png";
import gela2 from "../../images/gela2.png";
import gela3 from "../../images/gela3.png";
import gela4 from "../../images/gela4.png";
import gela5 from "../../images/gela5.png";
import gela6 from "../../images/gela6.png";
import gela7 from "../../images/gela7.png";
import gela8 from "../../images/gela8.png";
import JoinNow from "@component/components/JoinNow";

export default function page() {
  return (
    <>
      <section className="px-20 mb-32">
        <div className="ml-[20%] mr-[15%] p-16 flex justify-between items-end relative z-10">
          <div className="w-[55%] bg-[#fff] p-16 mb-[-120px]">
            <h1 className="text-black font-medium mb-4">About Us</h1>
            <h2 className="text-black font-bold text-4xl">
              We are a team of content writers who share their learnings
            </h2>
          </div>
          <div className="w-[40%] ">
            <p className="text-dark_grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center relative">
          <Image src={frineds} alt="friend" />
          <div className="absolute w-full left-[24.2%] bottom-0">
            <div className="flex ">
              <div className="bg-yellow py-8 pl-12 pr-8">
                <h4 className="text-black font-bold text-5xl">12+</h4>
                <span className="text-black">Blogs Published</span>
              </div>
              <div className="bg-yellow py-8 px-8">
                <h4 className="text-black font-bold text-5xl">18K+</h4>
                <span className="text-black">Views on Finsweet</span>
              </div>
              <div className="bg-yellow py-8 pr-12 pl-8">
                <h4 className="text-black font-bold text-5xl">30K+</h4>
                <span className="text-black">Total active Users</span>
              </div>
            </div>
            <div className="w-[50%] flex">
              <div className="w-[40%] bg-purle h-6"></div>
              <div className="w-[60%] bg-yellow h-6"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="bg-lavender w-[1280px] py-24 px-20 flex items-baseline justify-between">
            <div className="w-[40%]">
              <h5 className="text-black font-semibold mb-6">Our mision</h5>
              <h3 className="text-black font-bold text-4xl mb-4">
                Creating valuable content for creatives all around the world
              </h3>
              <p className="text-medium_grey mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
            </div>
            <div className="w-[40%]">
              <h5 className="text-black font-semibold mb-6">Our Vision</h5>
              <h3 className="text-black font-bold text-3xl mb-4">
                A platform that empowers individuals to improve
              </h3>
              <p className="text-medium_grey mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
                blandit massa enim nec. Scelerisque viverra mauris in aliquam
                sem. At risus viverra adipiscing at in tellus.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-20 flex justify-center mb-32">
        <div className="w-[1280px] flex justify-between items-center">
          <div className="w-[40%]">
            <h3 className="text-black font-bold text-4xl mb-4">
              Our team of creatives
            </h3>
            <h4 className="text-black font-bold text-2xl mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </h4>
            <p className="text-medium_grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
          <div className="relative">
            <Image src={hands} alt="hands" />
            <div className="absolute w-20 h-20 bg-yellow rounded-tl-[50%] top-28 left-[-30px]"></div>
          </div>
        </div>
      </section>
      <section className="px-20 flex justify-center mb-32">
        <div className="w-[1280px] flex justify-between items-center">
          <div className="relative">
            <Image src={frineds2} alt="hands" />
          </div>
          <div className="w-[40%]">
            <h3 className="text-black font-bold text-4xl mb-4">
              Why we started this Blog{" "}
            </h3>
            <h4 className="text-black font-bold text-2xl mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </h4>
            <p className="text-medium_grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
        </div>
      </section>
      <section className="px-20">
        <div>
          <h2 className="text-center text-black font-bold text-4xl mb-12">
            List of Authors
          </h2>
        </div>
        <div className="flex flex-wrap gap-20 justify-between w-full">
          <Author
            name="Floyd Miles"
            position="Content Writer @Company"
            image={gela}
          />
          <Author
            name="Dianne Russell"
            position="Content Writer @Company"
            image={gela2}
          />
          <Author
            name="Jenny Wilson"
            position="Content Writer @Company"
            image={gela3}
          />
          <Author
            name="Leslie Alexander"
            position="Content Writer @Company"
            image={gela4}
          />
          <Author
            name="Guy Hawkins"
            position="Content Writer @Company"
            image={gela5}
          />
          <Author
            name="Eleanor Pena"
            position="Content Writer @Company"
            image={gela6}
          />
          <Author
            name="Robert Fox"
            position="Content Writer @Company"
            image={gela7}
          />
          <Author
            name="Jacob Jones"
            position="Content Writer @Company"
            image={gela8}
          />
        </div>
      </section>
      <JoinNow />
    </>
  );
}
