import Head from "next/head";
import Artistas from "../components/Artistas";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-900 px-5">
        <Banner />
        <Artistas />
        <Testimonials />
      </main>
    </div>
  );
}
