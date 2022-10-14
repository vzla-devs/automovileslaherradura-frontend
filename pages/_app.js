import '../styles/globals.css'

import { storyblokInit, apiPlugin } from "@storyblok/react";
 
storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin]
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
