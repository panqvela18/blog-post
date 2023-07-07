import React from "react";
import Button from "./Button";

export default function JoinNow() {
  return (
    <div className="flex items-center justify-center flex-col my-32">
      <h3 className="text-black font-bold text-4xl mb-4 text-center w-1/3">
        Join our team to be a part of our story
      </h3>
      <p className="text-medium_grey text-center mb-8 w-[30%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <Button text="Join Now" />
    </div>
  );
}
