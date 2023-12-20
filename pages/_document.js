import Document, { Html, Head, Main, NextScript } from "next/document";
import { siteurl } from "../utils/static";

class MyDocument extends Document { 
  render() { 
    return (
      <Html lang="en-US">
        <Head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <link rel="icon" href={`/favicon.ico`} type="image/ico" />  
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

          <script dangerouslySetInnerHTML={{
            __html: ``
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
