import React from 'react'
import { VStack, HStack, Box, Image, Text,  Link ,Flex,Button} from "@chakra-ui/react";
import About from './About';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';
import { GitHub } from './GitHub';
import Typewriter from "typewriter-effect"
const Home = () => {
  return (
    <VStack id="home" mt={4}>
      {/* Introduction    */}
      <Flex w="100%" m={5} p={10} direction={['column', 'column', 'row']} justify="center" align="center">
        <VStack spacing={2} pl={10} w={"50%"} color={"black"}>
          <Text fontSize='4xl' fontWeight="extrabold">Hi👋, I am</Text>
          <Text id="user-detail-name" fontSize='4xl' fontWeight="extrabold" color={"black"}>Deepshikha</Text>
          <Text id="user-detail-intro" fontSize='3xl' fontWeight="extrabold"><span style={{color:"rgb(245,101,101)"}}>
          <Typewriter options={{strings:"Full Stack Web Developer",
          autoStart: true,
          loop: true,
          }}/>
          </span></Text>
<br/>
          <HStack spacing={8}>
            <Box  boxSize={10} pt={1} >
              <a href="https://www.linkedin.com/in/deep-shikha-338a051a6/" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} color='#164863' size="2x" /> </a>
            </Box>
            <Box  boxSize={10} pt={1}>
              <a href="https://github.com/Deep-06" target='_blank' rel='noreferrer'><FontAwesomeIcon icon={faGithub} size="2x" color='#164863'/></a>
            </Box>

            <Link href="mailto:shikhadeep.hzp@gmail.com"  p={2} target='_blank'
              borderRadius={10} >
              <EmailIcon boxSize={7} color='#164863' />
            </Link>

            <Link href="tel:+91 9572221994"  p={2} target='_blank'
              borderRadius={10}>
              <PhoneIcon boxSize={7} color='#164863'/>
            </Link>
            <Button id="resume-button-2" color={'white'} bgColor={'#164863'} fontWeight={'bold'} p={3}  fontSize={'xl'} borderRadius={10}>
              <a id="resume-link-2" href="https://drive.google.com/uc?export=download&id=1nfoZujURy-ezMN8qdyAZUFeKtpKqrXlW" alt="resume" download>
              <div onClick={()=>{
                window.open("https://drive.google.com/file/d/1nfoZujURy-ezMN8qdyAZUFeKtpKqrXlW/view?usp=sharing")
              }}
              >RESUME ↓</div>
              </a>
            </Button>
          </HStack>
        </VStack>

        https://drive.google.com/file/d/1nfoZujURy-ezMN8qdyAZUFeKtpKqrXlW/view?usp=sharing

        <Box w={["70%","70%","50%"]} p={5} ml={[20,20,40]} pt={[10,10,0]}>
          <Image id="home-img" className="home-img" src="/Images/Profilepic2.jpeg" alt="Image" width="80%" borderRadius="50%" />
        </Box>
      </Flex>

      {/* About Us */}
      <Box id="about" className="about section">
        <About />
      </Box>


      {/* Skills */}
      <Box id="skills" className="skill-section">
        <Skills />
      </Box>

      {/* Projects */}
      <Box id="projects" className="project-section">
        <Projects />
      </Box>

      {/* Github Stats */}
      <Box id="github" className="github-section">
        <GitHub />
      </Box>

      {/* Contact */}
      <Box id="contact" className="contact-section">
        <Contact />
      </Box>

      <Text fontSize='xl' color={'black'} m={4}>Designed and build by ❤️ Deepshikha, 2023. All right reserved.</Text>
    </VStack>
  )
}

export default Home
