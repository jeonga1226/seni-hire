import config from "@config/config.json";
import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

// import ConfirmModal from '@components/common/Confirm';

const Document = () => {
  // destructuring items from config object
  const { favicon } = config.site;
  return (
    <Html lang="en">
      <Head>
        {/* favicon */}
        <link rel="shortcut icon" href={favicon} />
        {/* theme meta */}
        <meta name="theme-name" content="bookworm-light-nextjs" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_MAP_API}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />
        <style>{`
          html, body {
            min-height: 100%;
            margin: 0;
            padding: 0;
          }
          #__next,main {
            min-height: 100vh;
          }
        `}</style>
      </Head>
      <body>
        <Main />
        {/*<ConfirmModal />*/}
        <div id="global-modal"></div>
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
