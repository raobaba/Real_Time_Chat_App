import React, { useState } from 'react'
import { VStack, FormControl, FormLabel, Input } from '@chakra-ui/react';

export default function Signup() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [password, setPassword] = useState();
    const [pic, setPic] = useState();

    return (
        <VStack>
            <FormControl isRequired>
                <FormLabel>Name</FormLabel>
                <Input
                    placeholder='Enter Your Name'
                    onChange={(e) => setName(e.target.value)}
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                    placeholder='Enter Your Email'
                    onChange={(e) => setEmail(e.target.value)}
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>ConfirmPassword</FormLabel>
                <Input
                    placeholder='Enter Your ConfirmPassword'
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                    placeholder='Enter Your Password'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </FormControl>
            <FormControl isRequired>
                <FormLabel>Pic</FormLabel>
                <Input
                    placeholder='Choose Your Pic'
                    onChange={(e) => setPic(e.target.value)}
                />
            </FormControl>

        </VStack>
    )
}
