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
  console.log(car)
  return (
    <Layout>
     <div className="flex flex-col h-full w-full">
      <div className="w-full h-[400px] p-4">
      <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    {
      car?.content?.images?.map(({ filename }, index) => (
        <div style={{ position: 'relative', width: '100%', height: '400px' }} key={index} class="carousel-item active relative float-left w-full">
          <Image
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
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      </div>
      <div className="flex-1 p-4">
        <div className="grid grid-cols-2 p-2">
          <p className="capitalize font-semibold text-lg"> {car?.content?.brand} {car?.content?.model} {car?.content?.year} </p>
          <p className="capitalize font-semibold text-lg text-end"> { new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(car?.content?.price) } </p>
        </div>
        <div className="p-2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
     </div>
    </Layout>
  );
};

export default Detail;
