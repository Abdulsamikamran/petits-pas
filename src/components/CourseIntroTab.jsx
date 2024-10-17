import React from "react";
import {
  Box,
  Text,
  List,
  ListItem,
  ListIcon,
  Collapse,
  Button,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { ChevronUpIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { FaCircle } from "react-icons/fa";

const CourseIntroTab = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box color="gray.800" fontSize="md" lineHeight="taller">
      <Collapse startingHeight={200} in={isOpen}>
        <Text fontWeight="bold">Bonjour les amis!</Text>
        <Text mt={2}>
          I’m <strong>Madame Amy</strong>, and I am delighted to welcome you to
          the French Readers Program!
        </Text>

        <Text mt={4} fontWeight="bold">
          Here’s what you can expect from our program:
        </Text>
        <List spacing={2} mt={2}>
          <ListItem>
            <ListIcon as={FaCircle} w={1} />
            Support your child’s beginner reader skills in French, even if you
            have zero French knowledge yourself!
          </ListItem>
          <ListItem>
            <ListIcon as={FaCircle} w={1} />I will guide you step-by-step, with
            zero prep and very little time/ effort required on your part.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCircle} w={1} />
            Learn fun games and strategies that you can continue to use
            throughout your child’s learning journey.
          </ListItem>
        </List>

        <Text mt={4} fontWeight="bold">
          Our program is divided into three parts, ensuring a comprehensive
          approach to reading in French:
        </Text>
        <List spacing={2} mt={2}>
          <ListItem>
            <ListIcon as={FaCircle} w={1} />
            <Text as="span" fontWeight="bold">
              Part 1:
            </Text>
            Focuses on 1 letter sounds.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCircle} w={1} />
            <Text as="span" fontWeight="bold">
              Part 2:
            </Text>
            Focuses on 2+ letter sounds.
          </ListItem>
          <ListItem>
            <ListIcon as={FaCircle} w={1} />
            <Text as="span" fontWeight="bold">
              Part 3:
            </Text>
            Focuses on sight words and basic phrasing.
          </ListItem>
        </List>

        <Text mt={4}>
          We are committed to using the science of reading method, which means{" "}
          <strong>your child won’t be learning to guess words</strong>. Instead,
          they will{" "}
          <Text as="span" fontWeight="bold">
            learn how to read by pronouncing the sounds that make up words
          </Text>
          . This method provides a solid foundation for reading proficiency and
          minimizes reading struggles.
        </Text>

        <Text mt={4}>
          I’m excited to embark on this reading journey with you and your child!
        </Text>
        <Text mt={2}>Welcome/ Bienvenue to the French Readers Program!</Text>

        <Text mt={2} fontWeight="bold">
          Madame Amy
        </Text>

        <Text mt={4} fontWeight="bold">
          Ready to begin?
        </Text>
        <Text>
          Start with Part 1, and progress through the program week by week.{" "}
          <Text as="span" fontWeight="bold">
            It’s important to follow the order because we build upon our
            learning each week!
          </Text>
        </Text>

        {/* <VStack mt={4} alignItems="center">
          <Text fontSize="sm" textAlign="center">
            Full program details go here...
          </Text>
        </VStack> */}
      </Collapse>

      <Button
        size="sm"
        fontSize={14}
        variant="link"
        color="primary"
        fontWeight={"semibold"}
        onClick={onToggle}
        mt={4}
      >
        {isOpen ? (
          <>
            SEE LESS <ChevronUpIcon ml={1} />
          </>
        ) : (
          <>
            SEE MORE <ChevronDownIcon ml={1} />
          </>
        )}
      </Button>
    </Box>
  );
};

export default CourseIntroTab;
