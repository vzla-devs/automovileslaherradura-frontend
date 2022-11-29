import React from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { getStoryblokApi } from "@storyblok/react"

const Cars = ({ data }) => {
  return <Layout>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-8 gap-4 w-full">
    {
        data?.map(({ uuid, content, }) => (
            <Card
            key={uuid}
            brand={content.brand}
            model={content.model}
            price={Number(content.price)}
            year={content.year}
            image={content.images[0]?.filename}
        />
        ))
    }
    </div>

  </Layout>;
};

export async function getStaticProps() {
  let storyblokParameters = {
    version: "published", // or 'draft',
    content_type: "vehicle"
  };
 
  const storyblokApi = getStoryblokApi();
  
  let { data } = await storyblokApi.get('cdn/stories', storyblokParameters);
 
  return {
    props: {
      data: data?.stories || []
    },
    revalidate: 600, // revalidate every 10 minutes
  };
}

export default Cars;
