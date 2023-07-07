import { PostType, data } from "@component/data/postsData";
import Image from "next/image";
import blogPhoto from "../../../images/blogPhoto.png";
import NextPost from "@component/components/NextPost";
import JoinNow from "@component/components/JoinNow";

interface PageProps {
  params: {
    postId: string;
  };
}
export default function page({ params }: PageProps) {
  const postInfo: PostType = data.filter(
    (post) => post.id === parseInt(params.postId)
  )[0];
  return (
    <section>
      <div className="w-full flex justify-center">
        <div className="w-1/2 mt-32 mb-14">
          <div className="flex items-center mb-6">
            <div className="mr-4">
              <Image
                src={postInfo.authorImg!}
                alt={postInfo.author!}
                width={48}
                height={48}
              />
            </div>
            <div>
              <h2 className="font-bold text-purle text-3xl">
                {postInfo.author}
              </h2>
              <p className="text-medium_grey">Posted On {postInfo.postedOn}/</p>
            </div>
          </div>
          <p className="text-black text-5xl font-bold mb-8">{postInfo.title}</p>
          <p className="font-bold text-black text-2xl">{postInfo.category}</p>
        </div>
      </div>
      <div className="flex justify-center mb-16">
        <Image src={blogPhoto} alt="blogPhoto" />
      </div>
      <div className="mb-32 flex justify-center">
        <div className="w-2/3">
          <h3 className="text-black font-bold text-4xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </h3>
          <p className="text-medium_grey mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </p>
          <h3 className="text-black font-bold text-4xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </h3>
          <p className="text-medium_grey mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </p>
          <p className="text-medium_grey mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </p>
          <ul className="font-bold text-black text-2xl list-disc mb-6 ml-6">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Non blandit massa enim nec scelerisque</li>
            <li>Neque egestas congue quisque egestas</li>
          </ul>
          <p className="text-medium_grey mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </p>
          <h3 className="text-black font-bold text-4xl mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod.
          </h3>
          <p className="text-medium_grey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Non
            blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
            At risus viverra adipiscing at in tellus. Sociis natoque penatibus
            et magnis dis parturient montes. Ridiculus mus mauris vitae
            ultricies leo. Neque egestas congue quisque egestas diam. Risus in
            hendrerit gravida rutrum quisque non.
          </p>
        </div>
      </div>
      <div className="px-20">
        <h2 className="font-bold text-4xl mb-16">What to read next</h2>
        <div className="w-full justify-between flex  pb-16 border-b-2">
          {data.slice(0, 3).map((nextPost) => {
            return (
              <NextPost
                title={nextPost.title}
                text={nextPost.text}
                postedOn={nextPost.postedOn!}
                author={nextPost.author!}
                image={nextPost.image}
              />
            );
          })}
        </div>
      </div>
      <JoinNow />
    </section>
  );
}
