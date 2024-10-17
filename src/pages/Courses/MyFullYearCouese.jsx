import React from "react";
import CoursesAccordion from "../../components/CoursesAccordion";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import FullYear from "../../components/FullYear";

const MyFullYearCouese = () => {
  return (
    <>
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
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink href="#">Courses</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <FullYear />
        </Box>
      </Flex>
    </>
  );
};

export default MyFullYearCouese;
