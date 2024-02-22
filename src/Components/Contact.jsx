import React from 'react'
import { Heading, Box, Flex, Image, HStack, Text, VStack, Input, Button } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  FormControl,
} from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
const Contact = () => {
  return (
    <div style={{  margin: "50px" }} >
      <Heading fontSize="4xl" mb="8" color={"red.400"} >
        Contact Me
      </Heading>
      <Box
        fontSize="2xl"
        // background="linear-gradient(135deg, #0072B5, #033245)"
        color="white"
        borderRadius="xl"
        boxShadow="md"
        padding="10"
        
      >
        <Flex alignItems="center" gap={20} direction={['column', 'column', 'row']} justify="center" align="center">
          <Image
            src="https://learntocodewith.me/wp-content/uploads/2022/07/Building-a-portfolio-website.jpg"
            alt="Profile Image"
            borderRadius="full"
            boxSize="40%"
            marginRight="20px"
          />
          <VStack m="auto" spacing={4} data-aos="zoom-in-up" data-aos-delay="100">
            <HStack spacing={4} data-aos="fade-up">
              <Link href="https://www.linkedin.com/in/deep-shikha-338a051a6/" target='_blank' bgColor="blue" p={2} pl={4} id="contact-linkedin"
              pr={4} borderRadius={10} fontSize='xl' fontWeight="bold">
              <FontAwesomeIcon icon={faLinkedin} size="l" /> Linkedin
              </Link>
                
              <Link href="https://github.com/Deep-06" bgColor="gray" p={2} pl={4} id="contact-github" target='_blank'
              pr={4} borderRadius={10} fontSize='xl' fontWeight="bold">
              <FontAwesomeIcon icon={faGithub} size="l" /> GitHub
              </Link>

              <Link href="mailto:shikhadeep.hzp@gmail.com" bgColor="red.500" p={2} pl={4} id="contact-email" target='_blank'
              pr={4} borderRadius={10} fontSize='xl' fontWeight="bold">
               <EmailIcon boxSize={7} /> Email
              </Link>

              <Link href="tel:+91 9572221994" bgColor="green" p={2} pl={4} id="contact-phone" target='_blank'
              pr={4} borderRadius={10}>
              <PhoneIcon boxSize={7} />
              </Link>

            </HStack>
            {/* <Box>
            <PhoneIcon m={6} boxSize={7} color={'red.400'} id="contact-phone"/> +91-9572221994
            </Box> */}
           
            <VStack w="75%" color={'black'}>
            <div data-aos="fade-up">
            <Text fontSize='2xl' fontWeight="bold" color={"black"} textAlign={"left"}>Get In Touch</Text>
            </div>
            <form >
            <FormControl isRequired>
              <Input placeholder='Full Name' mb={4} />
              <Input placeholder='Email' mb={4}/>
              <Input placeholder='Phone'mb={4} />
              <Input placeholder='Your Message' mb={4} h={"120px"}/>
            </FormControl>
            <HStack spacing={4}>
            <Button type='submit' w="70%" bgColor={"red.500"} border={"1px solid white"}
            fontWeight="bold" color={"white"} fontSize='xl'>
            Submit</Button>
            <Button type='reset' w="35%" bgColor={"black"} border={"1px solid white"}
            fontWeight="bold" color={"white"} fontSize='xl'>
            Clear</Button>
            </HStack>
            </form>
            </VStack>
          </VStack>
        </Flex>
      </Box>
    </div>
  )
}

export default Contact;

