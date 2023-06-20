import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Input, Text } from "components";
import Sidebar2 from "components/Sidebar2";

const PCrearGrupoPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <Sidebar2 className="!sticky !w-[277px] bg-gray-900_01 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col justify-start md:mt-0 mt-20 md:px-5 w-full">
            <Text
              className="ml-5 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-white-A700_02"
              size="txtInterBold40"
            >
              Crear Grupo
            </Text>
            <Input
              name="groupname"
              placeholder="Nombre del grupo"
              className="leading-[normal] md:text-[21px] p-0 placeholder:text-blue_gray-400 sm:px-5 sm:text-[19px] text-[23px] text-blue_gray-400 text-left w-full"
              wrapClassName="bg-gray-900_02 flex mt-[233px] pb-[21px] pl-[35px] pr-8 pt-[27px] rounded-[15px] w-full"
              suffix={
                <Img
                  className="mt-auto mb-px ml-[35px]"
                  src="images/img_phlink.svg"
                  alt="ph:link"
                />
              }
            ></Input>
            <Button className="bg-blue_gray-800 cursor-pointer leading-[normal] min-w-[179px] md:ml-[0] ml-[557px] mt-10 py-3 rounded-[15px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-400 text-center">
              Crear
            </Button>
          </div>
          <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start p-[25px] md:px-5 w-full">
            <Button className="bg-blue_gray-800 cursor-pointer leading-[normal] mb-[890px] min-w-[182px] mt-9 py-2.5 rounded-[15px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-400 text-center">
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PCrearGrupoPage;
