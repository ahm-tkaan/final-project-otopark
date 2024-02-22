import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCars, removeCarItem } from '../redux/carSlice';
import { TiDelete } from "react-icons/ti";


const ShowCar = () => {
    const {cars} = useSelector(state => state.car);

    const dispatch = useDispatch();


    const handleClickRemove = (id) => {
        dispatch(removeCarItem(id));
        dispatch(getAllCars());
    }


    console.log(cars);

  return (
    <>
        {
            cars && cars?.map((item) => (
                <div key={item.id} className='relative border w-80 bg-white rounded-xl shadow-xl font-bold p-2 flex flex-col h-40 justify-around items-start'>
                    <p>Araç Markası: {item.brand.toUpperCase()}</p>
                    <p>Araç Modeli: {item.model.toUpperCase()}</p>
                    <p>Araç Rengi: {item.color.toUpperCase()}</p>
                    <span onClick={() => handleClickRemove(item.id)} className=' absolute top-1 right-1 text-red-600 cursor-pointer'><TiDelete size={25} /></span>
                </div>
            ))
        }
    </>
  )
}

export default ShowCar