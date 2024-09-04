import axios from "axios";

import useAuthEasily from "./useAuthEasily";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const axiosSecure = axios.create({
  baseURL: "https://car-doctor-server-mu-sable.vercel.app/",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuthEasily();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
