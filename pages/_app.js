import '../styles/globals.css'

import { storyblokInit, apiPlugin } from "@storyblok/react";
import { AppWrapper } from '../context/state';
 
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin]
})

function MyApp({ Component, pageProps }) {
  return <AppWrapper>
    <Component {...pageProps} />
  </AppWrapper>
}

export default MyApp
