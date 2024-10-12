import axios from "axios"

const API_URL = import.meta.env.VITE_API_URL

export const axiosInstance = axios.create({
  baseURL: API_URL,
  withCredentials: true,
})

axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
  return config
})

axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    const originalResponse = err.config
    if (
      err.response.status === 401 &&
      originalResponse &&
      !originalResponse._isRetry
    ) {
      originalResponse._isRetry = true

      return axios
        .get(`${API_URL}/refresh`, { withCredentials: true })
        .then((refreshResponse) => {
          localStorage.setItem("token", refreshResponse.data.accessToken)
          return axiosInstance.request(originalResponse)
        })
        .catch((error) => {
          console.error(error)

          return Promise.reject(err)
        })
    }

    return Promise.reject(err)
  }
)
