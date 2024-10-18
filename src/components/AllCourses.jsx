import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import search from "../assets/search.svg";
import AllCoursesGrid from "./AllCoursesGrid";
import CardImage from "../assets/CardImage.png";
import CardImage2 from "../assets/CardImage2.png";
import CardImage3 from "../assets/CardImage3.png";
import SectionHeader from "./SectionHeader";

//data for cards

const cardDescriptions = [
  "How to Prepare your Child for French School",
  "How to Prepare your Child for French School",
  "How to Prepare your Child for French School",
  "How to Prepare your Child for French School",
  "How to Prepare your Child for French School",
  "Advanced French Writing Techniques",
];
const cardPercentages = ["40%", "70%", "55%", "90%", "25%", "80%"];

const tabData = [
  {
    name: "All Courses",
    content: (
      <AllCoursesGrid
        CardImage={CardImage}
        CardDesc={cardDescriptions}
        Percentage={cardPercentages}
      />
    ),
  },
  {
    name: "Pending Courses",
    content: (
      <AllCoursesGrid
        CardImage={CardImage2}
        CardDesc={cardDescriptions}
        Percentage={cardPercentages}
      />
    ),
  },
  {
    name: "Completed Courses",
    content: (
      <AllCoursesGrid
        CardImage={CardImage3}
        CardDesc={cardDescriptions}
        Percentage={cardPercentages}
      />
    ),
  },
];

const AllCourses = () => {
  return (
    <Box w={"full"}>
      <SectionHeader
        title="Your Courses"
        description="9 Courses Found"
        variant="input"
      />
      <Tabs>
        <TabList>
          {tabData.map((tab, index) => (
            <Tab
              py={{ base: 3, lg: 4 }}
              w={"full"}
              key={index}
              _selected={{
                bg: "rgba(97, 192, 191, 0.12)",
                color: "#61C0BF",
                borderBottom: "2px solid",
                borderColor: "#61C0BF",
              }}
              color="gray.400"
              fontSize={{ base: 10, md: "sm", lg: "md" }}
            >
              {tab.name}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {tabData.map((tab, index) => (
            <TabPanel key={index}>{tab.content}</TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default AllCourses;
