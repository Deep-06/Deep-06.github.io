import React from 'react'
import { Heading, VStack } from '@chakra-ui/react'
import { styled } from "styled-components"
import GitHubCalendar from 'react-github-calendar';
import { Box } from "@chakra-ui/react"
export const GitHub = () => {
  return (
    <VStack spacing={4} m={4} color={'white'}>
      <Heading fontSize="4xl" mb="8" color={"red.400"} >
        Github Overview
      </Heading>
      <Box borderRadius="xl"
        boxShadow="md"
        padding="10">
      <DIV>
        <Box p={2} bgColor={'#141321'} >
          <GitHubCalendar className="react-activity-calendar" username="Deep-06" />
        </Box>
        <Box  p={2} >
          <a href="https://git.io/streak-stats"><img width="100%" id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=Deep-06&theme=radical" alt="GitHub Streak" /></a>
        </Box>
        <Box p={2} >
          <a href="https://git.io/streak-stats"><img width="100%" id="github-stats-card" src="https://github-readme-stats.vercel.app/api?username=Deep-06&show_icons=true&theme=radical" alt="GitHub stats" /></a>
        </Box>
        <Box p={2} >
          <a href="https://git.io/streak-stats"><img width="100%" id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Deep-06&layout=compact&theme=radical" alt="Top Langs" /></a>
        </Box>

      </DIV>
      </Box>
    </VStack>
  )
}

const DIV = styled.div`
display:grid;
grid-template-columns:repeat(2,500px);
align-items:center;
gap:25px;
margin:auto;
box-shadow:'';

@media screen and (max-width: 1000px) {
  grid-template-columns:repeat(1,500px);

}

`;
