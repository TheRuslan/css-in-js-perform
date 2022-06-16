import React, { FC, ReactNode } from "react";

import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";

import type { ChakraProps } from "@chakra-ui/system";

type WithChild = {
  children: ReactNode;
  gap?: number;
  id?: string;
  props?: ChakraProps;
};

export const ChakraColumn: FC<WithChild> = ({ children, gap, id, props }) => {
  return (
    <Flex
      bgColor="darkgreen"
      flexDirection="column"
      gap={gap}
      id={id}
      {...props}
    >
      {children}
    </Flex>
  );
};

export const ChakraButton: FC<WithChild> = ({ children }) => {
  return (
    <Button
      padding="32px"
      bgColor="green"
      fontSize="24px"
      borderRadius="4px"
      color="black"
      fontWeight="bold"
      _hover={{ color: "white" }}
    >
      {children}
    </Button>
  );
};
