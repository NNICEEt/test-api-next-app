import useUsers from "@/hooks/useUser";
import { Box, Card, Flex, Text } from "@chakra-ui/react";

const UserList = () => {
  const { data, isLoading } = useUsers();

  if (isLoading) return <Box>Loading ...</Box>;

  return (
    <Flex my="8" flexDirection="column" gap="3">
      {data?.map((item) => (
        <Card px="8" py="4" key={item.id}>
          <Flex
            flexDirection={{ base: "column", sm: "row" }}
            justifyContent="space-between"
          >
            <Text>{item.name}</Text>
            <Text>{item.phone}</Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default UserList;
