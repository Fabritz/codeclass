import React from "react";

import { Button, Img, Text } from "components";

const ContraseaPage = () => {
  return (
    <>
      <div className="bg-gradient  border border-blue_gray-800 border-solid flex flex-col font-inter sm:gap-10 md:gap-10 gap-[137px] items-center justify-start mx-auto p-14 md:px-10 sm:px-5 w-full">
        <div className="flex flex-row gap-[19px] items-end justify-start w-[26%] md:w-full">
          <Img
            className="h-[65px] mb-0.5"
            src="images/img_category.svg"
            alt="category"
          />
          <Text
            className="mt-1.5 sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700_01"
            size="txtInterRegular50"
          >
            CodeClass
          </Text>
        </div>
        <div className="flex flex-col items-center justify-start mb-[205px] w-[24%] md:w-full">
          <Button className="bg-gray-800_b2 cursor-pointer leading-[normal] min-w-[308px] py-6 rounded-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-400 text-center">
            Nombre de usuario
          </Button>
          <Button className="bg-gray-800_b2 cursor-pointer leading-[normal] min-w-[308px] mt-[66px] py-6 rounded-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-400 text-center">
            Contraseña
          </Button>
          <Button className="bg-gray-800_b2 cursor-pointer leading-[normal] min-w-[308px] mt-4 py-6 rounded-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-400 text-center">
            Repetir contraseña
          </Button>
          <Button className="bg-blue_gray-800 cursor-pointer leading-[normal] min-w-[308px] mt-[105px] py-[22px] rounded-sm sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-400 text-center">
            Continuar
          </Button>
        </div>
      </div>
    </>
  );
};

export default ContraseaPage;
