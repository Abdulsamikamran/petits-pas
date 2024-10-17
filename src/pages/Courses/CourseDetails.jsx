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

const CourseDetails = () => {
  const { desc } = useParams();
  const decodedDesc = decodeURIComponent(desc);

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
              <BreadcrumbLink color={"black"} href="courses">
                Courses
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">{decodedDesc}</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <SingleCourseDetail description={decodedDesc} />
        </Box>
      </Flex>
    </>
  );
};

export default CourseDetails;
