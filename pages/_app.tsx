import BaseLayout from "@/layouts/base-layout";
import "@unocss/reset/tailwind.css";
import { DefaultSeo } from "next-seo";
import { type AppProps } from "next/app";
import { DM_Mono, DM_Serif_Display, Inter, Wix_Madefor_Text } from "next/font/google";
// import "uno.css";
import "../code-styles.css";
import "../globals.css";

const appfont = Inter({
  subsets: ["latin"],
  weight: "400",
});

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <DefaultSeo
        title="Regis N (regisrex)"
        description="Software development"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://www.regisrex.me/",
          siteName: "Regis NDIZIHIWE - Personal site and blog",
          images: [
            {
              url: "/og-img.png",
              width: 800,
              height: 600,
              alt: "www.regisrex.me",
              type: "image/jpeg",
            },
          ],
        }}
        twitter={{
          handle: "@regisrex",
          site: "www.regisndizihiwe.me",
          cardType: "image/png",
        }}
      />
      <div>
        <div className={appfont.className}>
          <BaseLayout>
            <Component {...pageProps} />
          </BaseLayout>
        </div>
      </div>
    </>
  );
};

export default MyApp;
