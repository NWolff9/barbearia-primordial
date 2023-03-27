import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b from-[#242424] to-[#242424] h-screen">
        <div className="flex text-white font-bold text-3xl">
          <h1>LOGIN</h1>
        </div>
      </main>
    </>
  );
};

export default Home;