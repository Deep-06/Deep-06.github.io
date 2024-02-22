import React from 'react';
import { Box, Heading, Flex, Image, VStack } from '@chakra-ui/react';

function About() {
  return (
    <VStack p={10} className="about.section">
      <Box w="100%">
        <Heading fontSize="4xl" mb="4" color={"red.400"} >
          About Me
        </Heading>
        
        <Box
          id="user-detail-intro"
          fontSize="2xl"
          background="linear-gradient(135deg, #0072B5, #033245)"
          color="white"
          borderRadius="xl"
          boxShadow="md"
          padding="10"
          ml={10} mr={10}
          data-aos="zoom-in-up"
        >
          <Flex alignItems="center" gap={[10,10,20]} direction={['column', 'column', 'row']} justify="center" align="center">
            <Image w={["70%","70%","40%"]}
              src="https://learntocodewith.me/wp-content/uploads/2022/07/Building-a-portfolio-website.jpg"
              alt="Profile Image"
              borderRadius="80"
              boxSize="40%" // Adjusted to occupy 30% of the width
              marginRight="20px" // Add marginRight to the Image
              
            />
            <Box fontSize='l'  textAlign={'justify'}>Highly Skilled Full Stack Web Developer and expertise in React.js, Node.js, MongoDB, with knowledge of RESTful
            API design and HTML/CSS. Demonstrated expertise in creating solo
            and collaborative projects. Strong problem-solving abilities and
            excellent communication skills to deliver functional web applications.
            </Box>
          </Flex>
        </Box>
      </Box>
    </VStack>
  );
}

export default About;