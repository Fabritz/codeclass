import React from "react";

import { Button, Img, Text } from "components";

const CrearCuentaOnePage = () => {
  return (
    <>
      <div className="bg-gradient  border border-blue_gray-800 border-solid flex flex-col font-inter sm:gap-10 md:gap-10 gap-[153px] justify-start mx-auto p-14 md:px-10 sm:px-5 w-full">
        <div className="flex flex-row gap-[19px] items-end justify-start md:ml-[0] ml-[38px] w-[26%] md:w-full">
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
        <div className="flex flex-col items-end mb-60 md:ml-[0] ml-[38px] mr-[469px] md:pl-10 sm:pl-5 pl-[513px] w-[62%] md:w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <Button className="bg-gray-800_b2 cursor-pointer leading-[normal] min-w-[308px] py-6 rounded-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-400 text-center">
              Correo electrónico
            </Button>
            <div className="flex flex-row items-center justify-between mt-[49px] w-[86%] md:w-full">
              <Img
                className="h-[62px]"
                src="images/img_akariconsfacebookfill.svg"
                alt="akariconsfacebo"
              />
              <Img
                className="h-[49px]"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
              <Img
                className="h-[58px] w-[57px]"
                src="images/img_call.svg"
                alt="call"
              />
            </div>
            <Text
              className="bg-blue_gray-800 h-[76px] justify-center mt-[185px] sm:px-5 px-[35px] py-[22px] rounded-sm sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-400 text-center w-[291px]"
              size="txtInterRegular25"
            >
              Continuar
            </Text>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrearCuentaOnePage;
