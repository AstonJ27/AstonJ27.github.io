import React from 'react'
import QRCode from "react-qr-code"
const Inicio = () => {
  return (
    <body>
        <div className=' flex flex-col justify-center items-center p-5 bg-blue-600'>
            <h1 className='text-white text-9xl'>
                Registrate!
            </h1>
            <div className='flex flex-col mt-10 p-3 bg-black border'>
                <QRCode value="/register" className='border'/>

            </div>
        </div>

    </body>
  )
}

export default Inicio