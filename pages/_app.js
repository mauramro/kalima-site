import "tailwindcss/tailwind.css";
import Layout from "../components/UI/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;