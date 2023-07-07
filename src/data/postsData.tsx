import image1 from "../images/2woman.png";
import image2 from "../images/smiles.png";
import image3 from "../images/Teamwork.png";
import image4 from "../images/talk.png";
import { StaticImageData } from "next/image";
import { CategoryType } from "@component/components/CategoriesDetailed";
import gela1 from "../images/gela.png";
import gela2 from "../images/gela2.png";
import gela3 from "../images/gela3.png";
import gela4 from "../images/gela4.png";

export type PostType = {
  id: number;
  image: StaticImageData;
  category: CategoryType;
  title: string;
  text: string;
  author?: string;
  authorImg?: StaticImageData;
  postedOn?: string;
};

export const data: PostType[] = [
  {
    id: 1,
    image: image1,
    category: "Startup",
    title: "Design tips for designers that cover everything you need",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    authorImg: gela1,
    author: "Floyd Miles",
    postedOn: "27th January 2022",
  },
  {
    id: 2,
    image: image2,
    category: "Business",
    title: "How to build rapport with your web design clients",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    authorImg: gela2,
    author: "Dianne Russell",
    postedOn: "31th January 2022",
  },
  {
    id: 3,
    image: image3,
    category: "Startup",
    title: "Logo design trends to avoid in 2022",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    authorImg: gela3,
    author: "Jenny Wilson",
    postedOn: "1st December 2022",
  },
  {
    id: 4,
    image: image4,
    category: "Technology",
    title: "8 Figma design systems you can download for free today",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    authorImg: gela4,
    author: "Leslie Alexander",
    postedOn: "5st November 2022",
  },
  {
    id: 5,
    image: image1,
    category: "Startup",
    title: "Design tips for designers that cover everything you need",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    authorImg: gela1,
    author: "Leslie Alexander",
    postedOn: "6th November 2022",
  },
  {
    id: 6,
    image: image2,
    category: "Business",
    title: "How to build rapport with your web design clients",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    authorImg: gela2,
    author: "Leslie Alexander",
    postedOn: "5st November 2022",
  },
  {
    id: 7,
    image: image3,
    category: "Startup",
    title: "Logo design trends to avoid in 2022",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    authorImg: gela3,
    author: "Leslie Alexander",
    postedOn: "5st November 2022",
  },
  {
    id: 8,
    image: image4,
    category: "Technology",
    title: "8 Figma design systems you can download for free today",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    authorImg: gela4,
    author: "Leslie Alexander",
    postedOn: "5st November 2022",
  },
  {
    id: 9,
    image: image1,
    category: "Startup",
    title: "Design tips for designers that cover everything you need",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    authorImg: gela2,
    author: "Leslie Alexander",
    postedOn: "5st November 2022",
  },
  {
    id: 10,
    image: image2,
    category: "Business",
    title: "How to build rapport with your web design clients",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    authorImg: gela1,
    author: "Leslie Alexander",
    postedOn: "5st November 2022",
  },
  {
    id: 11,
    image: image3,
    category: "Startup",
    title: "Logo design trends to avoid in 2022",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    authorImg: gela2,
    author: "Leslie Alexander",
    postedOn: "5th November 2022",
  },
  {
    id: 12,
    image: image4,
    category: "Technology",
    title: "8 Figma design systems you can download for free today",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    authorImg: gela4,
    author: "Leslie Alexander",
    postedOn: "4th November 2022",
  },
  {
    id: 13,
    image: image1,
    category: "Startup",
    title: "Design tips for designers that cover everything you need",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    authorImg: gela3,
    author: "Leslie Alexander",
    postedOn: "5st November 2022",
  },
  {
    id: 14,
    image: image2,
    category: "Business",
    title: "How to build rapport with your web design clients",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    authorImg: gela2,
    author: "Leslie Alexander",
    postedOn: "5st November 2022",
  },
  {
    id: 15,
    image: image3,
    category: "Startup",
    title: "Logo design trends to avoid in 2022",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    authorImg: gela3,
    author: "Leslie Alexander",
    postedOn: "5st November 2022",
  },
];
