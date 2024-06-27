import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetProducts = () => {
  const productQuery = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/api/products");
      // if (status !== 200) throw new Error("Error fetching products");

      return res.data;
    },
  });

  
  return productQuery;
};
