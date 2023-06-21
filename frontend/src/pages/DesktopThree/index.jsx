import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";

import { Link } from 'react-router-dom';
import { Button, Img, Text } from "components";
import Sidebar2 from "components/Sidebar2";

const DesktopThreePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
          <Sidebar2 className="!sticky !w-[277px] bg-gray-900_01 flex h-screen md:hidden justify-start overflow-clip md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col md:gap-10 gap-[127px] justify-start md:ml-[0] ml-[66px] md:mt-0 mt-[61px] md:px-5 w-full">
            <div className="bg-gray-800 flex flex-row gap-6 items-center justify-start mr-[448px] p-[11px] rounded-[15px] w-[41%] md:w-full">
              <Text
                className="min-w-[180px] ml-[17px] mt-2 sm:text-4xl md:text-[38px] text-[40px] text-white-A700_02"
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
            <div className="flex flex-col items-center justify-start left-5 ml-5 md:ml-[0] w-[98%] md:w-full">
              <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                <Text
                  className="mb-[5px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-400"
                  size="txtInterRegular23"
                >
                  Tarea asignada
                </Text>
                <Text
                  className="mt-[5px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-400 text-right"
                  size="txtInterRegular23"
                >
                  Fecha Límite
                </Text>
              </div>
              <div className="bg-gray-600 flex flex-col items-start justify-start mt-6 p-[9px] rounded-[15px] w-full">
                <Text
                  className="mb-[135px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-800_01"
                  size="txtInterRegular23Bluegray80001"
                >
                  Código
                </Text>
              </div>
              <div className="bg-gray-600 flex flex-col items-start justify-start mt-20 rounded-[15px] w-full">
                <Text
                  className="mb-[150px] ml-4 md:ml-[0] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-800_01"
                  size="txtInterRegular23Bluegray80001"
                >
                  Diagrama
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-gray-900_01 flex flex-1 md:flex-1 flex-col items-center justify-start max-w-[300px] p-[30px] md:px-5 w-[30px] md:w-full">
            <Link to="/inicio">
            <Button className="bg-blue_gray-800 cursor-pointer leading-[normal] min-w-[182px] mt-[62px] py-3 rounded-[15px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-400 text-center">
              Cerrar sesión
            </Button>
            </Link>
            <div className="bg-gray-800 flex flex-row gap-1.5 items-start justify-end md:m-0 m-5 p-2 rounded-[15px] top-5 w-full">
              <Text
                className="text-center text-gray-300 text-xl"
                size="txtInterRegular20"
              >
                Calificar __ / 100
              </Text>
              <Img
                className="cursor-pointer h-[27px] mb-0.5 mt-[9px]"
                src="images/img_volume.svg"
                alt="volume"
              />
            </div>
            <div className="flex flex-col items-center justify-start mb-[219px] mt-[84px] w-[94%] md:w-full">
              <div className="flex flex-col gap-2.5 items-center justify-start w-full">
                <div className="flex flex-row gap-[13px] items-start justify-start w-[85%] md:w-full">
                  <Img
                    className="h-[21px] mt-1"
                    src="images/img_user_blue_gray_400.svg"
                    alt="user_Two"
                  />
                  <Text
                    className="sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-400 text-right"
                    size="txtInterRegular23"
                  >
                    Comentarios
                  </Text>
                </div>
                <div className="bg-gray-600 flex flex-col items-center justify-end p-1 rounded-[15px] w-full">
                  <div className="bg-gray-800 cursor-text flex flex-col items-end justify-start mt-[243px] p-[11px] rounded-[15px] w-[97%] md:w-full">
                    <Img
                      className="cursor-pointer h-4 mr-[3px]"
                      src="images/img_volume.svg"
                      alt="volume_One"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopThreePage;
