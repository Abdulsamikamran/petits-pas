import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import videoimage from "../assets/videoimage.png";
import videoimage2 from "../assets/videoimage2.png";
import videoimage3 from "../assets/videoimage3.png";

const VideoDetail = () => {
  return (
    <>
      <Box maxW={"full"} minH={"300px"} position="relative">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ANOTHER_VIDEO_ID"
          title="YouTube video"
          frameBorder="0"
          allowFullScreen
          style={{
            position: "absolute", // Position the iframe absolutely within the container
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: "20px",
          }}
        ></iframe>
      </Box>
      <Box my={2}>
        <Text py={6} fontWeight={"semibold"} fontSize={16}>
          M. Patate: Les parties du visage
        </Text>
        <Text fontSize={16}>
          Madame Amy helps M. Patate find his eyes (les yeux), nose (le nez),
          mouth (la bouche), and ears (les oreilles). If you own a Mr. Potato
          head and want to play along, I recommend bringing it out for this
          French lesson!
        </Text>
        <Text py={6} fontWeight={"semibold"} fontSize={16}>
          You may also enjoy{" "}
        </Text>
        <Flex w={"full"} gap={5}>
          <VStack w={"full"} bg={"white"}>
            <Image w={"full"} src={videoimage} />
            <Text py={2} px={4} fontSize={10} color={"gray.300"}>
              M. Patate: Parts of the face
            </Text>
          </VStack>
          <VStack w={"full"} bg={"white"}>
            <Image w={"full"} src={videoimage2} />
            <Text py={2} px={4} fontSize={10} color={"gray.300"}>
              M. Patate: Parts of the face
            </Text>
          </VStack>
          <VStack w={"full"} bg={"white"}>
            <Image w={"full"} src={videoimage3} />
            <Text py={2} px={4} fontSize={10} color={"gray.300"}>
              M. Patate: Parts of the face
            </Text>
          </VStack>
        </Flex>
      </Box>
    </>
  );
};

export default VideoDetail;
