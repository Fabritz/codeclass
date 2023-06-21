import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";
import { Link } from 'react-router-dom';

const Sidebar1 = (props) => {
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
              color: "#8b8e95",
              "font-size": "23px",
              "font-family": "Inter",
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
            <Link to="/AUnirseGrupo">
              <Text className="sm:text-[19px] md:text-[21px]">
                Unirse a grupo
              </Text>
            </Link>
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
            >
              <Link to="/AGrupos">
              <Text className="sm:text-[19px] md:text-[21px]">Grupos</Text></Link>
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
            >
              <Link to="/Calendario">
              <Text className="sm:text-[19px] md:text-[21px]">Calendario</Text>
              </Link>
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar1.defaultProps = {};

export default Sidebar1;
