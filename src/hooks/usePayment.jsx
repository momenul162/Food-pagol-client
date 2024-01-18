import useAuth from "./useAuth";
import { baseUrl } from "../config/baseURL";
import { useQuery } from "@tanstack/react-query";

const usePayment = () => {
  const { user } = useAuth();

  const { refetch, data: payment = [] } = useQuery({
    queryKey: ["payments", user?.email],
    queryFn: async () => {
      if (!user) {
        return [];
      }
      const res = await baseUrl(`/payments?email=${user?.email}`);

      return res.data;
    },
  });
  return [payment, refetch];
};

export default usePayment;
