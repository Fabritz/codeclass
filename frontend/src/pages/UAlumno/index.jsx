import React from "react";

import { Menu, MenuItem } from "react-pro-sidebar";
import { Link } from 'react-router-dom';
import { Button, Img, Input, Text } from "components";
import Sidebar11 from "components/Sidebar11";

import { CloseSVG } from "../../assets/images";

const UAlumnoPage = () => {
  const [group1219value, setGroup1219value] = React.useState("");

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <Sidebar11 className="!sticky !w-[277px] bg-gray-900_01 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]" />
          <div className="flex flex-1 flex-col md:gap-10 gap-[122px] justify-start md:mt-0 mt-[76px] md:px-5 w-full">
            <div className="flex flex-col items-start justify-start ml-5 md:ml-[0]">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-white-A700_02"
                size="txtInterBold40"
              >
                Bienvenido
              </Text>
              <Text
                className="sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-400"
                size="txtInterRegular23"
              >
                Nombre usuario
              </Text>
            </div>
            <div className="flex flex-col gap-[49px] items-center justify-start w-full">
              <Input
                name="group1219"
                placeholder="Unirse a grupo"
                value={group1219value}
                onChange={(e) => setGroup1219value(e)}
                className="leading-[normal] md:text-[21px] p-0 placeholder:text-blue_gray-400 sm:px-5 sm:text-[19px] text-[23px] text-blue_gray-400 text-left w-full"
                wrapClassName="bg-gray-900_02 flex pb-[15px] pl-7 pr-[35px] pt-[27px] rounded-[15px] w-full"
                prefix={
                  <div className="mr-[18px] sm:w-full sm:mx-0 w-[6%] bg-blue_gray-400">
                    <Img
                      className="cursor-pointer my-auto"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  </div>
                }
                suffix={
                  <CloseSVG
                    fillColor="#8b8e95"
                    className="cursor-pointer my-auto"
                    onClick={() => setGroup1219value("")}
                    style={{
                      visibility:
                        group1219value?.length <= 0 ? "hidden" : "visible",
                    }}
                    height={38}
                    width={41}
                    viewBox="0 0 41 38"
                  />
                }
              ></Input>
              <Input
                name="groups"
                placeholder="Grupos"
                className="leading-[normal] md:text-[21px] p-0 placeholder:text-blue_gray-400 sm:pr-5 sm:text-[19px] text-[23px] text-blue_gray-400 text-left w-full"
                wrapClassName="bg-gray-900_02 flex pb-6 pl-5 pr-[35px] pt-[18px] rounded-[15px] w-full"
                prefix={
                  <div className="mr-[18px] sm:w-full sm:mx-0 w-[7%] bg-blue_gray-400">
                    <Img
                      className="my-auto"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  </div>
                }
              ></Input>
            </div>
          </div>
          <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start p-[25px] md:px-5 w-full">
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

export default UAlumnoPage;
