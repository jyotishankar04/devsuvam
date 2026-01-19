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

const useGetABlog = (slug: string) => {
    return useQuery({
        queryKey: ["blog", slug],
        queryFn: async () => {
            const response = await api.get(`/blogs/${slug}`);
            return response.data;
        },
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        enabled: !!slug
    });
};

export { useGetBlogs, useGetABlog };