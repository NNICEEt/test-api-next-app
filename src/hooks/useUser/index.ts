import { User } from "@/models/user";
import useSWR from "swr";

const useUsers = () => {
  const { data, isLoading, error } = useSWR<User[]>(
    "https://jsonplaceholder.typicode.com/users"
  );

  return { data, isLoading, isError: error };
};

export default useUsers;
