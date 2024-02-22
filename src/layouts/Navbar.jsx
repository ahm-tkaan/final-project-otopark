import React from 'react'
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div className=' flex justify-between px-10 items-center py-8  bg-black bg-opacity-5 rounded-xl shadow-2xl w-10/12 mx-auto '>
      <div className=' bg-yellow-600 text-white p-4 rounded-xl flex flex-col justify-center items-center '>
          <h2 className=' tracking-widest font-bold  text-xl select-none'>OTOPARK</h2>
          <p>Kaan Konya Otopark Hizmetleri</p>
      </div>
      <div className=' flex gap-10'>
        <Link className=' bg-yellow-600 text-white p-2 rounded hover:bg-yellow-700 transition-all font-bold' to={"/"}>Anasayfa</Link>
        <Link className=' bg-yellow-600 text-white p-2 rounded hover:bg-yellow-700 transition-all font-bold' to={"/addCar"}>Araç Kayıt</Link>
      </div>
        
    </div>
  )
}

export default Navbar