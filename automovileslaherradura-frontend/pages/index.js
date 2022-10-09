import Logo from '../assets/logo.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full h-[100vh] grid grid-cols-1 grid-rows-12 grid-flow-row items-center">
      <div className='w-full h-full row-span-1'>
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={Logo}
            height={200}
            width={200}
            alt="logo"
          />
        </div>
      </div>
      <div className="bg-[#00378a] p-4 row-span-10 w-full h-full flex flex-col items-center justify-center">
        <p className="text-white text-xl font-bold">
          EN MANTENIMIENTO
        </p>
        <p className="text-white text-lg text-center">
          Actualmente estamos realizando labores de mantenimiento <br />
          y mejoras a nuestra página web.
        </p>
      </div>
      <div className='footer m-4 row-span-1 w-full h-[80px] gap-2 flex flex-col items-center justify-center'>
        <div className='flex items-center justify-center gap-2'>
          <p className="text-[#00378a] font-bold">
            Dirección:
          </p>
          <p className="text-[#00378a]">
            La Herradura, Calle Alfonso XIII Nº 178 
          </p>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <p className="text-[#00378a] font-bold">
            Teléfono:
          </p>
          <p className="text-[#00378a]">
            603 55 26 56
          </p>
        </div>
        <div className='flex items-center justify-center gap-2'>
          <p className="text-[#00378a] font-bold">
            Correo:
          </p>
          <p className="text-[#00378a]">
            automovileslaherradura@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}
