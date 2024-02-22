import React, { useEffect } from 'react'
import { Box, Image, Text, Heading } from '@chakra-ui/react';
import { styled } from "styled-components";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {

  useEffect(() => {
    AOS.init();
  }, [])
//data-aos="zoom-in-up"
  return (
    <div  style={{ margin: "25px" }} >
      <Heading fontSize="4xl" color={"red.400"} >
        My Technical Skills
      </Heading>
      <Box fontSize="l"
        color="white"
        borderRadius="xl"
        boxShadow="md"
        padding="10">
      <DIV data-aos="zoom-in">
        <Box  h="180px" p={10} bgColor={"black"} className="skills-card" align="center">
          <Image className="skills-card-img" src="https://cdn-icons-png.flaticon.com/512/732/732212.png" alt="" width={"70%"} />
          <Text className="skills-card-name"   fontSize="l">HTML</Text>
        </Box>
        <Box h="180px" p={10} bgColor={"black"} className="skills-card" align="center">
          <Image className="skills-card-img" src="https://icon-library.com/images/css3-icon/css3-icon-28.jpg" alt="" width={"70%"} />
          <Text className="skills-card-name" mt={2} fontSize="l">CSS</Text>
        </Box>
        <Box h="180px" bgColor={"black"} p={10} className="skills-card" align="center">
          <Image className="skills-card-img" src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png" alt="Skills" width={"70%"} />
          <Text className="skills-card-name" mt={2} fontSize="l">JavaScript</Text>
        </Box>
        <Box h="180px" className="skills-card" bgColor={"black"} p={10} pt="50px" pb="50px" align="center">
          <Image className="skills-card-img" src="https://static-00.iconduck.com/assets.00/react-javascript-js-framework-facebook-icon-2048x1822-f7kq7hho.png" alt="Skills" width="70%" />
          <Text className="skills-card-name" mt={2} fontSize="l">React JS</Text>
        </Box>
        <Box h="180px" className="skills-card" bgColor={"black"} p={9} align="center">
          <Image className="skills-card-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" alt="Skills" width="70%" />
          <Text className="skills-card-name" mt={1} fontSize="l">TypeScript</Text>
        </Box>
        <Box h="180px" className="skills-card" bgColor={"black"} p={10} align="center">
          <Image className="skills-card-img" src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="Skills" width="70%" />
          <Text className="skills-card-name" mt={2} fontSize="l">Redux</Text>
        </Box>
        <Box h="180px" className="skills-card" bgColor={"black"} p={8} align="center">
          <Image className="skills-card-img" src="https://www.coffeeclass.io/logos/chakra-ui.png" alt="Skills" width="70%" />
          <Text className="skills-card-name" mt={1} fontSize="l">Chakra UI</Text>
        </Box>
        <Box h="180px" className="skills-card" bgColor={"black"} p={10} pt="30px" pb="30px" align="center">
          <Image className="skills-card-img" src="https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png" alt="Skills" width="70%" />
          <Text className="skills-card-name" mt={2} fontSize="l">Node JS</Text>
        </Box>
        <Box h="180px" className="skills-card" bgColor={"black"} p={9} align="center">
          <Image className="skills-card-img" src="https://cdn.icon-icons.com/icons2/2415/PNG/512/mongodb_original_logo_icon_146424.png" alt="Skills" width="70%" />
          <Text className="skills-card-name" mt={1} fontSize="l">MongoDB</Text>
        </Box>
        <Box h="180px" className="skills-card" bgColor={"black"} p={10} pt="44px" pb="44px" align="center">
          <Image className="skills-card-img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png" alt="Skills" width="70%" pt="35px" pb="25px" />
          <Text className="skills-card-name" mt={2} fontSize="l">NPM</Text>
        </Box>
      </DIV>
      </Box>
    </div>
  )
}

export default Skills

const DIV = styled.div`
 width:90%;
  display:grid;
  grid-template-columns:repeat(5,160px);
  grid-auto-rows:260px;
  justify-content:center;
  align-items:center;
  column-gap:30px;
  row-gap:5px;
  color:white;
  font-weight:500;
  margin:auto;
  padding:10px;
  //margin-top:10px;

@media screen and (min-width: 601px) and (max-width:1100px){
  grid-template-columns:repeat(3,160px);

}

@media screen and (max-width:600px){
  grid-template-columns:repeat(2,160px);

}


`;