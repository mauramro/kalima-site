import "tailwindcss/tailwind.css";
import Layout from "../components/UI/Layout";
import "../styles/testimonials.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
