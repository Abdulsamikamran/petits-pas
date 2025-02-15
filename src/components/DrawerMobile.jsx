import React from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Image,
  Center,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";

const DrawerMobile = (props) => {
  return (
    <Drawer
      isOpen={props.isOpen}
      placement="left" // Drawer opens from the left
      onClose={props.onClose}
      finalFocusRef={props.btnRef} // Focus back to the button when the drawer closes
    >
      <DrawerOverlay />
      <DrawerContent>
        <Box>
          <DrawerHeader>
            <Image w={20} src={logo} alt="logo" />
          </DrawerHeader>
          <DrawerCloseButton pt={6} />
        </Box>

        <DrawerBody>
          <Stack spacing={3} as={"nav"}>
            {props.Links.map((link) => (
              <Box
                as="a"
                key={link.name} // Using link.name as the key
                href={link.path} // Using the path directly from the object
                px={4}
                py={2}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                  bg: "gray.200", // Optional: add hover effect
                }}
              >
                {link.name}
              </Box>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerMobile;
