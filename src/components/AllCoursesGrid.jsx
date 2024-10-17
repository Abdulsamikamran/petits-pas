import {
  Box,
  Card,
  CircularProgress,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const AllCoursesGrid = ({ CardImage, CardDesc = [], Percentage = [] }) => {
  const navigate = useNavigate();
  if (
    !Array.isArray(CardDesc) ||
    !Array.isArray(Percentage) ||
    CardDesc.length !== Percentage.length
  ) {
    return <Text>Invalid data</Text>;
  }
  const handleCardClick = (desc) => {
    navigate(`/course-details/${desc}`); // Navigate to CourseDetails with the index as a dynamic param
  };
  return (
    <SimpleGrid
      alignItems={"center"}
      justifyItems={"center"}
      w={"full"}
      columns={{ base: 1, md: 1, lg: 2, xl: 3 }}
      gap={{ base: 4, lg: 10, xl: 4 }}
    >
      {CardDesc.map((desc, index) => (
        <Card
          alignItems={"center"}
          cursor={"pointer"}
          key={index}
          variant={"filled"}
          border="1px"
          borderColor="gray.200"
          borderRadius="20px"
          overflow="hidden"
          py={3}
          w={"280px"}
          onClick={() => handleCardClick(encodeURIComponent(desc))}
        >
          <Box position={"relative"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={2}
              px={1}
              w={"64px"}
              h={"35px"}
              bg={"white"}
              roundedRight={"20%"}
              position={"absolute"}
              top={6}
              left={0}
            >
              <CircularProgress
                value={parseInt(Percentage[index])}
                color="#61C0BF"
                thickness="10px"
                size="20px"
              />
              <Text fontWeight={"semibold"} fontSize={14} color={"#61C0BF"}>
                {Percentage[index]}
              </Text>
            </Box>
            <Image src={CardImage} alt={`Card Image `} />
          </Box>
          <Text
            px={4}
            mt={2}
            textAlign={"center"}
            fontWeight={"semibold"}
            fontSize={16}
          >
            {desc}
          </Text>
          <Text textAlign={"center"} fontSize={14} color="gray.500">
            Progress: {Percentage[index] || "N/A"}
          </Text>
        </Card>
      ))}
    </SimpleGrid>
  );
};

export default AllCoursesGrid;
