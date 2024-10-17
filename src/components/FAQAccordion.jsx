import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

const FAQAccordion = () => {
  // Array of FAQs
  const faqs = [
    {
      question: "What if we can’t complete the full week’s plans?",
      answer:
        "It's okay! There's so much repetition in kindergarten, so you can always go back to finish previous activities.",
    },
    {
      question: "Do we have to watch all of the videos?",
      answer: "No, you can choose the videos that are relevant to your child.",
    },
    {
      question: "I don’t have a printer or my child isn’t a fan of worksheets.",
      answer:
        "No problem! There are alternatives to the worksheets, and you can improvise based on your child’s learning style.",
    },
    {
      question: "I don’t know how to pronounce something. What can I do?",
      answer:
        "You can use the pronunciation guides available on the site, or feel free to contact support for help.",
    },
  ];

  return (
    <Box my={2}>
      <Box
        bg="teal.300"
        py={4}
        px={{ base: 2, lg: 6 }}
        borderRadius="lg"
        textAlign="center"
      >
        <Text
          fontSize={{ base: 24, lg: 36 }}
          fontWeight={"semibold"}
          color="white"
        >
          Frequently asked questions
        </Text>
        <Text fontSize={{ base: 14, lg: 20 }} color="white" mt={2}>
          Everything you need to know about the course
        </Text>
      </Box>

      <Accordion my={4} allowToggle>
        {faqs.map((faq, index) => (
          <AccordionItem key={index}>
            {({ isExpanded }) => (
              <>
                <AccordionButton py={{ base: 2, lg: 8 }}>
                  <Box
                    flex="1"
                    fontWeight={"semibold"}
                    fontSize={{ base: 12, lg: 18 }}
                    textAlign="left"
                    color={"black"}
                  >
                    {faq.question}
                  </Box>

                  {isExpanded ? (
                    <CiCircleMinus color="#61C0BF" size={24} />
                  ) : (
                    <CiCirclePlus color="#61C0BF" size={24} />
                  )}
                </AccordionButton>
                <AccordionPanel pb={4} fontSize={{ base: 10, lg: "md" }}>
                  {faq.answer}
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default FAQAccordion;
