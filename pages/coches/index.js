import React from "react";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import Link from "next/link";
import { useAppContext } from "../../context/state";

const Cars = () => {
  const { data } = useAppContext()
  return <Layout>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-8 gap-4 w-full">
    {
        data?.map(({ uuid, content }) => (
          <Link
            key={uuid}
            href={{
              pathname: '/coches/detalle',
              query: { uuid },
            }}
          >
            <a>
              <Card
                key={uuid}
                {...content}
                image={content.images[0]?.filename}
              />
            </a>
          </Link>
        ))
    }
    </div>

  </Layout>;
};

export default Cars;
