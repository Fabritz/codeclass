import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Button, Img, Text } from "components";
import Sidebar1 from "components/Sidebar1";

const DesktopFivePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
          <Sidebar1 className="!sticky !w-[277px] bg-gray-900_01 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col md:gap-10 gap-[125px] justify-start md:ml-[0] ml-[66px] md:mt-0 mt-[61px] md:px-5 w-full">
            <div className="bg-gray-800 flex flex-row gap-6 items-center justify-start mr-[448px] p-[11px] rounded-[15px] w-[41%] md:w-full">
              <Text
                className="ml-[17px] mt-2 sm:text-4xl md:text-[38px] text-[40px] text-white-A700_02"
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
            <div className="flex flex-col gap-[30px] items-center justify-start ml-5 md:ml-[0] w-[98%] md:w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-[99%] md:w-full">
                <Text
                  className="mt-0.5 sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-400"
                  size="txtInterRegular23"
                >
                  Tareas Asignadas
                </Text>
                <Text
                  className="mb-0.5 sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-400 text-right"
                  size="txtInterRegular23"
                >
                  Fecha Límite
                </Text>
              </div>
              <div className="bg-gray-900_02 flex sm:flex-col flex-row sm:gap-5 items-center justify-end p-3.5 rounded-[15px] w-full">
                <Img
                  className="h-10 mb-[11px] sm:mt-0 mt-0.5"
                  src="images/img_file.svg"
                  alt="file"
                />
                <Text
                  className="sm:ml-[0] ml-[58px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-800_01"
                  size="txtInterRegular23Bluegray80001"
                >
                  Título de tarea asignada
                </Text>
                <Text
                  className="sm:ml-[0] ml-[139px] sm:text-[19px] md:text-[21px] text-[23px] text-gray-800_01 text-right"
                  size="txtInterRegular23Gray80001"
                >
                  Calificación / 100
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start md:ml-[0] ml-[104px] p-[27px] md:px-5 w-full">
            <Button className="bg-blue_gray-800 cursor-pointer leading-[normal] mb-[875px] min-w-[182px] mt-[43px] py-3 rounded-[15px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-400 text-center">
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFivePage;
