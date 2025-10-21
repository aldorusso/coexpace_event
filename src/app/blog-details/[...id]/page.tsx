import BlogDetailsClient from "./BlogDetailsClient";

export const metadata = {
  title: "Blog Details Evente - Conference and Event React Next js Template",
};

type Props = {
  params: Promise<{ id: string[] }>;
};

export default async function Page({ params }: Props) {

  const { id } = await params;
  const blogId = id[0];

  return (
    <>
      <BlogDetailsClient blogId={blogId} />
    </>
  )
}