import DefaultLayout from "../layouts/default";
import "../styles/globals.css";
import { AppPropsWithLayout } from "../types/app";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);
  return getLayout(<Component {...pageProps} />);
}
