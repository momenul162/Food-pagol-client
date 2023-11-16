import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useCart = () => {
  const { user } = useAuth();
  const token = localStorage?.getItem("jwt-access-token");

  const shouldFetchData = Boolean(user && token);

  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      if (!shouldFetchData) {
        return [];
      }
      const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`, {
        headers: {
          authorization: `bearer ${token}`,
        },
      });
      return res.json();
    },
    enabled: shouldFetchData,
  });
  return [cart, refetch];
};

export default useCart;
