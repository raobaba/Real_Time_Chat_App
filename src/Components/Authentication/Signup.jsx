import React, { useState } from 'react'
import { VStack, FormControl,useToast, FormLabel, Input, InputRightElement, InputGroup, Button } from '@chakra-ui/react';

export default function Signup() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();
    const [picLoading,setPicLoading] = useState(false);
    const toast = useToast();
    const handleClick = () => { setShow(!show) }
    const postDetails = (pics) => {
       setPicLoading(true);
       if(pics==='undefined'){
          toast({
            title:'Please select an image',
            status:'warning',
            duration:5000,
            isClosable:true,
            position:'bottom'
          })
          return;
       }
       if (pics.type === "image/jpeg" || pics.type === "image/png") {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "chat-app");
        data.append("cloud_name", "dcav4norh");
        fetch("https://api.cloudinary.com/v1_1/dcav4norh/image/upload", {
          method: "post",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
             console.log(data)
            setPicLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setPicLoading(false);
          });
      } else {
        toast({
          title: "Please Select an Image!",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        setPicLoading(false);
        return;
      }
    };
    const submitHandler = ()=>{

    }
    return (
        <VStack>
            <FormControl id="first-name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder="Enter Your Name"
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
            <FormControl id="email" isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input
                    type="email"
                    placeholder="Enter Your Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup size="md">
                    <Input
                        type={show ? "text" : "password"}
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup size="md">
                    <Input
                        type={show ? "text" : "password"}
                        placeholder="Confirm password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm" onClick={handleClick}>
                            {show ? "Hide" : "Show"}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>
            <FormControl id="pic">
                <FormLabel>Upload your Picture</FormLabel>
                <Input
                    type="file"
                    p={1.5}
                    accept="image/*"
                    onChange={(e) => postDetails(e.target.files[0])}
                />
            </FormControl>
            <Button
                colorScheme="blue"
                width="100%"
                style={{ marginTop: 15 }}
                onClick={submitHandler}
                isLoading={picLoading}
            >
                Sign Up
            </Button>
        </VStack>
    )
}
