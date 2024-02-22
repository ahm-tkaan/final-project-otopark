import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { GiConfirmed } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";

const Cart = () => {
    const {inCarObj,outCarObj} = useSelector(state => state.car);

    const [car, setCar] = useState({
        inCar: "",
        outCar: ""
    });


  useEffect(() => {
    setCar({
        inCar: inCarObj,
        outCar: outCarObj
    });
  }, [inCarObj, outCarObj]);

  return (
    <div >
      <div>
       {    
            inCarObj.plaka && car.inCar && (
                <div className=' border-b-2'>
                    <div className=' text-green-700 font-bold flex gap-3 justify-center items-center'>{inCarObj.plaka} <p className=' font-normal text-black'>giriş yaptı</p> <span><GiConfirmed /></span></div>
                </div>
            )
            
       }
       {    
            outCarObj.plaka && car.outCar && (
                <div className=' border-b-2 my-4'>
                    <div className=' text-red-600 font-bold flex justify-center items-center gap-3'>{outCarObj.plaka} <p className=' font-normal text-black'>çıkış yaptı</p> <span><ImCancelCircle /></span></div>
                </div>
            )
            
       }
      </div>
    </div>
  )
}

export default Cart