import React from "react";
import CoursesAccordion from "../../components/CoursesAccordion";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import AllCourses from "../../components/AllCourses";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Courses = () => {
  return (
    <>
      <Flex
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
          <CoursesAccordion />
        </Box>
        <Box flex="1">
          <Breadcrumb
            separator={<ChevronRightIcon color="gray.500" />}
            color="#61C0BF"
            fontWeight="semibold"
            fontSize={14}
            my={4}
          >
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Courses</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <AllCourses />
        </Box>
      </Flex>
    </>
  );
};
export default Courses;
