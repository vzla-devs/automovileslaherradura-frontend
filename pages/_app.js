import '../styles/globals.css'

import { storyblokInit, apiPlugin } from "@storyblok/react";
 
storyblokInit({
  accessToken: process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN,
  use: [apiPlugin]
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
