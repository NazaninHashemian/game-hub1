import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClient from "../services/api-client";

const apiClient = new APIClient<Platform>('/platforms/lists/parents');
export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
useQuery({
  queryKey: ['platforms'],
   queryFn: 
  //  () => 
    apiClient.getAll,
      // .get<FetchResponse<Platform>>('/platforms/lists/parents')
      // .then(res => res.data),
    staleTime:24 * 60 * 60 * 1000,
    initialData: platforms
    // { count: platforms.length, results: platforms, next: null }

});
//  ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
