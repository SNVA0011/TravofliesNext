import Document, { Html, Head, Main, NextScript } from "next/document";
import { siteurl } from "../utils/static";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    const { pathname } = ctx;

    const lang = pathname.startsWith("/artikel") ? "nl" : pathname.startsWith("/nouvelles") ? "fr" : pathname.startsWith("/articulo") ? "es" : pathname.startsWith("/bloggen") ? "de" : pathname.startsWith("/articolo") ? "it" : pathname.startsWith("/artigo") ? "pt" : "en-US";

    return { ...initialProps, lang };
  }

  render() {
    const { lang } = this.props;
    return (
      <Html lang={lang}>
        <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href={`${siteurl}/favicon.ico`} type="image/ico" /> 


          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&family=Lemonada:wght@300;400&display=swap" rel="stylesheet" />


          <meta name="google-site-verification" content="YLhurp3K9tYgc15IC3aSl349Xos6_euWki4REHGQiiA" />
          
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-93EV30HPZR" />
          
          <script dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag() {
                dataLayer.push(arguments);
              }
              gtag("js", new Date());

              gtag("config", "G-93EV30HPZR");`
          }}></script>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
