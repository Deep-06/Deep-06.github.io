import { VStack,Image ,Text, HStack, Heading, Box,Button} from '@chakra-ui/react'
import React from 'react'
//import { Link } from '@chakra-ui/react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {styled} from "styled-components"
//import {ViewIcon} from "@chakra-ui/icons"

const Projects = () => {
  return (
    <div>
      <Heading fontSize="4xl" mb="8" color={"red.400"} >
        Projects
      </Heading>
    
    <DIV>
      <VStack className="project-card" alignItems={'left'} h="650px" bgColor={'#9BBEC8'} color="black" p={6} m={4} borderRadius="xl" boxShadow="md" >
      <Box height='250px'>
      <Image src="/Images/Wandder.png" alt="Image" width='100%' height='100%' data-aos="zoom-in-up"/>
      </Box>
        <Text className="project-title" fontSize='3xl' textAlign={'left'} fontWeight="bold">Wandder</Text>
        <Text className="project-description" fontSize='l' p={2} textAlign={'justify'}>An online travel 
        booking application called Wandder. Implemented user login and signup functionality using local 
        storage for a seamless experience. Designed a responsive homepage providing information about 
        categories, guides, FAQ sections, and a 'Need Help' section. Developed a booking page with a 
        confirmation pop-up for successful booking</Text>
        <Text className="project-tech-stack" fontSize='l'  fontWeight={'bold'} textAlign={'left'}>TECH STACKS: HTML | CSS | JavaScript</Text>
         <HStack spacing={8} p={4}>
         <Button className="project-github-link" fontStyle={'bold'} fontSize={'xl'} color={'white'} bgColor={'#164863'}>
          <a href="https://github.com/Deep-06/choice-rice-2961" alt='project' target='_blank' rel='noreferrer'>View Code</a>
         </Button>
        
         <Button className="project-deployed-link" fontStyle={'bold'} fontSize={'xl'} color={'white'} bgColor={'#164863'}>
          <a href="https://bejewelled-rugelach-9819e4.netlify.app/home" alt='project' target='_blank' rel='noreferrer'>Live App</a>
         </Button>
         
              
         </HStack>
      </VStack>

      <VStack className="project-card" alignItems={'left'} bgColor={'#9BBEC8'} color="black" p={6} m={4} borderRadius="xl" boxShadow="md" h="650px">
      <Box height='250px'>
      <Image src="/Images/Medicare.png" alt="Image" width='100%' height='100%' data-aos="zoom-in-up"/>
      </Box>
        <Text className="project-title" fontSize='3xl' textAlign={'left'} fontWeight="bold">MediCare</Text>
        <Text className="project-description" fontSize='l' p={2} textAlign={'justify'}>This component is part of 
        a healthcare application that allows users to search and book appointments with specialist doctors
         online. This component primarily handles the display of a list of doctors based on selected 
         categories and offers the ability to filter doctors by category.</Text>
        <Text className="project-tech-stack" fontSize='l'  fontWeight={'bold'} textAlign={"left"}>TECH STACKS: HTML | CSS | JavaScript | React | React-redux | Axios | Chakra-ui | Styled Components</Text>
         <HStack spacing={8} p={4}>
         <Button className="project-github-link" fontStyle={'bold'} fontSize={'xl'} color={'white'} bgColor={'#164863'}>
          <a href="https://github.com/Deep-06/MediCare" alt='project' target='_blank' rel='noreferrer'>View Code</a>
         </Button>
        
         <Button className="project-deployed-link" fontStyle={'bold'} fontSize={'xl'} color={'white'} bgColor={'#164863'}>
          <a href="https://medicare-three.vercel.app/" alt='project' target='_blank' rel='noreferrer'>Live App</a>
         </Button>

        
         </HStack>
      </VStack>

      <VStack className="project-card" alignItems={'left'} bgColor={'#9BBEC8'} color="black" p={6} m={4} borderRadius="xl" boxShadow="md" h="650px">
      <Box height='250px'>
      <Image src="/Images/Freshbasket.png" alt="Image" width='100%' height='100%' data-aos="zoom-in-up"/>
      </Box>
        <Text className="project-title" fontSize='3xl' textAlign={'left'} fontWeight="bold">FreshBasket</Text>
        <Text className="project-description" fontSize='l' p={2} textAlign={'justify'}>An online Food Product
        booking app. Implemented user login and signup functionality for a seamless experience. Designed a responsive homepage providing information about 
        Product Page with Sorting and Filtering functionality, About, Payment and a Single Product Page. Developed a booking page with a 
        confirmation pop-up for successful payment</Text>
        <Text className="project-tech-stack" fontSize='l'  fontWeight={'bold'} textAlign={'left'}>TECH STACKS: HTML | CSS | JavaScript | React | Redux | Styled Components | Axios | Chakra UI</Text>
         <HStack spacing={8} p={4}>
         <Button className="project-github-link" fontStyle={'bold'} fontSize={'xl'} color={'white'} bgColor={'#164863'}>
          <a href="https://github.com/Deep-06/FreshBasket" alt='project' target='_blank' rel='noreferrer'>View Code</a>
         </Button>
        
         <Button className="project-deployed-link" fontStyle={'bold'} fontSize={'xl'} color={'white'} bgColor={'#164863'}>
          <a href="https://freshbasket.vercel.app/" alt='project' target='_blank' rel='noreferrer'>Live App</a>
         </Button>
         

              
         </HStack>
      </VStack>

      

      <VStack className="project-card"  alignItems={'left'} bgColor={'#9BBEC8'} color="black" p={6} m={4} borderRadius="xl" boxShadow="md" h="650px">
      <Box height='250px'>
      <Image src="/Images/Tooth Talk.png" alt="Image" width='100%' height='100%' data-aos="zoom-in-up"/>
      </Box>
        <Text className="project-title" fontSize='3xl'  textAlign={'left'} fontWeight="bold" >Tooth Talk</Text>
        <Text className="project-description" fontSize='l' p={2} textAlign={'justify'}>An online appointment 
        booking application. Implemented user login and signup functions for ease of use. Designed a responsive
         homepage, featuring information on the purpose, reviews, services, tips, promotions, and a 
         navigation bar with a footer. Created a booking page that displays the details filled out in the 
         booking form.</Text>
        <Text className="project-tech-stack" fontSize='l'  fontWeight={'bold'} textAlign={"left"}>TECH STACKS: HTML | CSS | JavaScript | React | Chakra-UI</Text>
         <HStack spacing={8} p={4}>
         <Button className="project-github-link" fontStyle={'bold'} fontSize={'xl'} color={'white'} bgColor={'#164863'}>
          <a href="https://github.com/Deep-06/penitent-cave-3104" alt='project' target='_blank' rel='noreferrer'>View Code</a>
         </Button>
        
         <Button className="project-deployed-link" fontStyle={'bold'} fontSize={'xl'} color={'white'} bgColor={'#164863'}>
          <a href="https://toothtalkdentalclinic.vercel.app/" alt='project' target='_blank' rel='noreferrer'>Live App</a>
         </Button>

         </HStack>
      </VStack>
    </DIV>
    </div>
  )
}

export default Projects

const DIV = styled.div`
display:grid;
grid-template-columns:repeat(2,500px);
align-items:center;
gap:25px;
margin:auto;
padding:15px;

@media screen and (max-width: 1000px) {
  grid-template-columns:repeat(1,500px);

}

`;