import { StaticImageData } from "next/image";

type Props = {
  description: string;
  image: StaticImageData;
  comentAuthor: string;
  location: string;
};

export default function SwiperComents({
  description,
  image,
  comentAuthor,
  location,
}: Props) {
  return (
    <div className="flex flex-col">
      <p className="text-black font-bold mb-24 text-2xl">{description}</p>
      <div className="flex items-center mb-5">
        <img className="w-[48px] h-[48px] mr-4" src={image.src} alt="asdasd" />
        <div className="flex flex-col">
          <span className="text-black text-2xl font-bold">{comentAuthor}</span>
          <span className="text-medium_grey">{location}, USA</span>
        </div>
      </div>
    </div>
  );
}
