import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Input, Text } from "components";

import { Link } from 'react-router-dom';

import { CloseSVG } from "../../assets/images";

const AGruposPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const [group1251value, setGroup1251value] = React.useState("");

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between w-full">
          <Sidebar
            onClick={() => collapseSidebar(!collapsed)}
            className="!sticky !w-[277px] bg-gray-900_01 flex h-screen md:hidden justify-start overflow-auto md:px-5 top-[0]"
          >
            <div className="bg-blue_gray-800 flex flex-row gap-[22px] items-start justify-start mt-[61px] mx-auto p-1 rounded-[20px] w-[82%]">
              <Img
                className="h-[31px] mb-[5px] mt-0.5"
                src="images/img_category.svg"
                alt="category"
              />
              <Text
                className="mt-1.5 sm:text-[21px] md:text-[23px] text-[25px] text-white-A700_01"
                size="txtInterRegular25WhiteA70001"
              >
                CodeClass
              </Text>
            </div>
            <Menu
              menuItemStyles={{
                button: {
                  padding: 0,
                  gap: "14px",
                  color: "#8b8e95",
                  "font-size": "23px",
                  "padding-left": "36px",
                  "padding-right": "36px",
                },
              }}
              className="flex flex-col items-center justify-start mb-[591px] mt-[88px] md:pr-10 sm:pr-5 pr-[66px] w-[76%]"
            >
              <div className="flex flex-col md:gap-10 gap-[72px] items-center justify-start w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-[30px] w-[31px]"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                >
                  <Text className="sm:text-[19px] md:text-[21px]">
                    Unirse a grupo
                  </Text>
                </MenuItem>
                <MenuItem
                  icon={
                    <Img
                      className="h-[30px]"
                      src="images/img_user.svg"
                      alt="user"
                    />
                  }
                  active={window.location.pathname === "/agrupos"}
                  href="/agrupos"
                >
                  <Text className="sm:text-[19px] md:text-[21px]">Grupos</Text>
                </MenuItem>
              </div>
              <div className="flex flex-col items-center justify-start mt-[71px] w-full">
                <MenuItem
                  icon={
                    <Img
                      className="h-[33px]"
                      src="images/img_calendar.svg"
                      alt="calendar"
                    />
                  }
                  active={window.location.pathname === "/calendario"}
                  href="/calendario"
                >
                  <Text className="sm:text-[19px] md:text-[21px]">
                    Calendario
                  </Text>
                </MenuItem>
              </div>
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col gap-[46px] justify-start md:mt-0 mt-20 md:px-5 w-full">
            <Text
              className="ml-5 md:ml-[0] sm:text-4xl md:text-[38px] text-[40px] text-white-A700_02"
              size="txtInterBold40"
            >
              Grupos
            </Text>
            <Input
              name="group1251"
              placeholder="Nombre del grupo"
              value={group1251value}
              onChange={(e) => setGroup1251value(e)}
              className="leading-[normal] md:text-[21px] p-0 placeholder:text-blue_gray-400 sm:px-5 sm:text-[19px] text-[23px] text-blue_gray-400 text-left w-full"
              wrapClassName="bg-gray-900_02 flex pb-6 pl-[27px] pr-[22px] pt-[18px] rounded-[15px] w-full"
              prefix={
                <div className="mr-[19px] sm:w-full sm:mx-0 w-[6%] bg-blue_gray-400">
                  <Img
                    className="cursor-pointer my-auto"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </div>
              }
              suffix={
                <CloseSVG
                  className="cursor-pointer my-auto"
                  onClick={() => setGroup1251value("")}
                  fillColor="#8b8e95"
                  style={{
                    visibility:
                      group1251value?.length <= 0 ? "hidden" : "visible",
                  }}
                  height={38}
                  width={41}
                  viewBox="0 0 41 38"
                />
              }
            ></Input>
          </div>
          <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start p-[25px] md:px-5 w-full">
          <Link to="/Inicio">
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

export default AGruposPage;
