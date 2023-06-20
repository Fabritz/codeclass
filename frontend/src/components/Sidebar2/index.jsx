import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar2 = (props) => {
  const { collapseSidebar, collapsed } = useProSidebar();

  return (
    <>
      <Sidebar
        onClick={() => collapseSidebar(!collapsed)}
        className={props.className}
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
              left: "20px",
              "text-align": "center",
              color: "#8b8e95",
              "font-size": "23px",
              "font-family": "Inter",
            },
          }}
          className="flex flex-col items-center justify-start left-[200px] max-h-[30px] max-w-[2000px] mb-[591px] mt-[88px] md:pr-10 sm:pr-5 w-[66%]"
        >
          <div className="flex flex-col md:gap-10 gap-[72px] items-center justify-start left-5 w-full">
            <MenuItem
              icon={
                <Img
                  className="h-[30px] left-5 w-[31px]"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              active={window.location.pathname === "/pcreargrupo"}
            >
              <Text className="flex flex-col items-center justify-start sm:text-[19px] md:text-[21px]">
                Crear grupo
              </Text>
            </MenuItem>
            <MenuItem
              icon={
                <Img
                  className="h-[30px] left-5"
                  src="images/img_user.svg"
                  alt="user"
                />
              }
              active={window.location.pathname === "/agrupos"}
            >
              <Text className="flex-col justify-start sm:text-[19px] md:text-[21px]">
                Grupos
              </Text>
            </MenuItem>
          </div>
          <div className="flex flex-col items-center justify-start mt-[71px] w-full">
            <MenuItem
              icon={
                <Img
                  className="h-[33px] left-5"
                  src="images/img_calendar.svg"
                  alt="calendar"
                />
              }
              active={window.location.pathname === "/calendario"}
            >
              <Text className="flex-col justify-start sm:text-[19px] md:text-[21px]">
                Calendario
              </Text>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar2.defaultProps = {};

export default Sidebar2;
