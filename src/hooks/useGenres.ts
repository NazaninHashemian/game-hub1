import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import genres from '../data/genres';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Genre>('/genres');
export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: 
  // () => 
    apiClient.getAll,
      // .get<FetchResponse<Genre>>('/genres')
      // .then(res => res.data),
    staleTime: ms('24h'),
    // 24 * 60 * 60 * 1000,
    initialData: genres
    // { count: genres.length, results: genres, next: null }

});

// ({ data: genres, isLoading: false, error: null })

export default useGenres;