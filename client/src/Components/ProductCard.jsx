import {
    Badge,
    Box,
    Circle,
    chakra,
    Flex,
    Icon,
    Image,
    Tooltip,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { FiShoppingCart } from "react-icons/fi";
  
  function ProductCard({ data, addToCart }) {
    
    return (
      <Box w="100%">
        <Box
          bg={useColorModeValue("white", "gray.800")}
          w="100%"
          borderWidth="1px"
          rounded="lg"
          shadow="lg"
        //   position="relative"
        >
          <Image
            w="100%"
            h="300px"
            src={data.image}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
          />
  
          <Box p="4" lineHeight={8}>
          
            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="lg"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
              >
                {data.name}
              </Box>
              <Tooltip
                label="Add to cart"
                bg="white"
                placement={"bottom"}
                color={"green.500"}
                fontSize={"1.2em"}
              >
                <chakra.a href={"#"} display={"flex"} onClick={()=>addToCart(data._id)}>
                  <Icon as={FiShoppingCart} h={7} w={7} alignSelf={"center"} />
                </chakra.a>
              </Tooltip>
            </Flex>
  
            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="lg" color={useColorModeValue("gray.800", "white")}>
                <Box as="span" color={"gray.600"} fontSize="lg">
                  $
                </Box>
                {data.price}
              </Box>
            </Flex>
          </Box>
        </Box>
      </Box>
    );
  }
  
  export default ProductCard;
  