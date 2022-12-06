import { createContext, useContext, useEffect, useLayoutEffect, useState } from 'react';
import { getStoryblokApi } from "@storyblok/react"

const AppContext = createContext();

export function AppWrapper({ children }) {
  const [data, setData] = useState([])

    const getStaticProps = async() => {
    let storyblokParameters = {
      version: "published", // or 'draft',
      content_type: "vehicle"
    };
   
    const storyblokApi = getStoryblokApi();
    
    let { data } = await storyblokApi.get('cdn/stories', storyblokParameters);
    setData(data?.stories)
    return {
      props: {
        data: data?.stories || []
      },
      revalidate: 600, // revalidate every 10 minutes
    };
  }

  useEffect(() => {
    getStaticProps()
  }, [])

  return (
    <AppContext.Provider value={{
        data
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}