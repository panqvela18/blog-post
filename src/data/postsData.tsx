import image1 from "../images/2woman.png";
import image2 from "../images/smiles.png";
import image3 from "../images/Teamwork.png";
import image4 from "../images/talk.png";
import { StaticImageData } from "next/image";
import { CategoryType } from "@component/components/CategoriesDetailed";

export type PostType = {
  id: number;
  image: StaticImageData;
  category: CategoryType;
  title: string;
  text: string;
};

export const data: PostType[] = [
  {
    id: 1,
    image: image1,
    category: "Startup",
    title: "Design tips for designers that cover everything you need",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 2,
    image: image2,
    category: "Business",
    title: "How to build rapport with your web design clients",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 3,
    image: image3,
    category: "Startup",
    title: "Logo design trends to avoid in 2022",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 4,
    image: image4,
    category: "Technology",
    title: "8 Figma design systems you can download for free today",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 5,
    image: image1,
    category: "Startup",
    title: "Design tips for designers that cover everything you need",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 6,
    image: image2,
    category: "Business",
    title: "How to build rapport with your web design clients",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 7,
    image: image3,
    category: "Startup",
    title: "Logo design trends to avoid in 2022",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 8,
    image: image4,
    category: "Technology",
    title: "8 Figma design systems you can download for free today",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 9,
    image: image1,
    category: "Startup",
    title: "Design tips for designers that cover everything you need",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 10,
    image: image2,
    category: "Business",
    title: "How to build rapport with your web design clients",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 11,
    image: image3,
    category: "Startup",
    title: "Logo design trends to avoid in 2022",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 12,
    image: image4,
    category: "Technology",
    title: "8 Figma design systems you can download for free today",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 13,
    image: image1,
    category: "Startup",
    title: "Design tips for designers that cover everything you need",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 14,
    image: image2,
    category: "Business",
    title: "How to build rapport with your web design clients",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 15,
    image: image3,
    category: "Startup",
    title: "Logo design trends to avoid in 2022",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
];
