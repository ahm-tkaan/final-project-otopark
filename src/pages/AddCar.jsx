import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addNewCar, getAllCars } from '../redux/carSlice';
import { message } from 'antd';
import ShowCar from '../components/ShowCar';

const AddCar = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    color: "",
  });


  const handleChange = (e) => {
    setFormData((prev) => ({...prev, [e.target.name] : e.target.value}));
  }


  const handleClickAddCar = (e) => {
    e.preventDefault();
    dispatch(addNewCar(formData));
    setFormData({
      brand: "",
      model: "",
      color: "",
    });
    dispatch(getAllCars());
  }


  useEffect(() => {
      dispatch(getAllCars());
  }, [formData]);


  return (
    <div >
      <div className=' w-10/12 mx-auto mt-8 border rounded-xl shadow-2xl bg-black bg-opacity-5 h-[400px]'>
        <form className=' h-full'>
          <div className=' flex flex-col justify-start mt-8 items-center gap-5 h-full'>
            <div className=' flex flex-col gap-2'>
              <label className=' font-bold'>Araç Markası Giriniz</label>
              <input className=' w-[500px] p-2 rounded-md text-black outline-none' name="brand" value={formData.brand} onChange={handleChange} placeholder={"marka..."}/>
            </div>

            <div className=' flex flex-col gap-2'>
              <label className=' font-bold'>Araç Modeli Giriniz</label>
              <input className=' w-[500px] p-2 rounded-md text-black outline-none'  name="model" value={formData.model} onChange={handleChange} placeholder={"model..."}/>
            </div>

            <div className=' flex flex-col gap-2'>
              <label className=' font-bold'>Araç Rengi Giriniz</label>
              <input className=' w-[500px] p-2 rounded-md text-black outline-none'  name="color" value={formData.color} onChange={handleChange} placeholder={"renk..."}/>
            </div>

            <div className=' flex flex-col gap-2'>
              <button onClick={handleClickAddCar} className=' w-64 hover:bg-yellow-700 transition-all bg-yellow-600 font-bold text-white p-2 rounded'>Kaydet</button>
            </div>
          </div>
        </form>
      </div>

      <div className=' w-10/12 mx-auto mt-8 border rounded-xl shadow-2xl bg-black bg-opacity-5 flex flex-wrap  justify-center items-center p-4 gap-10'>
          <ShowCar />
      </div>
    </div>
  )
}

export default AddCar