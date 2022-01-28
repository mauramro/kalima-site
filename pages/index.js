import Head from "next/head";
import AboutUs from "../components/AboutUs";
import Artistas from "../components/Artistas";
import Background from "../components/Background";
import Banner from "../components/Banner";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Background />
      <Artistas />
      <Testimonials />
      <AboutUs />
    </div>
  );
}
