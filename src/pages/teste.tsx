import { type NextPage } from "next";
import Head from "next/head";
import Button from "~/components/Button";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
         <Button/>
      </main>
    </>
  );
};

export default Home;

