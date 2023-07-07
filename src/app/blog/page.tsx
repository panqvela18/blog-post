"use client";

import { useState } from "react";
import Button from "@component/components/Button";
import ManInOffice from "../../images/man-leptop.png";
import Image from "next/image";
import { PostType, data } from "../../data/postsData";
import Post from "@component/components/Post";
import ReactPaginate from "react-paginate";
import JoinNow from "@component/components/JoinNow";

function page() {
  const [pageNumber, setPageNumber] = useState<number>(0);

  const postsPerPage = 5;
  const postsVisited = pageNumber * postsPerPage;

  const pageCount = Math.ceil(data.length / postsPerPage);

  const displayPosts = data
    .slice(postsVisited, postsVisited + postsPerPage)
    .map((post) => {
      return (
        <Post
          title={post.title}
          text={post.text}
          image={post.image}
          id={post.id}
          category={post.category}
          key={post.id}
        />
      );
    });

  return (
    <>
      <section>
        <div className=" p-20 bg-lavender flex items-start justify-between mb-14">
          <div className="w-2/5">
            <h5 className="text-black font-medium mb-5">FEATURED POST</h5>
            <h3 className="font-bold text-black text-4xl mb-4">
              Step-by-step guide to choosing great font pairs
            </h3>
            <p className="font-medium text-dark_grey text-sm mb-4">
              By <span className="text-purlpe"> John Doe </span> l May 23, 2022
            </p>
            <p className="text-medium_grey mb-8">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
            <Button text="Read More >" />
          </div>
          <div>
            <Image src={ManInOffice} alt={"test"} />
          </div>
        </div>
      </section>
      <section className="px-20">
        <div className="w-full border-b-2 border-[#6D6E76] pb-8 ">
          <h1 className=" font-bold text-black text-5xl">All posts</h1>
        </div>
        <div>
          {displayPosts}
          <div className=" mt-16">
            <ReactPaginate
              previousLabel="< Prev"
              nextLabel="Next >"
              pageCount={pageCount}
              onPageChange={({ selected }) => setPageNumber(selected)}
              containerClassName=" flex w-[full] justify-center items-center"
              previousLinkClassName=" text-black font-bold text-2xl mr-4"
              nextLinkClassName=" text-black font-bold text-2xl ml-4"
              disabledLinkClassName=" text-medium_grey text-xl"
              pageLinkClassName="hidden"
            />
          </div>
        </div>
        <JoinNow />
      </section>
    </>
  );
}

export default page;
