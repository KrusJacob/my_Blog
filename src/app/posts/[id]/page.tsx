import SinglePostPage from "@/_pages/SinglePostPage";
import { jsonApiInstance } from "@/shared/api/api-instance";
import { IPost } from "@/types/post";
import { Metadata } from "next";

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const post = await jsonApiInstance<IPost>(`/posts/${id}`);
  return {
    title: `Posts | ${post.title} `,
  };
}

const page = async ({ params }: Props) => {
  return <SinglePostPage id={params.id} />;
};

export default page;
