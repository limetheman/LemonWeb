'use client'
import { Box, Button, ChakraProvider, Divider, Heading, keyframes, SlideFade, Container, Text, useDisclosure, Image, Flex, Skeleton, SimpleGrid, AbsoluteCenter, Highlight, Tag, LinkOverlay, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import React from "react";
import Navbar from "./Components/Navbar";
import ProjectCard from "./Components/ProjectCard";
import { TypeAnimation } from 'react-type-animation';
import { Reveal } from "./Components/Reveal";
import NextLink from 'next/link'


export default function Home() {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue('linear-gradient( 174.2deg,  rgba(255,244,228,1) 7.1%, rgba(240,246,238,1) 67.4% )', '#1a202c');
  const color = useColorModeValue("black.400", "white.400")
  const nvbg = useColorModeValue("white.800", "black.800")


  return (
    <Box minHeight="100%" paddingTop="50px" bgGradient={bg} color={color}>
      <Navbar navBg={nvbg}/>
      <Button variant= "solid" display="flex" justifyContent="flex-start" onClick={toggleColorMode}>Wanna Change Colors?</Button>
      <Container as="div" maxW="80%">
        <Box height={15}>
        </Box>
        <Flex id="header" justifyContent={"center"}>
          <Reveal>
            <Heading as="h1" size="2xl" my="10px" p="10px">
              👋Hi, My Name is Liem!
            </Heading>
          </Reveal>
          <Image src="/Selfie.jpg" alt="Selfie!" height="150px" borderRadius="full" alignSelf="center" margin="auto"/>
          <Divider margin="auto" width="20%" my="20px"/>
        </Flex>
          <Flex align="center" flexDirection="column">
            <Heading fontSize="4xl" fontWeight={100} noOfLines={1}>
              Interested in:
            </Heading>
            <Heading noOfLines={1}>
              <Tag fontSize="4xl" variant='subtle' colorScheme='blue'>
                <TypeAnimation
                  sequence={[
                    "Full Stack",
                    1000,
                    "React",
                    1000,
                    "Next-js",
                    1000,
                    "TypeScript",
                    1000,
                    "MongoDB",
                    1000,
                  ]}
                  wrapper="span"
                  speed={40}
                  style={{display:'inline-block'}}
                  repeat={Infinity}
                  />
              </Tag>
            </Heading>
          </Flex>
          <Reveal>
            <Heading id="experience" marginTop="150px">
              Experience
            </Heading>
          </Reveal>
          <Divider my="15px"/>
          <SimpleGrid minChildWidth="300px" spacing={10}>
              <Reveal>
                <ProjectCard
                  headingText="Software Enginner Intern"
                  imgSrc="/autonomic.jpg"
                  altSrc="Autonomic Solutions LLC logo"
                  bodyText="Created interactive pages within the Autonomic website using AngularJS, worked with Spring Boot backend and created REST API POST, GET, and PUT endpoints."
                  frameworkText="AngularJS REST-API Spring-Boot AWS-DynamoDB"
                />
              </Reveal>
              <Reveal>
                <ProjectCard
                  headingText="Vice-President"
                  imgSrc="/ADC2logo.png"
                  altSrc="App Developer's Club Logo"
                  bodyText="Current Vice President of ADC, handling internal tasks, such as budget management, leading weekly meetings, and managing sponsorships, while delegating additional workload to club officers"
                  frameworkText="App Developer's Club"

                
                />
              </Reveal>
              <Reveal>
                <ProjectCard
                  headingText="Teaching Assistant"
                  imgSrc="/umn.jpg"
                  altSrc="University of Minnesota Logo"
                  bodyText="Facilitated lab sessions and conducted weekly office hours to reinforce student understanding of Python-based course material"
                  frameworkText="CSCI 1133 - Python"
                />
              </Reveal>
            </SimpleGrid>
        <Divider marginY="100px"/>
        <Reveal>
          <Heading id="projects">
            Projects
          </Heading>
        </Reveal>
          <Divider my="15px"/>
          <SimpleGrid minChildWidth="300px" spacing={10}>
            <Reveal>
              <ProjectCard 
                headingText="Study Buddy" 
                imgSrc="/studyBuddy.png" 
                altSrc="Study Buddy Logo"
                bodyText="Developed a social media application to connect students and tutors"
                frameworkText="React JavaScript Django"
                link="https://devpost.com/software/studybuddy-okrtx4"
                />
            </Reveal>
            <Reveal>
              <ProjectCard
                headingText="Back To Hue"
                imgSrc="/BackToHue.png"
                altSrc="Back To Hue Logo"
                bodyText="Created a mobile application that helps connect with the people around you"
                frameworkText="React Native JavaScript Firebase"
                link="https://back-to-hue-website-fy2r.vercel.app/index.html"
              />
            </Reveal>
            <Reveal>
              <ProjectCard
                headingText="Red Envelope"
                imgSrc="/redenvelope.png"
                altSrc="Red Envelope from Creazilla.com"
                bodyText="Currently developing a mobile money transfer application, creating a satisfying and creative new way of celebrating New Years"
                frameworkText="React Native JavaScript Dwolla"
                link="#"
              />
            </Reveal>
          </SimpleGrid>
        <Divider marginY="100px"/>
        <Box maxW='100%'>
          <Heading id="contact">
            Contact
          </Heading>
          <Divider my="15px"/>
          <SimpleGrid minChildWidth="100px" spacing={5}>
            <NextLink href="https://github.com/limetheman" passHref={true}>
              <Button width="100%" colorScheme='grey' variant='outline'>Github</Button>
            </NextLink>
            <NextLink href="mailto:tliemtran84@gmail.com" passHref={true}>
              <Button width="100%" colorScheme="grey" variant="outline">Email</Button>
            </NextLink>
          </SimpleGrid>
        </Box>
      <Box height="300px">

      </Box>
      </Container>
    </Box>
  )
}
