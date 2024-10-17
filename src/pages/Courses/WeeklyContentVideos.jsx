import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import CoursesAccordion from "../../components/CoursesAccordion";
import { ChevronRightIcon } from "@chakra-ui/icons";
import SKProgramContent from "../../components/SKProgramContent";
import WeeklyVideos from "../../components/WeeklyVideos";

const WeeklyContentVideos = () => {
  return (
    <Flex
      bg={"#f6f6f6"}
      w={"full"}
      justifyContent={{ base: "center", md: "flex-start" }}
      wrap={{ base: "wrap", md: "nowrap" }}
      py={16}
      px={{ base: 3, sm: 6, md: 7, lg: 14, xl: 28 }}
    >
      <Box
        flex="0.2"
        mr={{ base: 0, md: 10 }}
        display="flex"
        justifyContent="center"
      >
        <CoursesAccordion color={true} />
      </Box>
      <Box flex="1">
        <Breadcrumb
          separator={<ChevronRightIcon color="gray.500" />}
          color="#61C0BF"
          fontWeight="semibold"
          fontSize={14}
          my={4}
        >
          <BreadcrumbItem>
            <BreadcrumbLink color={"primary"} href="courses">
              Courses
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <WeeklyVideos />
      </Box>
    </Flex>
  );
};

export default WeeklyContentVideos;
