import React from "react";

import { Button, Img, Text } from "components";

const InicioPage = () => {
  return (
    <>
      <div className="bg-gradient  border border-blue_gray-800 border-solid flex flex-col font-inter justify-start mx-auto p-[78px] md:px-10 sm:px-5 w-full">
        <Button className="bg-blue_gray-800 cursor-pointer leading-[normal] min-w-[225px] md:ml-[0] ml-[1059px] mt-7 py-[7px] rounded-[20px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-400 text-center">
          Crear cuenta
        </Button>
        <Img
          className="h-[89px] md:ml-[0] ml-[629px] mt-[34px] w-[89px]"
          src="images/img_grid.svg"
          alt="grid"
        />
        <Text
          className="flex md:ml-[0] ml-[544px] mt-[19px] sm:text-[40px] md:text-[46px] text-[50px] text-center text-white-A700_01"
          size="txtInterMedium50"
        >
          CodeClass
        </Text>
        <div className="flex flex-col items-center justify-start mb-[166px] md:ml-[0] ml-[520px] mr-[456px] mt-[76px] w-[24%] md:w-full">
          <Button className="bg-gray-800_b2 cursor-text leading-[normal] min-w-[308px] py-6 rounded-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-400 text-center">
            Usuario
          </Button>
          <Text
            className="bg-gray-800_b2 h-20 justify-center mt-[19px] sm:px-5 px-[35px] py-6 rounded-[15px] sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-400 text-center w-[308px]"
            size="txtInterRegular25"
          >
            Contraseña
          </Text>
          <Text
            className="cursor-pointer mt-[17px] text-[15px] text-blue_gray-400 text-center"
            size="txtInterRegular15"
          >
            Olvidé mi contraseña
          </Text>
          <Button className="bg-blue_gray-800 cursor-pointer leading-[normal] min-w-[307px] mt-14 py-[22px] rounded-sm sm:text-[21px] md:text-[23px] text-[25px] text-blue_gray-400 text-center">
            Ingresar
          </Button>
        </div>
      </div>
    </>
  );
};

export default InicioPage;
