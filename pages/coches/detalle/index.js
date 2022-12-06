import Image from "next/image";
import React, { useEffect, useState } from "react";
import Layout from "../../../components/Layout";
import { useRouter } from 'next/router'
import { useAppContext } from "../../../context/state";

const Detail = () => {
  const [car, setCar] = useState(null)
  const router = useRouter()
  const { data } = useAppContext()
  const { uuid } = router.query

  useEffect(() => {
    setCar(data.find((car) => (car.uuid === uuid)))
  }, [data, uuid])
  return (
    <Layout>
     <div className="grid grid-rows-1 grid-cols-1 md:grid-cols-2 h-full w-full">
      <div className="flex flex-col w-full p-4">
        <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
          <div className="carousel-inner relative w-full overflow-hidden">
          {
            car && car?.content?.images?.map(({ filename }, index) => (
              <div
                style={{ position: 'relative', width: '100%', height: '70vh' }}
                key={index}
                className={`carousel-item ${index === 0 ? 'active' : ''} relative float-left w-full`}>
                <Image
                  className="block w-full"
                  src={filename}
                  objectFit='cover'
                  layout="fill"
                  alt={index}
                />
            </div>
            ))
          }
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-2 p-2">
          <p className="capitalize text-gray-700 font-semibold text-lg"> {car?.content?.brand} {car?.content?.model} {car?.content?.year} </p>
          <p className="capitalize text-[#00378a] font-extrabold text-lg text-end"> { new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(car?.content?.price) } </p>
        </div>
        <div className="p-2">
          {car?.content?.description}
        </div>
      </div>
     </div>
    </Layout>
  );
};

export default Detail;