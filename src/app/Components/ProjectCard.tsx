
'use client'
import { Divider, Highlight, Image, LinkBox, LinkOverlay, keyframes } from "@chakra-ui/react";
import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

interface Props {
    headingText: string,
    imgSrc: string,
    altSrc: string,
    bodyText: string,
    frameworkText: string,
    link?: string,
}


const animation = keyframes `
    from {
  }

    to {


  }

    10% {
    transform: translate3d(0, -1px, 0);
 }

    20%, {
        transform: translate3d(0, -2px, 0);
    }

    30%, {
        transform:translate3d (0, -2px, 0)
    }

    40%,{
        transform: translate3d(0, -4px, 0)
    }
 `;


export default function ProjectCard(props: Props) {
    const myAnimation = `${animation} 1s`;

    return(
        <LinkBox as="div" borderRadius="lg">
            <LinkOverlay href={props.link} borderRadius="lg">
            <Card maxW='lg' minH="lg" borderRadius="xl" boxShadow="base"
                _hover={{
                    animation: myAnimation
                }}>
                <CardBody>
                <Image 
                    src= {props.imgSrc}
                    alt={props.altSrc}
                    borderRadius="lg"
                    minHeight="60%"
                    margin="auto"
                />
                <Divider marginTop="30px" marginBottom="10px"/>
                <Stack>
                    <Heading size='md'>{props.headingText}</Heading>
                    <Heading lineHeight='tall' size="sm">
                    <Highlight 
                        query={['AngularJS', 'React', 'JavaScript', "Django", "Firebase", "Native", "REST-API", "Spring-Boot", "AWS-DynamoDB", "Dwolla"]}
                        styles={{ fontWeight:"bold", px: '2', py: '1', rounded: 'full', bg: 'cyan.100' }}>
                        {props.frameworkText}
                    </Highlight>
                    </Heading>
                    <Text>{props.bodyText}</Text>
                </Stack>
                </CardBody>
            </Card>
            </LinkOverlay>
        </LinkBox>
    )
}
