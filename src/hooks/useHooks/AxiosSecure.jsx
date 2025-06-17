import React from 'react';
import useAxiosSecure from '../useAxios/useAxiosSecure';


const AxiosSecure = () => {
    const axiosSecure = useAxiosSecure();
    return {axiosSecure}
};

export default AxiosSecure;