import React, { useEffect } from 'react'
import { useFetchDataStore } from '../store/data';
import { useQuery } from 'react-query';
import { fetchComments } from './fetch';
import Loading from '../lotties/Loading';

export const CommentsFetcher = ({ children }: { children: React.ReactNode }) => {
    const { setData, resetData } = useFetchDataStore();
    const { data, isLoading, isError, error } = useQuery(['comments'], () => fetchComments(), {});

    useEffect(() => {
        if (data) {
            setData(data);
        }
        return () => {
            resetData();
        }
    }, [data])

    if (isLoading) return <Loading />;
    if (isError) throw error;

    return <>{data && children}</>
}