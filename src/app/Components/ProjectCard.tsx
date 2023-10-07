
'use client'
import { Divider, Image, LinkBox, LinkOverlay } from "@chakra-ui/react";
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

export default function ProjectCard(props: Props) {
    return(
        <LinkBox as="div">
            <LinkOverlay href={props.link}>
            <Card maxW='lg' minH="lg" borderRadius="xl" boxShadow="base">
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
                    <Heading size="sm">{props.frameworkText}</Heading>
                    <Text>{props.bodyText}</Text>
                </Stack>
                </CardBody>
            </Card>
            </LinkOverlay>
        </LinkBox>
    )
}
