import { useQuery } from "@tanstack/react-query";

const useReview = () => {
  const {
    data: review = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/reviews");
      return res?.json();
    },
  });

  return [review, loading, refetch];
};

export default useReview;
