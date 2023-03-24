import { Box, Container } from "@chakra-ui/react";

const PageContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box pb="64px">
      <Container maxW="768px">{children}</Container>
    </Box>
  );
};

export default PageContent;
