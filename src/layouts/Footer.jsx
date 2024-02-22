import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <div className=" mt-8 flex justify-center gap-5 px-10 items-center py-4  bg-black bg-opacity-5 rounded-xl shadow-2xl w-10/12 mx-auto">
      <img
        className=" w-40 rounded-lg h-28"
        src="https://ikidoguikibati.org/uploads/topics/15889763072402.jpg"
        alt=""
      />
      <div className=" flex flex-col justify-center items-center gap-2">
        <div className=" font-bold">&copy; Tüm Hakları Saklıdır.</div>
        <div className=" flex gap-5">
          <a href="https://github.com/ahm-tkaan" target="_blank">
          <FaGithub className=" text-yellow-600 hover:text-indigo-700 transition-all cursor-pointer" size={28}/>
          </a>
          <a href="https://www.linkedin.com/in/ahmet-kaan-%C3%A7elenk-27528129b/" target="_blank">
          <CiLinkedin className=" text-yellow-600 hover:text-indigo-700 transition-all cursor-pointer" size={32}/>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
