import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import { fetchComments } from '../fetch';
import Loading from '../../lotties/Loading';
import useFetchDataStore from '../../store/data';

const CommentFetcher = ({children}: {children: React.ReactNode}) => {
    const { data, isLoading, isError, error } = useQuery("comments", fetchComments);
    const {setData, resetData} = useFetchDataStore()

    useEffect(()=>{
        if(data){
            setData(data)
        }
        return () => {
            resetData()
        }
    },[data])

    if (isLoading) return <Loading />
    if (isError) throw error;
    return <>{data && children}</>
}

export default CommentFetcher
