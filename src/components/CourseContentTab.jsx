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
    title: "Part 1: Reading & Writing 1 Letter Sounds",
    isCompleted: true,
  },
  {
    title: "Part 2: Reading & Writing 2 Letter Sounds",
    isCompleted: true,
  },
  {
    title: "Part 3: Reading & Writing Frequent Words & Simple Sentences",
    isCompleted: false,
  },
];

const CourseContentTab = () => {
  const navigate = useNavigate();

  // Corrected function: passing the function inside an arrow function for onClick
  const handleNavigate = (partName) => {
    navigate(`/course-content/${encodeURIComponent(partName)}`);
  };

  return (
    <Box
      w="full"
      p={{ base: 2, lg: 4 }}
      border="1px"
      borderColor="gray.200"
      borderRadius="lg"
      maxW="full"
      mx="auto"
      bg="white"
      boxShadow="sm"
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        borderBottom="1px solid"
        borderColor="gray.200"
        pb={4}
      >
        <HStack spacing={2}>
          <Icon as={CheckCircleIcon} color="gray.600" boxSize={6} />
          <Text fontWeight="bold" fontSize="md">
            3 videos • Total 20 minutes
          </Text>
        </HStack>
      </Flex>

      <List spacing={3} mt={4}>
        {courseData.map((course, index) => (
          <ListItem key={index}>
            <Flex
              alignItems="center"
              justifyContent="space-between"
              p={{ base: 1, lg: 3 }}
              border="1px"
              borderColor="gray.200"
              borderRadius="md"
              bg="gray.50"
            >
              <HStack spacing={{ base: 1, lg: 4 }}>
                <Icon
                  as={course.isCompleted ? CheckCircleIcon : FaCircle}
                  color={course.isCompleted ? "primary" : "gray.200"}
                  boxSize={{ base: 4, lg: 6 }}
                />
                <Text
                  cursor={"pointer"}
                  onClick={() => handleNavigate(course.title)} // Corrected here
                  fontWeight="semibold"
                  fontSize={{ base: "10px", lg: "sm" }}
                  color={course.isCompleted ? "black" : "gray.500"}
                >
                  {course.title}
                </Text>
              </HStack>
              <Button
                fontSize={{ base: "10px", lg: "sm" }}
                size="10px"
                variant="link"
                color={course.isCompleted ? "primary" : "gray.400"}
                rightIcon={<ChevronRightIcon />}
                isDisabled={!course.isCompleted}
              >
                Download Content
              </Button>
            </Flex>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CourseContentTab;
