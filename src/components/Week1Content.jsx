import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import LeFrancaisTabContent from "./LeFrancaisTabContent";
import { useNavigate } from "react-router-dom";

const tabData = [
  {
    name: "Le Francais",
    content: <LeFrancaisTabContent />,
  },
  {
    name: "Les mathematiques",
    content: "hello",
  },
  {
    name: "Science et Technology",
    content: "hello",
  },
  {
    name: "Outdoor Education",
    content: "hello",
  },
];

const Week1Content = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/weekly-videos"); // Navigate to /weekly-videos on click
  };
  return (
    <Box w={"full"}>
      <Box
        bg={"rgba(97, 192, 191, 0.12)"}
        w={"full"}
        py={3}
        borderBottom={"2px solid #61C0BF"}
        color={"primary"}
        fontWeight={"semibold"}
        fontSize={16}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        onClick={handleClick}
        cursor={"pointer"}
      >
        Week 1 Content
      </Box>
      <Tabs>
        <TabList display="flex" flexWrap="wrap" width="100%">
          {tabData.map((tab, index) => (
            <Tab
              py={4}
              w={{ base: "full", lg: "194.7px" }}
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
  );
};

export default Week1Content;
