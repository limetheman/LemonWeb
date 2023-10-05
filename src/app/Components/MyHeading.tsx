import React, { ReactNode } from 'react';
import { Heading, HeadingProps } from "@chakra-ui/react";

interface MyHeadingProps extends HeadingProps {
  children: ReactNode;
}

const MyHeading: React.FC<MyHeadingProps> = ({ children, ...props }) => {
  return (
    <Heading letterSpacing={"-0.05em"} as="h1" size="4xl" fontWeight={700} {...props}>
      {children}
    </Heading>
  );
}

export default MyHeading;