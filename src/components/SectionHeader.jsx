import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";
import search from "../assets/search.svg";
import { CheckIcon, ChevronRightIcon } from "@chakra-ui/icons";

// Reusable Header component
const SectionHeader = ({ title, description, variant, color }) => {
  return (
    <>
      {/* Flex container for the header */}
      <Flex
        px={{ base: 2, md: 2, lg: 5 }}
        bg={color}
        borderY={"2px solid"}
        borderColor={"gray.200"}
        justifyContent={"space-between"}
        alignItems="center"
        py={4}
      >
        <Box>
          <Text fontWeight={"bold"} fontSize={{ base: 10, lg: 20 }}>
            {title}
          </Text>
          <Text fontSize={{ base: 7, md: 12 }} color={"gray.400"}>
            {description}
          </Text>
        </Box>

        {/* right side content basedd on the variant */}

        {variant === "input" && (
          <InputGroup w={{ base: "50%", xl: "30%" }}>
            <InputLeftElement
              pointerEvents="none"
              h="full"
              display="flex"
              alignItems="center"
            >
              <Image src={search} />
            </InputLeftElement>
            <Input
              type="text"
              placeholder={"Search"}
              py={6}
              color="gray.400"
              _placeholder={{ color: "gray.400" }}
              _focus={{
                borderColor: "#61C0BF",
                boxShadow: "0 0 0 1px #61C0BF",
              }}
            />
          </InputGroup>
        )}

        {variant === "button" && (
          <Button
            bg="primary"
            color="white"
            // size={{ base: "xs", lg: "md" }}
            rightIcon={<CheckIcon />}
            _hover={{ bg: "teal.500" }}
            borderRadius="5px"
            px={{ base: 2, lg: 5 }}
            py={{ base: 2, lg: 5 }}
            fontSize={{ base: "10px", lg: "md" }}
          >
            Mark as completed
          </Button>
        )}

        {/* No content on the right */}
        {variant === "none" && null}
      </Flex>
    </>
  );
};

export default SectionHeader;
