import '../styles/globals.css'

import { storyblokInit, apiPlugin } from "@storyblok/react";
import { AppWrapper } from '../context/state';
import { useEffect } from 'react';
 
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin]
})

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
    (await import('tw-elements')).default;
      };
      use();
  }, []);
  return <AppWrapper>
    <Component {...pageProps} />
  </AppWrapper>
}

export default MyApp
