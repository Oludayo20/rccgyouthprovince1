import "@/styles/globals.css";
import DefaultLayout from "../layouts/default";
import { AppPropsWithLayout } from "../types/app";

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ?? ((page) => <DefaultLayout>{page}</DefaultLayout>);
  return getLayout(<Component {...pageProps} />);
}
