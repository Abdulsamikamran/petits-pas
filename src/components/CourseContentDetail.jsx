import React from "react";
import SectionHeader from "./SectionHeader";
import CustomVideoPlayer from "./CustomVideoPlayer";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const CourseContentDetail = ({ description }) => {
  return (
    <Box pb={10}>
      <SectionHeader
        title={description}
        variant={"button"}
        description={"French Beginner Readers Classes "}
      />
      <Box
        display={"flex"}
        w={"full"}
        justifyContent={"center"}
        py={{ base: 2, lg: 6 }}
      >
        <CustomVideoPlayer />
      </Box>
      <Flex>
        <Text
          fontWeight={"semibold"}
          fontSize={{ base: 10, lg: 16 }}
          color={"primary"}
          justifyContent={"space-between"}
          w={"full"}
          alignItems={"center"}
        >
          Back to Course
        </Text>

        <Button
          bg="primary"
          color="white"
          // size={{ base: "xs", lg: "md" }}
          rightIcon={<ChevronRightIcon />}
          _hover={{ bg: "teal.500" }}
          borderRadius="5px"
          px={{ base: 6, lg: 6 }}
          py={{ base: 2, lg: 5 }}
          fontSize={{ base: "10px", lg: "md" }}
        >
          Next Lesson
        </Button>
      </Flex>
    </Box>
  );
};

export default CourseContentDetail;
