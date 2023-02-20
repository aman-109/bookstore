import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import ProductCard from "../Components/ProductCard";
import { useNavigate } from "react-router-dom";

async function getProducts() {
  let res = await axios("http://localhost:8080/products", {
    withCredentials: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });

  return res;
}


const Home = () => {
  const [data, setData] = useState([]);
  const toast = useToast();
  const [loading,setLoading]=useState(false)
  const [text,setText]=useState("")
  const [temp,setTemp]=useState(false)

  useEffect(()=>{
    getProducts().then((res) =>setData(res.data));

  },[temp])

 const handleSubmit=async()=>{
  try{
    setLoading(true)
    let res = await axios(`http://localhost:8080/products?q=${text}`, {
      withCredentials: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
    setText("")
    setLoading(false)
    // setData()
    setData(res.data)
  }catch(e){
    setLoading(false)
    
    toast({
      title: e.message,
      status: "error",
      duration: 5000,
      isClosable: true,
      position: "top-right",
    });

  }
 }

  const addToCart = async (id) => {
    try {
      let { data } = await axios(
        `http://localhost:8080/products/add-product/${id}`,
        {
          withCredentials: true,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data)
      if (data.status) {
        toast({
          title: data.message,
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <Box w="60%" m="auto" mt="80px" display={"flex"} gap={3} justifyContent="space-around" alignItems={"center"}>
        
        <FormControl id="bookname" isRequired>
          <Input
            value={text}
            type="text"
            placeholder="Search By Book Name"
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
          Get All Books
        </Button>
       

      </Box>
      <Box
        w="100%"
        p={5}
        gap={10}
        display={"grid"}
        mt="70px"
        gridTemplateColumns="repeat(4, 1fr)"
      >
        {data?.map((ele) => (
          <ProductCard data={ele} addToCart={addToCart} />
        ))}
      </Box>

      
    </>
  );
};

export default Home;
