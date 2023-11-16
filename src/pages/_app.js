import '@/styles/globals.css'
import {useRouter} from "next/router";
import React, {useEffect, useState} from "react";
import Head from 'next/head';
import {wrapper} from "@/store";
import {ThemeProvider} from "@mui/material";
import { theme } from '@/styles/theme';



function MyApp({ Component, pageProps }) {
  const router = useRouter();

  const [showChild, setShowChild] = useState(false);

  // useEffect(() => {
  //   const routeChangeStartHandler = () => {
  //   };
  //
  //   const routeChangeEndHandler = () => {
  //
  //   };
  //   router.events.on('routeChangeStart', routeChangeStartHandler);
  //   router.events.on('routeChangeComplete', routeChangeEndHandler);
  //   router.events.on('routeChangeError', routeChangeEndHandler);
  //
  //   return () => {
  //     router.events.off('routeChangeStart', routeChangeStartHandler);
  //     router.events.off('routeChangeComplete', routeChangeEndHandler);
  //     router.events.off('routeChangeError', routeChangeEndHandler);
  //   };
  // }, []);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  const getLayout = Component.getLayout ?? ((page) => page);
  return (
      <>
          <Head>
              <title>HonLays</title>
          </Head>
          <ThemeProvider theme={theme}>
              {getLayout(<Component {...pageProps} />)}
          </ThemeProvider>
      </>
  );
}

// export default MyApp;
export default wrapper.withRedux(MyApp);

