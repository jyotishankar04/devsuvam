import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

const useGetBlogs = () => {
    return useQuery({
        queryKey: ["blogs"],
        queryFn: async () => {
            const response = await api.get("/blogs");
            return response.data;
        },
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
    });
};

export { useGetBlogs };