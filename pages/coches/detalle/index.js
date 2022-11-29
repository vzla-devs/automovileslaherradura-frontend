import Image from "next/image";
import React from "react";
import Layout from "../../../components/Layout";

const Detail = () => {
  return (
    <Layout>
     <div className="flex flex-col h-full w-full">
      <div className="w-full h-[400px] bg-red-300 p-4">
          Imagenes
      </div>
      <div className="flex-1 bg-blue-300 p-4">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
     </div>
    </Layout>
  );
};

export default Detail;
