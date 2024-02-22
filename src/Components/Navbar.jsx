//import React, { useState } from 'react'
import { styled } from "styled-components"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from '@chakra-ui/react'
import { HamburgerIcon } from "@chakra-ui/icons"
const Navbar = () => {
  // const [showDropdown, setShowDropdown] = useState(false);

  // const handleDropdownToggle = () => {
  //   setShowDropdown(!showDropdown);
  // };

  return (
    <NAVWRAPPER id="nav-menu">
      <h1 style={{ color: "rgb(245,101,101)", fontSize: "30px" }}>DEEPSHIKHA</h1>
      <div id="nav-2">
        <Menu >
          <MenuButton
            // as={IconButton}
            aria-label='Options'
            variant='outline'
          >{<HamburgerIcon />}</MenuButton>
          <MenuList bgColor={'#0F1624'} color={'white'}>
            <MenuItem  bgColor={'#0F1624'} color={'white'}>
            <a href="#home" >HOME</a>
            </MenuItem>
            <MenuItem  bgColor={'#0F1624'} color={'white'}>
            <a href="#about" >ABOUT</a>
            </MenuItem>
            <MenuItem  bgColor={'#0F1624'} color={'white'}>
            <a href="#projects"  >PROJECT</a>
            </MenuItem>
            <MenuItem  bgColor={'#0F1624'} color={'white'}>
            <a href="#github" >GITHUB</a>
            </MenuItem>
            <MenuItem  bgColor={'#0F1624'} color={'white'}>
            <a href="#skills" >SKILLS</a>
            </MenuItem>
            <MenuItem  bgColor={'#0F1624'} color={'white'}>
            <a href="#contact" >CONTACT</a>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
      <div id="nav-1" style={{width:"60%"}}>
      <div  style={{ display: "flex", justifyContent: "space-between", alignItems: "center"  }}>
        <a href="#home" className="nav-link home">HOME</a>
        <a href="#about" className="nav-link about">ABOUT</a>
        <a href="#projects" className="nav-link projects" >PROJECT</a>
        <a href="#github" className="nav-link git">GITHUB</a>
        <a href="#skills" className="nav-link skills">SKILLS</a>
        <a href="#contact" className="nav-link contact">CONTACT</a>
      </div>
</div>
      <a className="nav-link resume" id="resume-button-1" href="https://drive.google.com/uc?export=download&id=1nfoZujURy-ezMN8qdyAZUFeKtpKqrXlW" alt="resume" download>
          <div id="resume-link-1" onClick={() => {
            window.open("https://drive.google.com/file/d/1nfoZujURy-ezMN8qdyAZUFeKtpKqrXlW/view?usp=sharing")
          }}
          >RESUME</div>
        </a>

    </NAVWRAPPER>

  )
}

export default Navbar


const NAVWRAPPER = styled.div`
display:flex;
align-items:center;
gap:25px;
color:white;
height:60px;
justify-content:space-evenly;
font-size:1.2rem;
position:sticky;
top:0;
z-index:10;
background-color:#0F1624;
border-bottom:1px solid rgb(245,101,101);
border-bottom-right-radius:15px;
border-bottom-left-radius:15px;

//#164863 #0F1624

@media screen and (min-width:801px) {
  #nav-2{
    display:none;
  }
}
@media screen and (max-width:800px) {
  #nav-1{
    display:none;
  }
}


`;