import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import genres from '../data/genres';
import APIClient from '../services/api-client';
import Genre from '../entities/Genre';

const apiClient = new APIClient<Genre>('/genres');
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