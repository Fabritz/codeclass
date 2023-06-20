import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Button, Img, Text } from "components";

const DesktopFourPage = () => {
  const { collapseSidebar, collapsed } = useProSidebar();

  const sideBarMenu = [
    {
      icon: (
        <Img
          className="h-[30px] mb-[30px] w-[31px]"
          src="images/img_search.svg"
          alt="search"
        />
      ),
      label: "Unirse a grupo",
    },
    {
      icon: (
        <Img className="h-[30px] mb-9" src="images/img_user.svg" alt="user" />
      ),
      label: "Grupos",
      href: "/agrupos",
      active: window.location.pathname === "/agrupos",
    },
    {
      icon: (
        <Img
          className="h-[33px] mb-[63px]"
          src="images/img_calendar.svg"
          alt="calendar"
        />
      ),
      label: "Calendario",
      href: "/calendario",
      active: window.location.pathname === "/calendario",
    },
  ];

  return (
    <>
      <div className="bg-gray-900 flex flex-col font-inter items-center justify-start mx-auto w-full">
        <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
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
                  "padding-bottom": "36px",
                  color: "#8b8e95",
                  "font-size": "23px",
                  "padding-left": "36px",
                  "padding-right": "36px",
                },
              }}
              className="flex flex-col items-center justify-start mb-[593px] mt-[88px] md:pr-10 sm:pr-5 pr-[66px] w-[76%]"
            >
              {sideBarMenu?.map((menu, i) => (
                <MenuItem key={`sideBarMenuItem${i}`} {...menu}>
                  {menu.label}
                </MenuItem>
              ))}
            </Menu>
          </Sidebar>
          <div className="flex flex-1 flex-col md:gap-10 gap-[127px] justify-start md:ml-[0] ml-[66px] md:mt-0 mt-[61px] md:px-5 w-full">
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
            <div className="flex flex-col items-start justify-start ml-5 md:ml-[0] w-[98%] md:w-full">
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
              <div className="bg-gray-600 flex flex-col gap-1.5 items-center justify-end mt-6 p-[81px] md:px-10 sm:px-5 rounded-[15px] w-full">
                <Img
                  className="h-[73px] mt-6 w-[74px]"
                  src="images/img_plus.svg"
                  alt="plus"
                />
                <Text
                  className="text-[15px] text-gray-800_01 text-right"
                  size="txtInterRegular15Gray80001"
                >
                  Subir código
                </Text>
              </div>
              <Button className="bg-blue_gray-800 cursor-pointer leading-[normal] min-w-[215px] md:ml-[0] ml-[521px] mt-[22px] py-3 rounded-[15px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-400 text-center">
                Crear diagrama
              </Button>
            </div>
          </div>
          <div className="bg-gray-900_01 flex flex-1 flex-col items-center justify-start md:ml-[0] ml-[104px] p-[27px] md:px-5 w-full">
            <Button className="bg-blue_gray-800 cursor-pointer leading-[normal] mb-[884px] min-w-[182px] mt-[34px] py-3 rounded-[15px] sm:text-[19px] md:text-[21px] text-[23px] text-blue_gray-400 text-center">
              Cerrar sesión
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopFourPage;
