import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import Sidebar2 from "components/Sidebar2";
import { Link } from 'react-router-dom';

const DesktopTwoPage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
          <Sidebar2 className="!sticky !w-[277px] bg-gray-900_01 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col md:gap-10 gap-[127px] justify-start md:ml-[0] ml-[66px] md:mt-0 mt-[61px] md:px-5 w-full">
            <div className="bg-gray-800 flex flex-row gap-6 items-center justify-start mr-[448px] p-[11px] rounded-[15px] w-[41%] md:w-full">
              <Text
                className="min-w-[180px] sm:text-4xl md:text-[38px] text-[40px] text-white-A700_02"
                size="txtInterBold40"
              >
                Grupo 30
              </Text>
              <Img
                className="h-[30px]"
                src="images/img_user.svg"
                alt="user_One"
              />
            </div>
            <div className="flex flex-col gap-[26px] items-center justify-start ml-5 md:ml-[0] w-[98%] md:w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-[98%] md:w-full">
                <Text
                  className="mb-1 sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-400"
                  size="txtInterRegular23"
                >
                  Tareas Asignadas
                </Text>
                <Text
                  className="mt-1 sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-400 text-right"
                  size="txtInterRegular23"
                >
                  Fecha Límite
                </Text>
              </div>
              <div className="bg-gray-900_02 flex sm:flex-col flex-row gap-[58px] items-center justify-start p-4 rounded-[15px] w-full">
                <Img
                  className="h-10 mb-[9px] ml-6 sm:ml-[0]"
                  src="images/img_file.svg"
                  alt="file"
                />
                <div className="flex flex-col items-center justify-start">
                  <Text
                    className="sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-800_01"
                    size="txtInterRegular23Bluegray80001"
                  >
                    Título de tarea asignada
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start md:ml-[0] ml-[107px] p-[25px] md:px-5 w-full">
           <Link to="/inicio">
            <Button className="bg-blue_gray-800 cursor-pointer leading-[normal] mb-[890px] min-w-[182px] mt-9 py-2.5 rounded-[15px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-400 text-center">
              Cerrar sesión
            </Button>
          </Link>  
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopTwoPage;
