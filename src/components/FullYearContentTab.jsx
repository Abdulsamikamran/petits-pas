import {
  Box,
  Flex,
  Icon,
  Text,
  Button,
  List,
  ListItem,
  HStack,
} from "@chakra-ui/react";
import { CheckCircleIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { FaCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const courseData = [
  {
    title: "Introduction to the virtual Kindergarten Program",
    isCompleted: true,
    path: "/kindergarden-program", // Add path for navigation
  },
  {
    title: "Part 1. JK/SK Program",
    isCompleted: true,
    path: "/sk-program", // Add path for navigation
  },
  {
    title: "Part 2. JK/SK Program",
    isCompleted: false,
    path: "/part2", // Add a placeholder for the future route
  },
];

const FullYearContentTab = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <Box w="full" py={4} borderRadius="lg" maxW="full" mx="auto">
      <List spacing={3}>
        {courseData.map((course, index) => (
          <ListItem key={index}>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              p={3}
              border="1px"
              borderColor="gray.200"
              borderRadius="md"
              onClick={() => navigate(course.path)}
              cursor={"pointer"}
            >
              <HStack spacing={4}>
                <Icon
                  as={course.isCompleted ? CheckCircleIcon : FaCircle}
                  color={course.isCompleted ? "primary" : "gray.200"}
                  boxSize={6}
                />
                <Text
                  cursor={"pointer"}
                  fontWeight="semibold"
                  fontSize="sm"
                  color={course.isCompleted ? "black" : "gray.500"}
                >
                  {course.title}
                </Text>
              </HStack>
              <Button
                size="sm"
                variant="link"
                color={course.isCompleted ? "primary" : "gray.400"}
                rightIcon={<ChevronRightIcon boxSize={"30px"} />}
                isDisabled={!course.isCompleted}
              />
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default FullYearContentTab;
