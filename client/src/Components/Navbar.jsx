import { Avatar, Box, Button, Icon, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const navigate=useNavigate()




  return (
    <Box
      w="100%"
      bg={useColorModeValue("rgb(224 242 216)", "white")}
      borderWidth="1px"
      rounded="lg"
      shadow="lg"
      h="60px"
      display="flex"
      justifyContent={"space-around"}
      alignItems="center"
      position={"fixed"}
      top="0"
      left="0"
    >
      <Link to="/">Home</Link>
      <Text fontSize={"xl"} fontWeight="bold">Book Store</Text>
      <Link to="/cart">
        <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
      </Link>
    </Box>
  );
};

export default Navbar;
