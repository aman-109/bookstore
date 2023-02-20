import { Box, Button, FormControl,Spinner, Input, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import CartProducts from "../Components/CartProduct";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(false)
  const [text,setText]=useState("")
  const [temp,setTemp]=useState(false)
  const [date,setDate]=useState("")
  const toast=useToast()

  useEffect(() => {
    axios
      .get("http://localhost:8080/cart", {
        withCredentials: true,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
      })
      .then((res) =>{return console.log(res.data),setData(res.data.cart)});
    }, [temp]);
    const handleSubmit=()=>{
      
      let res= data?.filter((e)=>e.product_id.name.toLowerCase() === text)
      setData(res)
      setText("")
      
     }

     const handleSort=()=>{
      let x= data?.filter((el)=>el.product_id.updatedAt === new Date(date).toISOString())
      
     }
  

  return (
    <>
      <Navbar />

      <Box w="50%" m="auto" mb={"70px"} border="1px solid "></Box>
          <Text fontSize={"xl"}>Product Cart</Text>
      <Box w="60%" m="auto" mt="20px" display={"flex"} gap={3} justifyContent="space-around" alignItems={"center"}>
        
        <FormControl id="bookname" isRequired>
          <Input
            value={text}
            type="text"
            placeholder="Search Order By Book Name"
            onChange={(e)=>setText(e.target.value)}
          />
        </FormControl>
        

        <Button
          colorScheme="blue"
          width="sm"

          onClick={handleSubmit}
        >
          {loading === true ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="md"
            />
          ) : (
            "Search"
          )}
        </Button>
        <Button colorScheme="blue"
          width="sm" onClick={()=>setTemp(!temp)}>
          Get All Orders
        </Button>
       

      </Box>

     <Box w="40%" display={"flex"} gap={3} m="auto" mt="20px">

     <FormControl id="purchaseddate" isRequired>
          <Input
            value={date}
            type="date"
           
            onChange={(e)=>setDate(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="blue"
          width="sm" onClick={handleSort}>
          Get Orders by purchased date
        </Button>
     </Box>

      <Box bg="white" p={5} m="auto" w="60%">
        <Box w="100%" display={"flex"} justifyContent="space-between">
          {/* Cart Products */}
          <Box w="50%" m="auto">
            {data?.map((ele) => (
              <CartProducts
                name={ele.product_id.name}
                price={ele.product_id.price}
                image={ele.product_id.image}
                purchased_date={ele.product_id.updatedAt}

              />
            ))}
          </Box>
            
         
        </Box>
        

        
      </Box>
    </>
  );
};

export default Cart;
