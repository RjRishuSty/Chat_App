import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import useAxios from './useAxios';
import { checkAuth } from '../store/slices/auth.slice';

const useAuthCheck = () => {
    const dispatch = useDispatch();
    const { request } = useAxios();

    useEffect(() => {
        const verifyAuth = async () => {
            try {
                const response = await request({
                    url: '/api/auth/check',
                    withCredentials: true
                })
                dispatch(checkAuth(response.data.data));
                console.log("USE_AUTH",response.data.data)
            } catch (error) {
                console.log(error.message);
            }
        }
        verifyAuth();
    }, [dispatch])
}

export default useAuthCheck