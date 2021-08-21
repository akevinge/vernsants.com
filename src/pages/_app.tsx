import { AppProps } from "next/app";
import "../styles/globals.css";
import "swiper/swiper-bundle.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
