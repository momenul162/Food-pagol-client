import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { baseUrl } from "../config/baseURL";

const useAdmin = () => {
  const { user, loading } = useAuth();

  const { data: isAdmin, isLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      try {
        const res = await baseUrl(`users/admin/${user?.email}`);

        return res.data;
      } catch (error) {
        throw error;
      }
    },
  });
  return [isAdmin, isLoading];
};
export default useAdmin;
