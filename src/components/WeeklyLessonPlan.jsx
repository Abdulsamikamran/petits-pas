import {
  Box,
  Text,
  ListItem,
  UnorderedList,
  Stack,
  Divider,
} from "@chakra-ui/react";
import FAQAccordion from "./FAQAccordion";

const WeeklyLessonPlan = () => {
  return (
    <Box maxW="full" color={"#6D6D6D"} py={8}>
      <Box
        bg="rgba(97, 192, 191, 0.12)"
        py={8}
        px={{ base: 4, md: 8 }}
        borderRadius="lg"
        textAlign="left"
      >
        <Text as="span" fontWeight="bold" color="primary">
          Please note:
        </Text>
        <Text as="span" color="gray.800" ml={2}>
          The unmentioned Kindergarten subjects: “personal & social
          development”, “the arts”, and “health & physical education”, will be
          incorporated into the lessons of the other subjects. Note that,
          although “le français” has its own category, we’re learning French the
          whole time as we practice our skills in the other categories.
        </Text>
      </Box>
      {/* Weekly Lesson Plan */}
      <Box my={8}>
        <Text fontSize={20} color={"black"} fontWeight="semibold" mb={2}>
          Weekly Lesson Plan / Organization:
        </Text>
        <Text mb={4}>
          Each weekly plan is divided into school subjects. It’s up to you to
          decide when you complete the lessons and activities with your child.
          In my experience, it’s best to choose the activities that require more
          concentration in the mornings, and save the movement & exploration
          activities for the afternoon. Of course this depends on your
          availability- do what works best for your family!
        </Text>
      </Box>
      <Box my={8}>
        <Text as="span" color={"black"} fontWeight="semibold" fontSize="20px">
          Note regarding the seasons:
        </Text>
        <Text as="span" ml={2}>
          Though this program was originally created to follow this seasonal
          plan: Part 1 = Fall, Part 2 = Winter, Part 3 = Spring…we had
          participants from across the globe joining us and so even if you are
          completing this program with weather that differs, there will always
          be alternative ideas provided. You can fully complete this program at
          any point of the year—no need to wait for the correct season. That
          said, there are a few season-related activities—I will make a note of
          them beside their weekly plan button for you. If you’d like to find
          the “outdoor education French cheat sheet” related to the season you
          are in, hop into the first week of Part 1, 2, or 3, to download the
          relevant outdoor ed cheat sheet.
        </Text>
      </Box>

      <Box mb={8}>
        <Text fontSize={20} color={"black"} fontWeight="semibold" mb={4}>
          What items does this program require?
        </Text>
        <Text mb={2}>
          I always try my best to make my planning as simple as possible in
          order to ensure that all families are able to complete the activities.
          There are only a few things that are absolutely mandatory:
        </Text>

        <Stack direction={{ base: "column", md: "row" }} spacing={10} mb={4}>
          <Box flex={0.5}>
            <UnorderedList spacing={3}>
              <ListItem>Paper</ListItem>
              <ListItem>
                Colourful crayons/pencils/markers of some kind
              </ListItem>
              <ListItem>Pencils</ListItem>
              <ListItem>
                A shaker (this can even be a small container with rice!
                Something that makes a similar noise)
              </ListItem>
              <ListItem>
                A play scarf (this can even be a pillow case or light blanket)
              </ListItem>
            </UnorderedList>
          </Box>

          <Box
            flex={0.5}
            bg="rgba(97, 192, 191, 0.12)" // Background color (similar to the one in the image)
            p={4}
            borderRadius="md" // Rounded corners
            color="gray.800" // Text color to contrast with the background
          >
            <Text color={"primary"} fontWeight="semibold" mb={3} fontSize={16}>
              Not mandatory, but helpful:
            </Text>
            <UnorderedList spacing={2}>
              <ListItem>Construction paper</ListItem>
              <ListItem>Scissors</ListItem>
              <ListItem>Glue</ListItem>
              <ListItem>White board + markers</ListItem>
            </UnorderedList>
          </Box>
        </Stack>
      </Box>

      <FAQAccordion />
    </Box>
  );
};

export default WeeklyLessonPlan;
