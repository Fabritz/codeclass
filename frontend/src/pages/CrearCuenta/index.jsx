import React from "react";

import { Button, Img, Text } from "components";

import { Link } from 'react-router-dom';

const CrearCuentaPage = () => {
  return (
    <>
      <div className="bg-gradient  border border-blue_gray-800 border-solid flex flex-col font-inter sm:gap-10 md:gap-10 gap-[209px] items-center justify-start mx-auto p-14 md:px-10 sm:px-5 w-full">
        <div className="flex flex-row gap-[19px] items-end justify-start w-[26%] md:w-full">
          <Img
            className="h-[65px] mb-0.5"
            src="images/img_category.svg"
            alt="category"
          />
          <Text
            className="mt-1.5 sm:text-[40px] md:text-[46px] text-[50px] text-center text-gray-400"
            size="txtInterRegular50Gray400"
          >
            CodeClass
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start mb-[276px] w-[24%] md:w-full">
          <Button className="bg-gray-800 cursor-pointer leading-[normal] min-w-[308px] py-6 rounded-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-400 text-center">
            Profesor
          </Button>
          <Text
            className="bg-gray-800 h-20 justify-center mt-[47px] pb-[29px] pt-[19px] sm:px-5 px-[35px] rounded-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-400 text-center w-[308px]"
            size="txtInterRegular25"
          >
            Alumno
          </Text>
          <Link to="/CrearCuentaOne">
          <Button className="bg-blue_gray-800 cursor-pointer leading-[normal] min-w-[291px] mt-[77px] py-[22px] rounded-sm sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-400 text-center">
            Crear cuenta
          </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CrearCuentaPage;
