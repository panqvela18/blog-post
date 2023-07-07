"use client";

import Button from "@component/components/Button";
import home from "../images/home.png";
import Image from "next/image";
import Link from "next/link";
import PostMinimalistic from "@component/components/PostMinimalistic";
import CategoriesDetailed from "@component/components/CategoriesDetailed";
import group from "../images/group.png";
import Author from "@component/components/Author";
import gela from "../images/gela.png";
import gela2 from "../images/gela2.png";
import gela3 from "../images/gela3.png";
import gela4 from "../images/gela4.png";
import feature from "../images/Featured in.png";
import logoWrapper from "../images/Logo Wrapper.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";
import SwiperType from "swiper";
import SwiperComents from "@component/components/SwiperComents";
import profPic from "../images/Profile.svg";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import JoinNow from "@component/components/JoinNow";

export default function Home() {
  const swiperRef = useRef<SwiperType>();

  return (
    <main>
      <section className="bg-[url('../images/man.png')] bg-no-repeat bg-cover h-[720px] w-full pt-32 pl-20 text-[#fff] bg-blend-multiply bg-[grey]">
        <p className="text-base mb-6">
          Posted on <span className="font-bold">Startup</span>
        </p>
        <p
          style={{
            textShadow:
              "-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000",
          }}
          className="font-bold text-6xl w-1/2 mb-6"
        >
          Step-by-step guide to choosing great font pairs
        </p>
        <p className="mb-4">
          By<span className="text-yellow"> James West</span> | May 23, 2022
        </p>
        <p className="w-[40%] mb-12">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>
        <Button text="Read More >" />
      </section>
      <section className="px-20 py-32 flex items-baseline justify-between mb-32 ">
        <div className="w-[500px]">
          <h3 className="mb-8 font-bold text-4xl">Featured Post</h3>
          <Image
            className="mb-8"
            src={home}
            width={500}
            height={770}
            alt="home"
          />
          <p className="font-500 text-dark_grey mb-4">
            By <span className="text-purle">John Doe</span> l May 23, 2022
          </p>
          <h4 className="mb-4 font-bold text-3xl text-black w-[500px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </h4>
          <p className="mb-8 text-medium_grey w-[500px]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <Button text="Read More >" />
        </div>
        <div className="w-[45%]">
          <div className="flex items-center justify-between ">
            <h3 className="text-black font-bold text-4xl mb-8">All Posts</h3>
            <Link className="text-purle" href={"/blog"}>
              View All
            </Link>
          </div>
          <PostMinimalistic
            title="8 Figma design systems that you can download for free today."
            author="John Doe"
            date="Aug 23, 2021 "
          />
          <PostMinimalistic
            title="8 Figma design systems that you can download for free today."
            author="John Doe"
            date="Aug 23, 2021 "
          />
          <PostMinimalistic
            title="8 Figma design systems that you can download for free today."
            author="John Doe"
            date="Aug 23, 2021 "
          />
          <PostMinimalistic
            title="8 Figma design systems that you can download for free today."
            author="John Doe"
            date="Aug 23, 2021 "
          />
        </div>
      </section>
      <section className="px-20 mb-32">
        <div className="mb-32">
          <div className="flex">
            <div className="h-6 w-1/5 bg-[#fff]"></div>
            <div className="h-6 w-3/5 bg-yellow"></div>
            <div className="h-6 w-1/5 bg-purle"></div>
          </div>
          <div className="bg-lavender py-24 px-20 flex items-baseline justify-between">
            <div className="w-[40%]">
              <h5 className="text-black font-semibold mb-6">ABOUT US</h5>
              <h3 className="text-black font-bold text-4xl mb-4">
                We are a community of content writers who share their learnings
              </h3>
              <p className="text-medium_grey mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link href={"/about"} className="text-purle font-bold text-lg">
                {"Read More >"}
              </Link>
            </div>
            <div className="w-[40%]">
              <h5 className="text-black font-semibold mb-6">Our mision</h5>
              <h3 className="text-black font-bold text-3xl mb-4">
                Creating valuable content for creatives all around the world
              </h3>
              <p className="text-medium_grey mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-black font-bold text-4xl text-center mb-12">
            Choose A Catagory
          </h2>
          <CategoriesDetailed />
        </div>
      </section>
      <section className="px-20 mb-24">
        <div className="flex items-end relative mb-32 ">
          <Image
            src={group}
            width={0}
            alt="group"
            height={0}
            sizes="100vw"
            style={{ width: "70%", height: "auto" }}
          />
          <div className="p-20 bg-[#fff] w-1/2 ml-[50%] h-2/3 absolute ">
            <h4 className="font-semibold mb-6">Why we started</h4>
            <h3 className="text-black font-bold text-4xl mb-4 ">
              It started out as a simple idea and evolved into our passion
            </h3>
            <p className="text-medium_grey mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip.
            </p>
            <Button text="Discover our story >" />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-3xl text-black text-center mb-12">
            List of Authors
          </h3>
          <div className="flex items-center justify-between mb-24">
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
          </div>
          <div className="flex items-center justify-between">
            <Image src={feature} alt="feature" />
            <Image src={logoWrapper} alt="logoWrapper" />
          </div>
        </div>
      </section>
      <section className="px-20">
        <div className="py-20 px-28 bg-light_yellow flex items-start justify-between ">
          <div className="w-[350px]">
            <p className="text-black font-semibold mb-3">TESTIMONIALS</p>
            <h4 className="font-bold text-4xl mb-4">
              What people say about our blog
            </h4>
            <p className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="w-[1px] h-[200px] border border-[#6D6E76]"></div>
          <div className="w-2/5">
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[]}
              loop={true}
              autoplay={{ delay: 1000 }}
              spaceBetween={50}
              slidesPerView={1}
            >
              <SwiperSlide>
                <SwiperComents
                  image={profPic}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  location="New york"
                  comentAuthor="Jonathan Vallem"
                />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperComents
                  image={gela}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  location="New york"
                  comentAuthor="Jonathan Vallem"
                />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperComents
                  image={gela2}
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                  location="New york"
                  comentAuthor="Jonathan Vallem"
                />
              </SwiperSlide>
            </Swiper>
            <div className="flex items-center justify-between">
              <button
                className="p-4 bg-yellow rounded-full"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <GrFormPreviousLink />
              </button>
              <button
                className="p-4 bg-yellow rounded-full"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <GrFormNextLink />
              </button>
            </div>
          </div>
        </div>
        <JoinNow />
      </section>
    </main>
  );
}
