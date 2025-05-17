
import axios from 'axios';
import { useState } from 'react';

// Set globally ONCE for send the cookies
axios.defaults.withCredentials = true;

const useAxios = () => {
    const [loading, setloading] = useState(false);
    const [error, setError] = useState(null);

    const request = async ({ url, method = "GET", data = null, headers = {} }) => {
        
        setloading(true);
        setError(null);

        try {
            const response = await axios({ url: `http://localhost:3000${url}`, method, data, headers, withCredentials: true });
            return response.data;
        } catch (error) {
            setError(error);
            console.error("Axios Error:", error);
            throw error;
        } finally {
            setloading(false);
        }
    }
    return { request, loading, error };

}


export default useAxios;