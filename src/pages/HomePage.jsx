import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Cart from '../components/Cart';
import { message } from 'antd';
import { addCar, inCarAction, outCarAction,removeCar } from '../redux/carSlice';
import { IoCarSportSharp } from "react-icons/io5";

const HomePage = () => {
    const {plaka} = useSelector(state => state.car);
    const dispatch = useDispatch();


    const [formDataIn, setFormDataIn] = useState({plaka: ""});
    const [formDataOut, setFormDataOut] = useState({plaka: ""});




    const handleChangeIn = (e) => {
        setFormDataIn((prev) => ({...prev, [e.target.name] : e.target.value}));
        
    }

    const handleChangeOut = (e) => {
        setFormDataOut((prev) => ({...prev, [e.target.name] : e.target.value}));
    }




    const handleClickIn = () => {
        if(formDataIn.plaka == "") {
            return message.error("Plaka girin");
        }else {
           dispatch(inCarAction(formDataIn));
           setFormDataIn({plaka: ""});
           dispatch(addCar(formDataIn));
        }
    }

    const handleClickOut = () => {
        if(formDataOut.plaka == "") {
            return message.error("Plaka girin");
        }else {
           setFormDataOut({plaka: ""});
           dispatch(removeCar(formDataOut));
        }
    }



    // console.log(cars,"ALLCARS");

  return (
    <div className=' w-10/12 mx-auto mt-20'>
        <div className=' flex  justify-around items-center'>
            <div className=' border w-[500px] h-[300px] p-2 rounded-lg shadow-2xl bg-black bg-opacity-5'>
                <div className=' flex flex-col justify-center items-center h-full gap-10'>
                    <div className=' flex flex-col gap-2 justify-center items-center'>
                        <h1 className=' font-bold text-2xl tracking-wider'>Otoparka Giriş Yap</h1>
                        <p className=' font-light italic'>Araç plakası girin</p>
                    </div>
                    <div>
                        <input className=' outline-none p-2 w-96 rounded text-black' placeholder={"plaka..."} name='plaka' value={formDataIn.plaka} onChange={handleChangeIn}></input>
                    </div>
                    <div>
                        <button onClick={handleClickIn} className=' bg-yellow-600 text-white p-1 hover:bg-yellow-800 transition-all w-40 rounded '>Giriş Yap</button>
                    </div>
                </div>
            </div>

            <div>
                    <Cart />
            </div> 

            <div className=' border w-[500px] h-[300px] p-2 rounded-lg shadow-2xl bg-black bg-opacity-5'>
                <div className=' flex flex-col justify-center items-center h-full gap-10'>
                    <div className=' flex flex-col gap-2 justify-center items-center'>
                        <h1 className=' font-bold text-2xl tracking-wider'>Otoparktan Çıkış Yap</h1>
                        <p className=' font-light italic'>Araç plakası girin</p>
                    </div>
                    <div>
                        <input className=' outline-none p-2 w-96 rounded text-black' placeholder={"plaka..."} name='plaka' value={formDataOut.plaka} onChange={handleChangeOut}></input>
                    </div>
                    <div>
                        <button onClick={handleClickOut} className='bg-yellow-600 text-white p-1 hover:bg-yellow-700 transition-all w-40 rounded '>Çıkış Yap</button>
                    </div>
                </div>
            </div>
        </div>


        {
            plaka.length > 0 ? (
                <div className=' mt-10 rounded-xl bg-black bg-opacity-5 p-4 w-[500px] mx-auto shadow-2xl' >
                    <div className=' flex flex-col justify-center items-center gap-10'>
                        <h2 className=' font-bold text-2xl tracking-wider'>OTOPARKTAKİ ARAÇLAR</h2>
                        <div>
                        {
                            plaka?.map((item,i) => (
                                <div key={i} className=' border-b-4 font-bold  flex gap-4  items-center min-w-96 justify-between'>
                                    <span className=' text-green-700'>
                                        <IoCarSportSharp size={25}/>
                                    </span>
                                    <p className=' text-xl'>
                                    {item.plaka}
                                    </p>
                                </div>
                            ))
                        }
                        </div>
                    </div>
                </div>
            ) : (
                <div className=' mt-10 rounded-xl bg-black bg-opacity-5 p-4 w-96 mx-auto shadow-2xl text-center'>
                        <h2 className=' font-bold text-md tracking-wider'>OTOPARKTA ŞUAN ARAÇ YOK</h2>
                </div>
            )
        }
    </div>
  )
}

export default HomePage