import { IconType } from "react-icons/lib/esm/iconBase";
import { CategoryType } from "./CategoriesDetailed";

type Props = {
  title: string;
  description: string;
  Icon: IconType;
  selectedCategory: CategoryType;
};

export default function Category({
  title,
  description,
  Icon,
  selectedCategory,
}: Props) {
  return (
    <div
      className={`p-8 border w-[80%] cursor-pointer ${
        selectedCategory === title ? "bg-yellow" : ""
      }`}
    >
      <div
        className={`p-3 w-[3rem] flex items-center justify-center rounded-md mb-4 ${
          selectedCategory === title ? "bg-[#fff]" : "bg-light_yellow"
        }`}
      >
        <Icon size={"1.2rem"} />
      </div>
      <h4 className="font-bold text-3xl text-black mb-1">{title}</h4>
      <p className="text-medium_grey">{description}</p>
    </div>
  );
}
