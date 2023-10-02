import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

// export default axios.create({
//   baseURL: "https://api.rawg.io/api",
//   params: {
//     key: "d4f918c7dc4542cd91ca80da0bc0ab96",
//   },
// });
const axiosInstance =  axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "d4f918c7dc4542cd91ca80da0bc0ab96",
  },
});


class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string){
    this.endpoint = endpoint;
  }
  
  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data);
  }

}

export default APIClient;