import React from "react";

import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";

import { Img, Text } from "components";

const Sidebar11 = (props) => {
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
              padding: " ",
              "padding-left": "30px",
              gap: "15px",
              margin: " ",
              color: "#8b8e95",
              "font-size": "23px",
              "font-family": "Inter",
            },
          }}
          className="flex flex-col items-center justify-start mb-[843px] mt-[39px] md:pr-10 sm:pr-5 pr-[113px] w-[59%]"
        >
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
            <Text className="sm:text-[19px] md:text-[21px]">Calendario</Text>
          </MenuItem>
        </Menu>
      </Sidebar>
    </>
  );
};

Sidebar11.defaultProps = {};

export default Sidebar11;
