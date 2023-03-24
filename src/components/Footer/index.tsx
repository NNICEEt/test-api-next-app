import { Flex, Heading } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      h="64px"
      w="full"
      px="8"
      bgColor="blue.400"
      color="white"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      bottom="0"
    >
      <Heading fontSize="16px">Website Name@2023</Heading>
    </Flex>
  );
};

export default Footer;
