import React from "react";
import { Box } from "@chakra-ui/react";

const CustomVideoPlayer = () => {
  return (
    <Box
      position="relative"
      width="100%"
      maxW="950px"
      borderRadius="md"
      overflow="hidden"
      boxShadow="lg"
      mx="auto"
    >
      <video
        src="https://www.youtube.com/watch?v=44FTAS-qT8Q"
        controls
        style={{
          width: "100%",
          height: "400px",
          display: "block",
        }}
      ></video>
    </Box>
  );
};

export default CustomVideoPlayer;
