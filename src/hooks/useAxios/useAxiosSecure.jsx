import axios from 'axios';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const axiosInstance = axios.create({
    baseURL: 'https://hotel-booking-platform-48b83.web.app'
})
const useAxiosSecure = () => {
    const{user, logOut} = useContext(AuthContext);
    axiosInstance.interceptors.request.use(config => {
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config;
    })
    // response
    axiosInstance.interceptors.response.use(response => {
        return response
    },error => {
        if(error.status === 401 || error.status === 403){
            logOut()
            .then(res => {
                console.log('Logout for 401/403 status code!', res)
            })
            .catch(err => {
                console.log(err)
            })
        }
        console.log("error from instance -->", error)
        return Promise.reject(error)
    })

    return axiosInstance
};

export default useAxiosSecure;