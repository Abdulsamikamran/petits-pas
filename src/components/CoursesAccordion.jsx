import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  CircularProgress,
  CircularProgressLabel,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import arrow from "../assets/arrow.svg";
import { useNavigate } from "react-router-dom";

const CustomAccordionItem = ({ title, children, isFirst, color }) => {
  const borderColor = color ? "#61C0BF" : "#D1D1D1";
  const backgroundColor = color ? "white" : "#F6F6F6";

  return (
    <AccordionItem
      mb={"10px"}
      bgColor={backgroundColor}
      border={`1px solid ${borderColor}`}
      roundedTop={isFirst ? "0" : "10px"}
      roundedBottom="10px"
    >
      {({ isExpanded }) => (
        <>
          <Box>
            {/* Accordion Button */}
            <AccordionButton py={4}>
              <Flex justifyContent={"space-between"} w={"full"} gap={4}>
                <Box
                  as="span"
                  flex="1"
                  fontWeight={"medium"}
                  fontSize={16}
                  textAlign="left"
                >
                  {title}
                </Box>

                <Image
                  src={arrow}
                  transform={isExpanded ? "rotate(180deg)" : "rotate(0deg)"}
                  transition="transform 0.3s ease"
                />
              </Flex>
            </AccordionButton>
          </Box>

          {/* Accordion Panel (Content) */}
          <AccordionPanel pb={4} borderTop={`1px solid ${borderColor}`}>
            {children}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};

const CoursesAccordion = ({ color }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/my-full-year-french-course");
  };

  return (
    <Box w={"298px"}>
      <Box
        bgColor={"#61C0BF"}
        color={"white"}
        px={3}
        py={2}
        roundedTop={"20px"}
        fontWeight={"semibold"}
        fontSize={24}
      >
        Courses
      </Box>

      <Accordion allowToggle>
        <CustomAccordionItem
          title="Over all course progress"
          isFirst
          color={color}
        >
          {/* Content for the overall course progress */}
          <VStack justifyContent={"center"}>
            <CircularProgress
              rounded={"10px"}
              size={"182px"}
              thickness={"8px"}
              value={40}
              color="#61C0BF"
              sx={{
                "& .chakra-progress__indicator": {
                  strokeLinecap: "round",
                },
              }}
            >
              <CircularProgressLabel>
                <VStack spacing={0}>
                  <Text fontSize={12} color={"#667085"}>
                    course
                  </Text>
                  <Text fontWeight={"medium"} fontSize={32}>
                    40%
                  </Text>
                </VStack>
              </CircularProgressLabel>
            </CircularProgress>

            <HStack spacing={3}>
              <Flex alignItems={"center"} gap={2}>
                <Box bgColor={"#61C0BF"} rounded={"full"} w={2} h={2}></Box>
                <Text>Step 1</Text>
              </Flex>
              <Flex alignItems={"center"} gap={2}>
                <Box bgColor={"#61C0BF"} rounded={"full"} w={2} h={2}></Box>
                <Text>Step 2</Text>
              </Flex>
              <Flex alignItems={"center"} gap={2}>
                <Box bgColor={"#61C0BF"} rounded={"full"} w={2} h={2}></Box>
                <Text>Step 3</Text>
              </Flex>
            </HStack>
          </VStack>
        </CustomAccordionItem>

        <CustomAccordionItem
          title="French Support Course For Parents"
          color={color}
        >
          {/* Content of the second accordion item */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </CustomAccordionItem>

        {/* Apply onClick handler for "My Full Year of French Program" */}
        <CustomAccordionItem
          title="My Full Year of French Program"
          color={color}
        >
          <Text fontWeight={"semibold"} fontSize={16} my={4}>
            Course Progress
          </Text>
          <VStack
            justifyContent={"center"}
            onClick={handleNavigate}
            cursor="pointer"
          >
            <CircularProgress
              rounded={"10px"}
              size={"182px"}
              thickness={"8px"}
              value={40}
              color="#61C0BF"
              sx={{
                "& .chakra-progress__indicator": {
                  strokeLinecap: "round",
                },
              }}
            >
              <CircularProgressLabel>
                <VStack spacing={0}>
                  <Text fontSize={12} color={"#667085"}>
                    Course
                  </Text>
                  <Text fontWeight={"medium"} fontSize={32}>
                    40%
                  </Text>
                </VStack>
              </CircularProgressLabel>
            </CircularProgress>
          </VStack>
        </CustomAccordionItem>

        <CustomAccordionItem
          title="French On Demand Learning Platform"
          color={color}
        >
          {/* Content of the fourth accordion item */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </CustomAccordionItem>
      </Accordion>
    </Box>
  );
};

export default CoursesAccordion;
