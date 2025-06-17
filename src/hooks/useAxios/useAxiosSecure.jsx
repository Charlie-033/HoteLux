import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthContext';

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_ROOT_URL
})

const useAxiosSecure = () => {
    const{user, logOut} = useContext(AuthContext);
    
    useEffect(() => {
        axiosInstance.interceptors.request.use(config => {
        if(user?.accessToken){
            config.headers.authorization = `Bearer ${user.accessToken}`
        }
        return config;
    })
    // response
    axiosInstance.interceptors.response.use(response => {
        return response
    },error => {
        if(error.response?.status === 401 || error.response?.status === 403){
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
    },[logOut, user])

    return axiosInstance
};

export default useAxiosSecure;