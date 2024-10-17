import React from "react";
import SectionHeader from "./SectionHeader";
import {
  Box,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import video2 from "../assets/video2.png";
import SkCourseIntroTab from "./SKCourseIntroTab";
const tabData = [
  {
    name: "Course Introduction",
    content: <SkCourseIntroTab />,
  },
  {
    name: "Notes From MME AMY",
    content: "",
  },
];

const SKProgramContent = () => {
  return (
    <>
      <SectionHeader
        title={"Introduction to the virtual Kindergarten Program"}
        variant={"input"}
        color={"white"}
      />
      <Image my={4} w={"full"} src={video2} />
      <Box>
        <Tabs>
          <TabList>
            {tabData.map((tab, index) => (
              <Tab
                py={4}
                w={"full"}
                key={index}
                _selected={{
                  bg: "rgba(97, 192, 191, 0.12)",
                  color: "#61C0BF",
                  borderBottom: "2px solid",
                  borderColor: "#61C0BF",
                }}
                color="gray.400"
              >
                {tab.name}
              </Tab>
            ))}
          </TabList>

          <TabPanels>
            {tabData.map((tab, index) => (
              <TabPanel p={0} key={index}>
                {tab.content}
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default SKProgramContent;
