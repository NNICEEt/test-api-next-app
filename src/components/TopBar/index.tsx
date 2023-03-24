import { Box, Flex, Heading, Input, Text } from "@chakra-ui/react";

const TopBar = () => {
  return (
    <Flex
      h="144px"
      px="8"
      bgColor="blue.400"
      color="white"
      justifyContent="center"
      alignItems="center"
    >
      <Heading>Website Name</Heading>
    </Flex>
  );
};

export default TopBar;
