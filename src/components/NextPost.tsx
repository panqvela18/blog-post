import Image, { StaticImageData } from "next/image";

interface Props {
  image: StaticImageData;
  author: string;
  title: string;
  text: string;
  postedOn: string;
}

export default function NextPost({
  image,
  author,
  title,
  text,
  postedOn,
}: Props) {
  return (
    <div className="w-[30%]">
      <Image
        src={image.src}
        alt={title}
        width={405}
        height={318}
        className="mb-8"
      />
      <p className="font-medium text-dark_grey text-sm mb-4">
        By <span className="text-purle ">{author}</span> | {postedOn}
      </p>
      <h3 className="text-black font-bold text-3xl mb-4">{title}</h3>
      <p className="text-dark_grey">{text}</p>
    </div>
  );
}
