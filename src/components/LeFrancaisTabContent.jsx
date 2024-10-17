import React from "react";
import image from "../assets/week-content.png";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import { HiPlayCircle } from "react-icons/hi2";
import { TbDownload } from "react-icons/tb";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { SlArrowRight } from "react-icons/sl";

const tasks = [
  "Mon nom (my name) activity",
  "La lettre: S",
  "La lettre: A",
  "La lettre: A",
  "Words of the week: “Je Vois” ",
];

const CustomAccordionItem = ({ title, children, isFirst, isDownloadable }) => {
  return (
    <AccordionItem py={2} px={0} border={"none"}>
      {({ isExpanded }) => (
        <>
          <AccordionButton p={0} border="none">
            <Flex
              w={"full"}
              alignItems="center"
              justifyContent="space-between"
              p={{ base: 1, lg: 3 }}
              border="1px"
              borderColor="gray.200"
              borderRadius="md"
              cursor={"pointer"}
            >
              <HStack spacing={{ base: 1, xl: 2 }}>
                {isFirst ? (
                  <Box w={{ base: 5, xl: 6 }}>
                    <HiPlayCircle size="20" color={"#61C0BF"} />
                  </Box>
                ) : (
                  <Box w={{ base: 4, xl: 6 }}>
                    <CheckCircleIcon color={"#61C0BF"} />
                  </Box>
                )}

                <Text
                  cursor={"pointer"}
                  fontWeight="semibold"
                  fontSize={{ base: "10px", xl: "sm" }}
                  color={"black"}
                >
                  {title}
                </Text>
              </HStack>
              <Flex alignItems={"center"} gap={2}>
                {isDownloadable && (
                  <Text
                    fontWeight={"medium"}
                    fontSize={{ base: "8px", xl: "sm" }}
                    color={"primary"}
                  >
                    Downloadable content
                  </Text>
                )}
                <Box
                  transform={isExpanded ? "rotate(90deg)" : "0"}
                  transition="transform 0.3s ease"
                >
                  <Box boxSize={{ base: 4, xl: 6 }}>
                    <SlArrowRight color={"#61C0BF"} />
                  </Box>
                </Box>
              </Flex>
            </Flex>
          </AccordionButton>

          {/* Accordion Panel (Content) */}
          <AccordionPanel py={4} px={0}>
            {children}
          </AccordionPanel>
        </>
      )}
    </AccordionItem>
  );
};
const LeFrancaisTabContent = () => {
  return (
    <Box py={4}>
      <Image src={image} />
      <Box w={"full"}>
        <Accordion allowToggle>
          <CustomAccordionItem
            title="Step 1. Parent Instructions Video"
            isFirst
          >
            <Box w={"full"} minH={"250px"}>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ANOTHER_VIDEO_ID"
                title="YouTube video"
                frameBorder="0"
                allowFullScreen
                style={{
                  position: "absolute", // Make the iframe position absolute
                  top: 0,
                  left: 0,
                }}
              ></iframe>
            </Box>
          </CustomAccordionItem>

          <CustomAccordionItem title="Step 2. Parent & Child Video">
            {/* Content of the second accordion item */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </CustomAccordionItem>

          <CustomAccordionItem title="This Week’s French Tasks" isDownloadable>
            <Box w={"full"} p={5} border={"1px solid #D1D1D1"} rounded={"lg"}>
              {tasks.map((task) => (
                <Flex
                  mb={4}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                >
                  <Box
                    color={"primary"}
                    bg={"rgba(97, 192, 191, 0.12)"}
                    rounded={"full"}
                    px={4}
                    py={2}
                  >
                    {task}
                  </Box>
                  <TbDownload size={20} color="#61C0BF" />
                </Flex>
              ))}
            </Box>
          </CustomAccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};

export default LeFrancaisTabContent;
