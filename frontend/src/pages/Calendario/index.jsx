import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Link } from 'react-router-dom';
import { Button, Img, Text } from "components";
import Sidebar2 from "components/Sidebar2";

const CalendarioPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex sm:flex-col md:flex-col flex-row font-inter sm:gap-5 md:gap-5 items-start mx-auto w-full">
        <Sidebar2 className="!sticky !w-[277px] bg-gray-900_01 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
        <Text
          className="md:ml-[0] ml-[117px] md:mt-0 mt-20 sm:text-4xl md:text-[38px] text-[40px] text-white-A700_02"
          size="txtInterBold40"
        >
          Asignaciones
        </Text>
        <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start md:ml-[0] ml-[545px] p-[25px] md:px-5 w-full">
        <Link to="/Inicio">
          <Button className="bg-blue_gray-800 cursor-pointer leading-[normal] mb-[890px] min-w-[182px] mt-9 py-2.5 rounded-[15px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-400 text-center">
            Cerrar sesión
          </Button>
        </Link>
        </div>
      </div>
    </>
  );
};

export default CalendarioPage;
