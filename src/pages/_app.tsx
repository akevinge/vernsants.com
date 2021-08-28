import { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import "swiper/swiper-bundle.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Vern&apos;s Ant Shop</title>
        <meta
          name="description"
          content="Shop Vern's Unique Collection of Ants. Check out /shop"
        />
        <meta
          name="keywords"
          content="Ant,Colonies,Colony,Ants,Myrmecocystus,Pogonomyrmex,Desert,Vern,Shop,Cheap,Price,Workers,Worker,Queen"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
