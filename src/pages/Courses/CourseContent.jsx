import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import React from "react";
import CoursesAccordion from "../../components/CoursesAccordion";
import SingleCourseDetail from "../../components/SingleCourseDetail";
import { ChevronRightIcon } from "@chakra-ui/icons";
import CourseContentDetail from "../../components/CourseContentDetail";

const CourseContent = () => {
  const { partName } = useParams();

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
            <BreadcrumbItem>
              <BreadcrumbLink
                fontSize={{ base: "10px", lg: "md" }}
                color={"black"}
                href="courses"
              >
                Courses
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                fontSize={{ base: "10px", lg: "md" }}
                color={"black"}
                href="courses"
              >
                French Beginner Readers Classes
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink fontSize={{ base: "10px", lg: "md" }} href="#">
                {partName}
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <CourseContentDetail description={partName} />
        </Box>
      </Flex>
    </>
  );
};

export default CourseContent;
