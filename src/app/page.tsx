import { GetStaticProps } from "next";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <p>Welcome to my blog!</p>
    </main>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // let files = await import("../data");

  return { props: {} };
};
