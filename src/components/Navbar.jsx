import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../assets/logo.svg";
import avatar from "../assets/avatar.svg";
import React from "react";
import DrawerMobile from "./DrawerMobile";

const Links = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/courses" },
  { name: "Order", path: "/order" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Box px={{ base: 3, sm: 6, md: 7, lg: 14, xl: 28 }} py={3}>
        <Flex alignItems={"center"} justifyContent={"space-between"} w="f">
          <IconButton
            ref={btnRef}
            size={"md"}
            icon={<HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box>
            <Image w={{ base: 28, sm: 36 }} src={logo} alt="logo" />
          </Box>

          <HStack
            alignItems={"center"}
            color={"#B9B9B9"}
            as={"nav"}
            spacing={{ md: 0, lg: 4 }}
            display={{ base: "none", md: "flex" }}
          >
            {Links.map(({ name, path }) => (
              <Box
                key={name}
                as={Link}
                to={path}
                px={2}
                py={1}
                rounded={"md"}
                _hover={{
                  fontWeight: 600,
                }}
              >
                {name}
              </Box>
            ))}
          </HStack>

          <Avatar
            size={{ base: "md", sm: "lg", md: "lg", lg: "xl" }}
            src={avatar}
          />
        </Flex>
      </Box>
      <DrawerMobile
        isOpen={isOpen}
        onClose={onClose}
        btnRef={btnRef}
        Links={Links}
      />
    </>
  );
};

export default Navbar;
