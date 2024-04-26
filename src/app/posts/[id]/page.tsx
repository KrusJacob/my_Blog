import SinglePostPage from "@/pages/SinglePostPage";
import { postService } from "@/services/postService";
import { IPost } from "@/types/post";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const post: IPost = await postService.getPostByID(id);
  return {
    title: `Posts | ${post.title} `,
  };
}

const page = async ({ params }: Props) => {
  return (
    <>
      <SinglePostPage id={params.id} />
    </>
  );
};

export default page;
