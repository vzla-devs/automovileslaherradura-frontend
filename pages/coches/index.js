import React from "react";
import Card from "../../components/Card/Card";
import Layout from "../../components/Layout";

const Cars = () => {
  return <Layout>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 overflow-auto">
    {
        [1,2,3,4,5,6,7,8,9,10].map(car => (
            <Card
            key={car}
            brand='Audi'
            model='A 4 2.7 Tdi Multitronic'
            price={10800}
            year={2022}
        />
        ))
    }
    </div>

  </Layout>;
};

export default Cars;
