import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";

const CartProducts = ({ name, price, image,purchased_date }) => {
  return (
    <>
    
      <Box
        w="100%"
        bg="gray.100"
        display={"flex"}
        justifyContent={"space-around"}
        alignItems="center"
        mb={3}
        border="1px solid"
      >
        <Box w="40%">
          <Image w="100%" h="60px" src={image} alt={name} />
        </Box>

        <Box>
          <Text fontWeight={"bold"} fontSize={"lg"}>{name}</Text>
          <Text fontWeight={"bold"} fontSize={"lg"}> $ {price}</Text>
        </Box>
        <Box>
          {new Date(purchased_date).toString()}
        </Box>
      </Box>
    </>
  );
};

export default CartProducts;
