import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { baseUrl } from "../config/baseURL";

const useCart = () => {
  const { user } = useAuth();

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      if (!user) {
        return [];
      }
      const res = await baseUrl(`/carts?email=${user?.email}`);

      return res.data;
    },
  });
  return [cart, refetch];
};

export default useCart;
