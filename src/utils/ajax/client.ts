import axios, { AxiosRequestConfig } from "axios";

const jwtLocalStorageKey = "jwtToken";

const setToken = (token: string | null = null) => {
  if (token) {
    axios.defaults.headers["Content-type"] = "application/json";
    axios.defaults.headers["Authentication"] = token;
  } else delete axios.defaults.headers["Authentication"];
};

export const client = <T = unknown>(config: AxiosRequestConfig): Promise<T> => {
  const { url, method = "get", data } = config;

  if (!!data && method === "get") {
    throw Error("Invalid method type to send body");
  }

  const token = window.localStorage.getItem(jwtLocalStorageKey);
  setToken(token);

  return axios
    .request<T>({
      url,
      method,
      data,
    })
    .then((response) => {
      return response.data;
    });
};
